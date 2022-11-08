import { Center, Container, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import GradientTitle from 'components/Text/GradientTitle';

function JoinOurCommunity() {
  return (
    <div className="my-52">
      <Container>
        <Center>
          <div className="text-center">
            <GradientTitle order={2} className="mb-4">
              Grow together with a global community!
            </GradientTitle>
            <Text className="mb-4">
              Our community is made up of people all over the world who are excited to monitor the health of their
              favorite projects. Learn from new and veteran cryptocurrency users, provide suggestions, and find how you
              could improve your projects or obtain more knowledge!
            </Text>
            <GradientButton size="lg" component="a" href="https://discord.gg/cPY7vGGKTW" target="_blank">
              Join our community
            </GradientButton>
          </div>
        </Center>
      </Container>
    </div>
  );
}

export default JoinOurCommunity;
