import axios from 'axios';
import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ERROR_MESSAGE = 'Recaptcha has failed. Please try again later.';

const useRecaptcha = () => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const validate = async () => {
    if (!executeRecaptcha) {
      setIsValid(false);
      setErrorMessage(ERROR_MESSAGE);
      return false;
    }

    const token = await executeRecaptcha();

    if (!token) {
      setIsValid(false);
      setErrorMessage(ERROR_MESSAGE);
      return false;
    }

    const result = await axios.post('/api/captcha/verify', { token });

    if (!result.data.success) {
      setIsValid(false);
      setErrorMessage(ERROR_MESSAGE);
      return false;
    }

    setIsValid(true);
    setErrorMessage('');
    return true;
  };

  return { validate, executeRecaptcha, isValid, errorMessage };
};

export default useRecaptcha;
