import { Button, FileInput, LoadingOverlay, Text } from '@mantine/core';
import useUser from 'hooks/useUser';
import { useRef, useState } from 'react';
import routes from 'routes';
import { Icons } from 'utils/icons';
import { signedRequest } from 'utils/signedRequest';

type ImageUploadProps<T> = {
  label?: string;
  placeholder?: string;
  description?: string;
  withAsterisk?: boolean;
  required?: boolean;
  accept?: string;
  previewTetxt?: string;
  setImageBlob?: (image: Blob | null) => void;
  initialImageUrl?: string;
  fit?: 'contain' | 'fill' | 'cover' | 'inside' | 'outside';
  size?: {
    width: number;
    height: number;
    maxHeigth?: string;
    maxWidth?: string;
  };
};

const ImageUpload = <T,>({
  label,
  placeholder,
  description,
  withAsterisk,
  required,
  accept,
  previewTetxt,
  size,
  setImageBlob,
  initialImageUrl,
  fit,
}: ImageUploadProps<T>) => {
  const { user } = useUser();
  const [loading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [errorMessage, setErrorMessage] = useState('');

  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    ref.current?.click();
  };

  const handleDelete = () => {
    setImageUrl('');
    setImageBlob && setImageBlob(null);
  };

  const handleSubmit = async (image: File) => {
    if (!image?.type) {
      return;
    }

    if (!accept?.includes(image?.type)) {
      setErrorMessage(`Unsupported file format ${image.type}`);
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(image);
      reader.addEventListener('load', async () => {
        const result = reader.result;
        const fd = new FormData();
        fd.append('imageData', new Blob([result as ArrayBuffer]));
        fd.append('height', size?.height?.toString() as string);
        fd.append('width', size?.width?.toString() as string);

        if (fit) {
          fd.append('fit', (fit as string) || '');
        }

        const { data } = await signedRequest(
          {
            url: routes.api.image.resize,
            type: 'post',
            data: fd,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
          user?.id as string,
        );

        const imageData = `data:image/png;base64,${data.data.data}`;

        const image = await fetch(imageData);
        const imageBlob = await image.blob();

        setImageBlob && setImageBlob(imageBlob);
        setImageUrl(imageData);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <FileInput
        label={label}
        placeholder={placeholder}
        description={description}
        withAsterisk={withAsterisk}
        required={required}
        onChange={handleSubmit}
        ref={ref}
        accept={accept || 'image/jpeg'}
        variant="unstyled"
        styles={{ input: { display: 'none' } }}
      />

      <div
        className="w-full h-full rounded-md relative flex p-2 items-center justify-center border-dashed border-violet border cursor-pointer mb-2"
        style={{
          ...size,
          width: (size?.width as number) / 2,
          height: (size?.height as number) / 2,
        }}
        onClick={handleClick}
      >
        <LoadingOverlay visible={loading} overlayBlur={2} color="violet" />
        {imageUrl ? (
          <>
            <img src={imageUrl} className="w-full" />
          </>
        ) : (
          <Text size="xs" color="dimmed">
            {previewTetxt || 'Your Image Preview'}
          </Text>
        )}
      </div>

      {imageUrl ? (
        <div>
          <Button size="xs" leftIcon={<Icons.Delete />} color="red" onClick={handleDelete}>
            Remove
          </Button>
        </div>
      ) : null}

      {errorMessage ? (
        <Text color="red" size="sm">
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

export default ImageUpload;
