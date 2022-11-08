import axios from 'axios';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ERROR_MESSAGE = 'Recaptcha has failed. Please try again later.';

const useRecaptcha = () => {
  const [isValid, setIsValid] = useState(false);
  const [ip, setIp] = useState<string>();
  const [captchaToken, setCaptchaToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const validate = async () => {
    if (!executeRecaptcha) {
      setIsValid(false);
      setErrorMessage(ERROR_MESSAGE);
      return { isValid: false, message: ERROR_MESSAGE, ip: undefined };
    }

    const token = await executeRecaptcha();

    if (!token) {
      setIsValid(false);
      setErrorMessage(ERROR_MESSAGE);
      return { isValid: false, message: ERROR_MESSAGE, ip: undefined };
    }

    setCaptchaToken(token);

    const result = await axios.post('/api/captcha/verify', { token });

    if (!result.data.success) {
      setIsValid(false);
      setErrorMessage(ERROR_MESSAGE);
      return { isValid: false, message: ERROR_MESSAGE, ip: result.data.ip };
    }

    setIsValid(true);
    setIp(result.data.ip);
    setErrorMessage('');
    return { isValid: true, message: '', ip: result.data.ip };
  };

  return { validate, executeRecaptcha, isValid, errorMessage, captchaToken, ip };
};

export default useRecaptcha;
