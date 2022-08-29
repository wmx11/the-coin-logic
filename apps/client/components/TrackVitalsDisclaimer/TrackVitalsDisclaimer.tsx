import { Button, Center, Container, Text, Title } from '@mantine/core';
import useLoginFlowStore from 'store/useLoginFlowStore';

function TrackVitalsDisclaimer() {
  const { setRegister } = useLoginFlowStore((state) => state);

  return (
    <div className="my-52">
      <Container>
        <Center>
          <div className="text-center">
            <Title order={2} className="mb-4">
              Track your project vitals today
            </Title>
            <Text className="mb-4">
              Sign up now and we will help you set up your analytics dashboard on The Coin Logic
            </Text>
            <Button
              onClick={() => {
                setRegister(true);
              }}
              color="violet"
              size="lg"
            >
              Sign up to get started
            </Button>
          </div>
        </Center>
      </Container>
    </div>
  );
}

export default TrackVitalsDisclaimer;
