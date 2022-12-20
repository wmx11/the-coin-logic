import { Select, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import ImageUpload from 'components/ImageUpload';
import { Network } from 'types';

const PrimaryInformation = <T,>({
  form,
  networks,
  setImageBlob,
}: {
  form: UseFormReturnType<T>;
  networks: Network[];
  setImageBlob?: (image: Blob) => void;
}) => {
  return (
    <>
      <TextInput
        size="md"
        label="Project Name"
        {...form.getInputProps('name')}
        required
        description="Name of your project."
      />
      <ImageUpload
        label="Project Logo"
        accept="image/jpg,image/png,image/svg"
        previewTetxt="Upload your image. 400 x 400"
        setImageBlob={setImageBlob}
        size={{
          height: 400,
          width: 400,
          maxHeigth: '100px',
          maxWidth: '100%',
        }}
      />
      <TextInput
        size="md"
        label="Contract Address"
        {...form.getInputProps('contractAddress')}
        placeholder="0x..."
        description="Contract address of your project. Leave 'TBA' if not available yet."
      />
      <TextInput
        size="md"
        label="Primary Pair Address"
        {...form.getInputProps('pairAddress')}
        placeholder="0x..."
        description="Primary (the main) trading pair address of your project. Leave 'TBA' if not available yet."
      />
      {networks ? (
        <Select
          size="md"
          label="Blockchain Network"
          {...form.getInputProps('networkId')}
          data={networks.map((item) => {
            return { label: item.name as string, value: item.id };
          })}
          placeholder="Binance Smart Chain / Polygon / Avalanche / Fantom"
          description="The network/chain your project is operating on. If you can't find your blockchain, select any and leave the information in the description box."
        />
      ) : null}
    </>
  );
};

export default PrimaryInformation;
