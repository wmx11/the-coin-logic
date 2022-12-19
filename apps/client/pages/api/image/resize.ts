import request from 'data/api/request';
import { response } from 'data/api/response';
import multiparty from 'multiparty';
import { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';

type ImageRequest = {
  fields: {
    left: string;
    top: string;
    height: string;
    width: string;
  };
  files: {
    imageData: {
      path: string;
    }[];
  };
};

const SUPPORTED_FORMATS = ['svg', 'png', 'jpg', 'jpeg'];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const resizeImage = async () => {
    try {
      const form = new multiparty.Form();
      const data: ImageRequest = await new Promise((resolve, reject) => {
        form.parse(req, function (err, fields, files) {
          if (err) {
            reject({ err });
          }
          resolve({ fields, files });
        });
      });

      const { height, width } = data.fields;

      if (!height || !width) {
        return responseHandler.badRequest('Heigh and width properties must be specified.');
      }

      if (!data.files) {
        return responseHandler.badRequest('No image files were found.');
      }

      const imageData = data.files.imageData[0];

      const image = sharp(imageData.path);
      const metadata = await image.metadata();

      if (!SUPPORTED_FORMATS.includes(metadata?.format?.toLowerCase() as string)) {
        return responseHandler.badRequest('Unsupported file format.');
      }

      const imageBuffer = await image
        .resize({
          width: parseFloat(width as string),
          height: parseFloat(height as string),
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png({ progressive: true, compressionLevel: 9 })
        .toBuffer();

      return responseHandler.ok({ data: imageBuffer.toString('base64') });
    } catch (error) {
      return responseHandler.badRequest(JSON.stringify(error));
    }
  };

  return requestHandler.signedPost(resizeImage);
};

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
