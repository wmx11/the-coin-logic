import { NumberInput, Select, Text, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import ImageUpload from 'components/ImageUpload';
import TagSelect from 'components/TagSelect';
import { ProjectSchema } from 'schemas/project';
import { Network } from 'types';

const PrimaryInformation = <T extends ProjectSchema>({
  form,
  networks,
  setImageBlob,
  setBackgroundImageBlob,
  isUpdate = false,
  logoUrl,
  backgroundUrl,
  isNft,
}: {
  form: UseFormReturnType<T>;
  networks: Network[];
  setImageBlob?: (image: Blob | null) => void;
  setBackgroundImageBlob?: (image: Blob | null) => void;
  isUpdate?: boolean;
  logoUrl?: string;
  backgroundUrl?: string;
  isNft?: boolean;
}) => {
  return (
    <>
      {isUpdate ? (
        <div>
          <Text>Project Name:</Text>
          <Text size="xs">{form?.values?.name}</Text>
        </div>
      ) : (
        <TextInput
          size="md"
          label="Project Name"
          {...form.getInputProps('name')}
          required
          description="Name of your project."
        />
      )}

      {isUpdate ? (
        <div>
          <ImageUpload
            fit="cover"
            size={{ width: 928, height: 250, maxWidth: '100%', maxHeigth: '150px' }}
            label="Background image"
            description="Background image will be visible as the cover image on your project page"
            previewTetxt="Your project cover image. 928 x 250"
            accept="image/jpg,image/jpeg,image/png,image/svg"
            initialImageUrl={backgroundUrl || ''}
            setImageBlob={setBackgroundImageBlob}
          />
        </div>
      ) : null}

      <ImageUpload
        fit="cover"
        label="Project Logo"
        accept="image/jpg,image/png,image/svg"
        previewTetxt="Upload your image. 400 x 400"
        setImageBlob={setImageBlob}
        initialImageUrl={logoUrl || ''}
        size={{
          height: 400,
          width: 400,
          maxHeigth: '100px',
          maxWidth: '100%',
        }}
      />

      {isUpdate ? (
        <div>
          <Text>Contract Address:</Text>
          <Text size="xs">{form?.values?.contractAddress}</Text>
        </div>
      ) : (
        <>
          <TextInput
            size="md"
            label="Contract Address"
            {...form.getInputProps('contractAddress')}
            placeholder="0x..."
            description="Contract address of your project. Leave 'TBA' if not available yet."
          />
        </>
      )}

      {isNft ? (
        isUpdate ? (
          <div>
            <Text>Max Supply:</Text>
            <Text size="xs">{form?.values?.maxSupply}</Text>
          </div>
        ) : (
          <NumberInput
            size="md"
            label="Max Supply"
            {...form.getInputProps('maxSupply')}
            placeholder="3,333"
            description="Maximum supply of NFTs"
          />
        )
      ) : null}

      {!isNft ? (
        isUpdate ? (
          <div>
            <Text>Pair Address:</Text>
            <Text size="xs">{form?.values?.pairAddress}</Text>
          </div>
        ) : (
          <>
            <TextInput
              size="md"
              label="Primary Pair Address"
              {...form.getInputProps('pairAddress')}
              placeholder="0x..."
              description="Primary (the main) trading pair address of your project. Leave 'TBA' if not available yet."
            />
          </>
        )
      ) : null}

      {networks ? (
        <Select
          {...form.getInputProps('networkId')}
          size="md"
          label="Blockchain Network"
          data={networks.map((item) => {
            return { label: item.name as string, value: item.id };
          })}
          placeholder="Binance Smart Chain / Polygon / Avalanche / Fantom"
          description="The network/chain your project is operating on. If you can't find your blockchain, select any and leave the information in the description box."
          clearable
        />
      ) : null}

      {!isUpdate ? (
        <TagSelect form={form} isProject={true} description="Choose tags that best describe your project" />
      ) : null}
    </>
  );
};

export default PrimaryInformation;
