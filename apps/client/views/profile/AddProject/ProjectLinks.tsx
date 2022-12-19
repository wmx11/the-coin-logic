import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React from 'react';

const ProjectLinks = <T,>({ form }: { form: UseFormReturnType<T> }) => {
  return (
    <>
      <TextInput
        size="md"
        label="Link to KYC"
        {...form.getInputProps('kycLink')}
        placeholder="https://..."
        description="Link to your KYC provider. Leave 'N/A or TBA' if you don't have one."
      />
      <TextInput
        size="md"
        label="Link to Audit"
        {...form.getInputProps('auditLink')}
        placeholder="https://..."
        description="Link to your Audit and Audit provider. Leave 'N/A or TBA' if you don't have one."
      />
      <TextInput
        size="md"
        label="Website"
        {...form.getInputProps('website')}
        placeholder="https://..."
        required
        description="Link to your project's website"
      />
      <TextInput
        size="md"
        label="Whitepaper"
        {...form.getInputProps('whitepaper')}
        placeholder="https://..."
        required
        description="Link to your project's whitepaper"
      />
    </>
  );
};

export default ProjectLinks;
