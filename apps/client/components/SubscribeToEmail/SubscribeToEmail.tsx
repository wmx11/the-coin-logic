import { Container, Text, TextInput, Title } from '@mantine/core';
import axios from 'axios';
import BackgroundWrapper from 'components/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import ErrorMessage from 'components/ErrorMessage';
import Image from 'next/image';
import SubscribeImage from 'public/images/subscribe_to_email.svg';
import { useState } from 'react';
import routes from 'routes';
import { handleErrorMessage } from 'utils/utils';

const SubscribeToEmail = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const handleSubscription = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      await axios.post(routes.api.user.emailSubscribe, { email });
      setIsLoading(false);
      setHasSubscribed(true);
    } catch (error) {
      handleErrorMessage(error, setErrorMessage);
      setIsLoading(false);
    }
  };

  return (
    <BackgroundWrapper className="py-52">
      <Container>
        <div className="flex flex-col md:flex-row items-end gap-8">
          <div>
            <Image src={SubscribeImage} />
          </div>
          <div>
            <Title color="white" order={2} className="mb-4">
              Join our email list!
            </Title>
            <Text color="white" className="mb-4">
              If you're not already on our email list, now is the perfect time to join. By signing up, you'll get the
              latest market analysis and investment insights delivered straight to your inbox. Our team of experts
              provides in-depth commentary and updates on new coins and trends in the industry, so you won't want to
              miss out.
            </Text>
            <Text color="white" className="mb-4">
              Don't let important updates slip through the cracks - join our email list now and start receiving our
              newsletters. Stay informed and stay ahead of the game with our valuable insights and analysis.
            </Text>

            {hasSubscribed ? (
              <Text color="white" size="xl">
                Thank you for subscribing!
              </Text>
            ) : (
              <div className="flex gap-2 items-center w-full">
                <TextInput
                  size="lg"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  className="flex-1"
                />
                <GradientButton size="lg" onClick={handleSubscription} loading={isLoading}>
                  Subscribe
                </GradientButton>
              </div>
            )}

            <ErrorMessage message={errorMessage} />
          </div>
        </div>
      </Container>
    </BackgroundWrapper>
  );
};

export default SubscribeToEmail;
