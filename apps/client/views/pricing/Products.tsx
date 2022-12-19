import { Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { useRouter } from 'next/router';
import routes from 'routes';
import Quizzes from 'public/images/quizzes.svg';
import Announcements from 'public/images/announcements.svg';
import Events from 'public/images/events.svg';
import Image from 'next/image';

const Products = () => {
  const router = useRouter();

  return (
    <>
      <GradientTitle order={2}>Take your planning to the next level</GradientTitle>
      <Text size="sm" color="dimmed">
        Make tracking different projects easier. Our Discord integrations allow us to track project announcements and
        upcoming events. The most important project updates are here at your fingertips.
      </Text>

      <div className="flex gap-4 justify-between my-4 flex-wrap">
        <Paper className="flex-1 flex flex-col justify-between gap-2" withBorder>
          <div>
            <GradientText weight={600}>Discord Announcements Integration</GradientText>
            <Text size="xs" color="dimmed" className="whitespace-pre-wrap my-2">
              The Coin Logic keeps track of Discord Announcements for all listed projects. We monitor the servers and
              aggregate all incoming new announcements in a single place. You can filter the announcements by project,
              directly view them in their Discord server, and share them with your social groups.
            </Text>
            <Image src={Announcements} height={350} />
          </div>
          <GradientButton
            size="xs"
            onClick={() => {
              router.push(routes.announcements);
            }}
          >
            View Discord Announcements
          </GradientButton>
        </Paper>
        <Paper className="flex-1 flex flex-col justify-between gap-2" withBorder>
          <div>
            <GradientText weight={600}>Discord Events Integration</GradientText>
            <Text size="xs" color="dimmed" className="whitespace-pre-wrap my-2">
              The Coin Logic keeps track of Discord Events for all listed projects. We aggregate the data and present it
              to our viewers in a single place. You can filter the events by project, and date, easily participate, and
              share them with your social groups.
            </Text>
            <Image src={Events} height={400} />
          </div>
          <GradientButton
            size="xs"
            onClick={() => {
              router.push(routes.events);
            }}
          >
            View Discord Events
          </GradientButton>
        </Paper>
        <Paper className="flex-1 flex flex-col justify-between gap-2" withBorder>
          <div>
            <GradientText weight={600}>Quizzes</GradientText>
            <Text size="xs" color="dimmed" className="whitespace-pre-wrap my-2">
              The Coin Logic has developed a simple yet valuable resource for projects and their communities - a quiz
              system. Projects can create quizzes and distribute rewards to winners. Test your knowledge by taking TCL
              quizzes and be eligible to earn rewards!
            </Text>
            <Image src={Quizzes} height={400} />
          </div>
          <GradientButton
            size="xs"
            onClick={() => {
              router.push(routes.quizzes);
            }}
          >
            View Project Quizzes
          </GradientButton>
        </Paper>
      </div>
    </>
  );
};

export default Products;
