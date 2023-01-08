import { Container, Text, Title } from '@mantine/core';
import BackgroundWrapper from 'components/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import Image from 'next/image';
import JoinCommunity from 'public/images/join_community.svg';

function JoinOurCommunity() {
  return (
    <div className="my-52">
      <BackgroundWrapper className="py-52">
        <Container>
          <div className="flex flex-row-reverse items-end gap-8">
            <div>
              <Image src={JoinCommunity} />
            </div>
            <div>
              <Title color="white" order={2} className="mb-4">
                We're excited to invite you to join our community!
              </Title>
              <Text color="white" className="mb-4">
                By joining, you'll have the opportunity to connect with like-minded individuals and engage in meaningful
                discussions about all things cryptocurrency.
              </Text>
              <Text color="white" className="mb-4">
                So don't miss out on this opportunity to be a part of something special. Click the button below to join
                our community and start participating in the conversation. We can't wait to have you with us!
              </Text>
              <GradientButton size="lg" component="a" href="https://discord.gg/cPY7vGGKTW" target="_blank">
                Join the community
              </GradientButton>
            </div>
          </div>
        </Container>
      </BackgroundWrapper>
    </div>
  );
}

export default JoinOurCommunity;
