import { Text } from '@mantine/core';
import React from 'react';

const RecaptchaDisclaimer = () => {
  return (
    <Text className="my-2" size="xs" color="dimmed" align="center">
      This site is protected by reCAPTCHA and the Google{' '}
      <Text size="xs" variant="link" component="a" href="https://policies.google.com/privacy">
        Privacy Policy
      </Text>{' '}
      and{' '}
      <Text size="xs" variant="link" component="a" href="https://policies.google.com/terms">
        Terms
      </Text>{' '}
      apply.
    </Text>
  );
};

export default RecaptchaDisclaimer;
