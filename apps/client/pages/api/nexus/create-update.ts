// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import { formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
import { handleImageUpload } from 'data/api/utils/uploadImage';
import { omit } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';
import { nexusProfile } from 'schemas/nexusProfile';
import slug from 'slug';
import { PrismaSchema, prismaClient } from 'tcl-packages/prismaClient';
import { Provider } from 'types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const createUpdateNexusAccount = async (auth: Auth) => {
    const formData = await handleFormData<Provider & { isUpdate: boolean; tags: string; providerId: string }>(req);

    if (!formData) {
      return responseHandler.forbidden();
    }

    const { name, isUpdate, providerId } = formData.fields;

    try {
      nexusProfile.parse(formData.fields);
    } catch (error) {
      return responseHandler.badRequest(error as string);
    }

    delete formData.fields.backgroundImage;
    delete formData.fields.image;

    const profile = isUpdate
      ? await prismaClient?.provider.findUnique({
          where: {
            id: (providerId as string) || '',
          },
        })
      : undefined;

    const imageData = await handleImageUpload<Provider>({
      image: formData.files.images?.image ? formData.files.images?.image[0] : null,
      prefix: 'image',
      isUpdate,
      instance: profile as Provider,
    });

    const backgroundImageData = await handleImageUpload<Provider>({
      image: formData.files.images?.backgroundImage ? formData.files.images?.backgroundImage[0] : null,
      prefix: 'backgroundImage',
      isUpdate,
      instance: profile as Provider,
    });

    const tags = formData?.fields?.tags && formData?.fields?.tags?.split(',').map((id) => ({ id }));

    const dataObject = {
      ...(omit(formData.fields, ['isUpdate', 'providerId', 'tags']) as PrismaSchema.ProviderCreateInput),
      priceFrom: parseInt(formData?.fields?.priceFrom as unknown as string, 10) || 0,
      priceTo: parseInt(formData?.fields?.priceTo as unknown as string, 10) || 0,
      ...(tags.length > 0
        ? {
            tags: {
              connect: tags,
            },
          }
        : {}),
      ...(isUpdate
        ? {}
        : {
            user: {
              connect: {
                id: auth.id,
              },
            },
          }),
      ...imageData,
      ...backgroundImageData,
    };

    if (isUpdate && providerId) {
      const data = await prismaClient?.provider.update({
        where: {
          id: (providerId as string) || '',
        },
        data: {
          ...dataObject,
        },
        select: {
          slug: true,
        },
      });

      if (!data) {
        return responseHandler.badRequest();
      }

      return responseHandler.ok(data);
    }

    const existingProvider = await prismaClient?.provider.findFirst({
      where: {
        name: name || '',
      },
    });

    if (existingProvider) {
      return responseHandler.badRequest('Profile already exists');
    }

    const data = await prismaClient?.provider.create({
      data: { ...dataObject, slug: slug(formData?.fields?.name as string) || '' },
      select: {
        slug: true,
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(createUpdateNexusAccount);
}

export const config = formDataConfig;
