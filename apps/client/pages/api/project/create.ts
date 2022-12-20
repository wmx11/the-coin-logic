import { PROJECT_LISTING_REQUEST_EMAIL_ID } from 'constants/email';
import request, { Auth, IsSafeAuth } from 'data/api/request';
import { response } from 'data/api/response';
import { formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
import { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import sharp from 'sharp';
import slug from 'slug';
import * as emailConfig from 'tcl-packages/email/config';
import { prismaClient } from 'tcl-packages/prismaClient';
import { Project } from 'types';
import { signedRequest } from 'utils/signedRequest';
import { resolveImagePaths } from 'utils/utils';
import { v4 as uuidv4 } from 'uuid';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const createProject = async (auth: Auth) => {
    try {
      const formData = await handleFormData<Project>(req);

      if (!formData) {
        return responseHandler.forbidden();
      }

      const values = formData.fields;

      const userId = values.user;

      delete values.user;

      const imageData = formData.files.image;

      const logo = sharp(imageData?.path);
      const metaData = await logo.metadata();
      const logoName = uuidv4();

      const project = await prismaClient.project.create({
        data: {
          user: {
            connect: {
              id: userId as string,
            },
          },
          ...values,
          slug: slug(values.name as string),
          isPending: true,
          logo_id: logoName,
          logo_extension: metaData.format,
          logo_height: metaData.height,
          logo_width: metaData.width,
          logo_filesize: imageData?.size,
        },
      });

      await logo.toFile(`${resolveImagePaths().logos}/${logoName}.png`);

      const user = await prismaClient.user.findUnique({
        where: {
          id: auth.id,
        },
        select: {
          name: true,
          email: true,
        },
      });

      await signedRequest<IsSafeAuth>(
        {
          type: 'post',
          url: routes.api.email.submit,
          data: {
            subject: `${user?.name} - I want to list a project`,
            to: emailConfig.default.tclContactEmail,
            templateId: PROJECT_LISTING_REQUEST_EMAIL_ID,
            dynamicTemplateData: {
              project_name: values.name,
              user_email: user?.email,
            },
          },
        },
        auth?.id as string,
        {
          trusted: true,
          signature: 'email_submit',
        },
      );

      return responseHandler.ok(project);
    } catch (error) {
      console.log(error);
      return responseHandler.badRequest(JSON.stringify(error));
    }
  };

  return requestHandler.signedPost(createProject);
};

export default handler;

export const config = formDataConfig;
