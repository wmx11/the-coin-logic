import { Container, Text, Title } from '@mantine/core';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import Image from 'next/image';
import Tracking from 'public/images/tracking.svg';
import routes from 'routes';

function AddYourProject() {
  return (
    <SmallBackgroundWrapper className="py-52">
      <Container>
        <div className="flex flex-col md:flex-row-reverse items-end gap-8">
          <div>
            <Image src={Tracking} />
          </div>
          <div>
            <Title order={2} className="mb-4">
              Looking to get listed on The Coin Logic?
            </Title>
            <Text className="mb-4">
              List your project on our site to take advantage of our detailed analytics and data tracking!
            </Text>
            <Text className="mb-4">
              Don't pass up the chance to monitor detailed project statistics. We provide more information than any
              other listing platform that is currently on the market. Are you awaiting approval to be listed on
              CoinGecko or CoinMarketCap? By listing with us, you may instantly access all the data you require without
              having to wait for their listing process.
            </Text>
            <Text className="mb-4">
              Each project will be manually reviewed by us, therefore at the very least an audit is necessary. Check out
              our partners if you need further services, want to get audited or KYCd, or both!
            </Text>
            <GradientButton
              size="lg"
              component="a"
              href={routes.blogPost.replace('${slug}', 'how-to-list-a-cryptocurrency-project-on-the-coin-logic')}
              target="_blank"
            >
              Find out how
            </GradientButton>
          </div>
        </div>
      </Container>
    </SmallBackgroundWrapper>
  );
}

export default AddYourProject;
