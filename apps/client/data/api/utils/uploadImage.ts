import fs from 'fs';
import sharp from 'sharp';
import { resolveImagePaths } from 'utils/utils';
import { v4 as uuidv4 } from 'uuid';
import { FileType } from './handleFormData';

type HandleImageUploadProps<T> = {
  image: FileType;
  prefix: string;
  isUpdate?: boolean;
  storageName?: 'images' | 'logos';
  instance?: T & {
    [key: string]: any;
  };
};

export const handleImageUpload = async <T>({
  image,
  prefix,
  isUpdate,
  instance,
  storageName = 'images',
}: HandleImageUploadProps<T>) => {
  if (!image) {
    return {};
  }

  const data = sharp(image?.path);
  const metaData = await data?.metadata();
  const imageName = uuidv4();

  const imageId = `${prefix}_id`;
  const imageExtension = `${prefix}_extension`;
  const imageFileSize = `${prefix}_filesize`;
  const imageHeight = `${prefix}_height`;
  const imageWidth = `${prefix}_width`;

  const resolvedPath = resolveImagePaths();

  if (isUpdate && instance && instance[imageId]) {
    try {
      fs.unlink(
        `${resolvedPath[storageName as keyof typeof resolvedPath]}/${instance[imageId]}.${instance[imageExtension]}`,
        (err) => {
          console.log(err);
        },
      );
    } catch (error) {}
  }

  const imageDataOjbect = {
    [imageId]: imageName,
    [imageExtension]: metaData?.format,
    [imageFileSize]: image.size,
    [imageHeight]: metaData?.height,
    [imageWidth]: metaData?.width,
  };

  await data?.toFile(`${resolvedPath[storageName as keyof typeof resolvedPath]}/${imageName}.${metaData?.format}`);

  return imageDataOjbect;
};
