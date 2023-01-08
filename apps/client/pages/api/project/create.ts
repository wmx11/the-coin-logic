import { PROJECT_LISTING_REQUEST_EMAIL_ID } from 'constants/email';
import request, { Auth, IsSafeAuth } from 'data/api/request';
import { response } from 'data/api/response';
import { FileType, formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
import { handleImageUpload } from 'data/api/utils/uploadImage';
import { omit } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import slug from 'slug';
import * as emailConfig from 'tcl-packages/email/config';
import { PrismaSchema, prismaClient } from 'tcl-packages/prismaClient';
import { Project } from 'types';
import { signedRequest } from 'utils/signedRequest';

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
      delete values.user;

      const imageData = formData.files.image;

      const logoData = await handleImageUpload({ image: imageData as FileType, prefix: 'logo', storageName: 'logos' });

      const project = await prismaClient?.project.create({
        data: {
          ...(omit(values, 'image') as unknown as PrismaSchema.ProjectCreateArgs),
          user: {
            connect: {
              id: auth.id as string,
            },
          },
          slug: slug(values.name as string),
          isPending: true,
          ...logoData,
        },
      });

      const user = await prismaClient?.user.findUnique({
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
