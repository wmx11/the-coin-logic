import multiparty from 'multiparty';
import { NextApiRequest } from 'next';

type Image = {
  fieldName: string;
  originalFilename: string;
  path: string;
  size: number;
};

type Files = {
  files: {
    image: Image[];
  };
};

type FormData<Fields> = {
  fields: { [key: string]: any } & Fields[];
  files: {
    image?: Image;
  };
};

export const handleFormData = async <Fields>(req: NextApiRequest): Promise<FormData<Fields> | null> => {
  try {
    const form = new multiparty.Form();
    const data: FormData<Fields> & Files = await new Promise((resolve, reject) => {
      form.parse(req, function (err, fields, files) {
        if (err) {
          reject({ err });
        }
        resolve({ fields, files });
      });
    });

    const fields = Object.keys(data.fields).reduce((obj, key) => {
      let value = data.fields[key][0];

      if (value === 'true') {
        value = true;
      }

      if (value === 'false') {
        value = false;
      }

      if (value === 'undefined') {
        value = undefined;
      }

      if (parseInt(value, 10)) {
        value = parseInt(value, 10);
      }

      Object.assign(obj, { [key]: value || undefined });
      return obj;
    }, {}) as Fields[];

    const image = data.files.image ? data.files.image[0] : undefined;

    return { fields, files: { image } };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const formDataHeader = { 'Content-Type': 'multipart/form-data' };

export const formDataConfig = {
  api: {
    bodyParser: false,
  },
};
