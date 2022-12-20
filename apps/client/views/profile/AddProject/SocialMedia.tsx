import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React from 'react';

const SocialMedia = <T,>({ form }: { form: UseFormReturnType<T> }) => {
  return (
    <>
      <TextInput size="md" label="Twitter" {...form.getInputProps('twitter')} placeholder="https://..." />
      <TextInput size="md" label="Telegram" {...form.getInputProps('telegram')} placeholder="https://..." />
      <TextInput size="md" label="Discord" {...form.getInputProps('discord')} placeholder="https://..." />
      <TextInput size="md" label="Reddit" {...form.getInputProps('reddit')} placeholder="https://..." />
      <TextInput size="md" label="Youtube Channel" {...form.getInputProps('youtube')} placeholder="https://..." />
      <TextInput size="md" label="Medium" {...form.getInputProps('medium')} placeholder="https://..." />
    </>
  );
};

export default SocialMedia;
