import axios from 'axios';
import { PROJECT_LISTING_REQUEST_EMAIL_ID } from 'constants/email';
import request, { Auth, IsSafeAuth } from 'data/api/request';
import { response } from 'data/api/response';
import { formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
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

  const createUpdateProject = async (auth: Auth) => {
    try {
      const formData = await handleFormData<Project & { tags: string; isUpdate: boolean; projectId: string }>(req);

      if (!formData) {
        return responseHandler.forbidden();
      }

      const values = formData.fields;
      delete values.user;

      const projectInstance = values.isUpdate
        ? await prismaClient?.project.findUnique({
            where: {
              id: (values.projectId as string) || '',
            },
          })
        : undefined;

      const logoData = await handleImageUpload<Project>({
        image: formData.files.images?.image ? formData.files.images?.image[0] : null,
        prefix: 'logo',
        isUpdate: values.isUpdate,
        storageName: 'logos',
        instance: projectInstance as Project,
      });

      const backgroundImageData = await handleImageUpload<Project>({
        image: formData.files.images?.backgroundImage ? formData.files.images?.backgroundImage[0] : null,
        prefix: 'backgroundImage',
        isUpdate: values.isUpdate,
        instance: projectInstance as Project,
      });

      const tags = formData?.fields?.tags && formData?.fields?.tags?.split(',').map((id) => ({ id }));

      const dataObject = {
        ...(omit(values, [
          'image',
          'backgroundImage',
          'isUpdate',
          'projectId',
        ]) as unknown as PrismaSchema.ProjectCreateArgs),
        ...(values.isUpdate
          ? {}
          : {
              user: {
                connect: {
                  id: auth.id,
                },
              },
              slug: slug(values.name as string),
              isPending: true,
              tags: {
                connect: tags,
              },
            }),
        ...logoData,
        ...backgroundImageData,
      };

      if (values.isUpdate && values.projectId) {
        const data = await prismaClient?.project.update({
          where: {
            id: (values.projectId as string) || '',
          },
          data: {
            ...omit(dataObject, [
              'networkId',
              'paymentPlanId',
              'name',
              'contractAddress',
              'maxSupply',
              'pairAddress',
              'description',
              'tags',
            ]),
          },
          select: {
            slug: true,
          },
        });

        if (!data) {
          return responseHandler.badRequest();
        }

        await axios.post(routes.api.cache.clear, {
          cacheKey: `projectData_${data.slug}`,
        });

        return responseHandler.ok(data);
      }

      const project = await prismaClient?.project.create({
        data: {
          ...dataObject,
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

  return requestHandler.signedPost(createUpdateProject);
};

export default handler;

export const config = formDataConfig;
