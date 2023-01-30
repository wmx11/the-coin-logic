import { Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { useRouter } from 'next/router';
import routes from 'routes';
import Quizzes from 'public/images/quizzes.svg';
import Transcribe from 'public/images/transcribe.svg';
import Announcements from 'public/images/announcements.svg';
import Events from 'public/images/events.svg';
import Image from 'next/image';
import { productsServices } from 'utils/products';
import toCurrency from 'utils/toCurrency';

const Products = () => {
  const router = useRouter();

  return (
    <>
      <div className="mb-8 text-center">
        <GradientTitle order={2} className="text-4xl pb-2">
          Take your planning to the next level
        </GradientTitle>
        <Text size="sm" color="dimmed">
          Make tracking different projects easier. Our Discord integrations allow us to track project announcements and
          upcoming events. The most important project updates are here at your fingertips.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Paper className="flex-1 flex flex-col justify-between gap-2" withBorder>
          <div>
            <GradientText weight={600} size="xl">
              Discord Announcements Aggregation
            </GradientText>
            <Text size="sm" color="dimmed" className="whitespace-pre-wrap my-2">
              The Coin Logic keeps track of Discord Announcements for all listed projects. We monitor the servers and
              aggregate all incoming new announcements in a single place. You can filter the announcements by project,
              directly view them in their Discord server, and share them with your social groups.
            </Text>
            <Image src={Announcements} height={350} />
          </div>
          <GradientButton
            size="sm"
            onClick={() => {
              router.push(routes.announcements);
            }}
          >
            View Discord Announcements
          </GradientButton>
        </Paper>
        <Paper className="flex-1 flex flex-col justify-between gap-2" withBorder>
          <div>
            <GradientText weight={600} size="xl">Discord Events Aggregation</GradientText>
            <Text size="sm" color="dimmed" className="whitespace-pre-wrap my-2">
              The Coin Logic keeps track of Discord Events for all listed projects. We aggregate the data and present it
              to our viewers in a single place. You can filter the events by project, and date, easily participate, and
              share them with your social groups.
            </Text>
            <Image src={Events} height={400} />
          </div>
          <GradientButton
            size="sm"
            onClick={() => {
              router.push(routes.events);
            }}
          >
            View Discord Events
          </GradientButton>
        </Paper>
        <Paper className="flex-1 flex flex-col justify-between gap-2" withBorder>
          <div>
            <GradientText weight={600} size="xl">Quizzes</GradientText>
            <Text size="sm" color="dimmed" className="whitespace-pre-wrap my-2">
              The Coin Logic has developed a simple yet valuable resource for projects and their communities - a quiz
              system. Projects can create quizzes and distribute rewards to winners. Test your knowledge by taking TCL
              quizzes and be eligible to earn rewards!
            </Text>
            <Image src={Quizzes} height={400} />
          </div>
          <GradientButton
            size="sm"
            onClick={() => {
              router.push(routes.quizzes);
            }}
          >
            View Project Quizzes
          </GradientButton>
        </Paper>
        <Paper className="flex-1 flex flex-col justify-between gap-2" withBorder>
          <div>
            <GradientText weight={600} size="xl">Transcriptions</GradientText>
            <Text size="sm" color="dimmed" className="whitespace-pre-wrap my-2">
              Automatically convert your project AMAs, meetings, and conferences to text using The Coin Logic AI
              solution. Summarize, and extract key points, topics, and lists. Save time and resources for your
              community.
            </Text>
            <Text size="sm" color="dimmed">
              Price per 1 second of audio: ~{toCurrency(productsServices.transcription.audioTokens)}
            </Text>
            <Text size="sm" color="dimmed">
              Price per word: ~{toCurrency(productsServices.transcription.textTokens)}
            </Text>
            <Text size="sm" color="dimmed" className="mb-2">
              Paid in cryptocurrency
            </Text>
            <Image src={Transcribe} height={350} />
          </div>
          <GradientButton
            size="sm"
            onClick={() => {
              router.push(routes.transcriptions);
            }}
          >
            View Transcription Services
          </GradientButton>
        </Paper>
      </div>
    </>
  );
};

export default Products;
