import { Center, Container, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import GradientTitle from 'components/Text/GradientTitle';
import useLoginFlowStore from 'store/useLoginFlowStore';

function TrackVitalsDisclaimer() {
  const { setRegister } = useLoginFlowStore((state) => state);

  return (
    <Container className="py-52">
      <Center>
        <div className="text-center">
          <GradientTitle order={2} className="mb-2">
            Monitor your DeFi journey today!
          </GradientTitle>
          <Text size="sm" color="dimmed" className="mb-4">
            Sign up now and we will help you set up your analytics dashboard on The Coin Logic
          </Text>
          <GradientButton
            onClick={() => {
              setRegister(true);
            }}
            size="lg"
          >
            Sign up to get started
          </GradientButton>
        </div>
      </Center>
    </Container>
  );
}

export default TrackVitalsDisclaimer;
