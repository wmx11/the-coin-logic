import { ActionIcon, Button, Checkbox, NumberInput, RingProgress, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import SocialShare from 'components/SocialShare';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import VotesProgressBar from 'components/Votes/VotesProgressBar';
import useUser from 'hooks/useUser';
import useVotes, { VoteReturnType } from 'hooks/useVotes';
import { FC, useEffect, useState } from 'react';
import routes from 'routes';
import { Project } from 'types';
import { Icons } from 'utils/icons';
import { calculateTransparencyScore } from 'utils/transparencyScore';

type TransparencyScoreProps = {
  data: Project;
};

const TransparencyScore: FC<TransparencyScoreProps> = ({ data }) => {
  const { auditByCount, kycByCount, customVetting, id, tclRating, transparencyScore } = data;
  const [tclScore, setTclScore] = useState<number>((tclRating as number) || 0);

  const transparencyHighlights = (() => {
    try {
      return data.transparencyHighlights ? JSON.parse(data.transparencyHighlights) : [];
    } catch (error) {}
  })();

  const form = useForm({
    initialValues: {
      transparencyHighlights: transparencyHighlights || [{ content: '', isPositive: false }],
    },
  });

  const { votes, canVote, hasVoted, fetchVotes, canUserVoteToday, vote, recalculateTransparency, rateProjectAsTcl } =
    useVotes();

  const { user } = useUser();

  useEffect(() => {
    fetchVotes({ type: 'transparency', projectId: id, isStartOfDay: true });
    canUserVoteToday({ projectId: id, type: 'transparency' });
  }, [hasVoted]);

  const { score, textScore } = calculateTransparencyScore({
    hasAudit: !!auditByCount,
    hasKyc: !!kycByCount,
    hasVetting: !!customVetting,
    totalScore: transparencyScore as number,
    tclRating: tclRating as number,
    votes: {
      ...(votes as VoteReturnType),
    },
  });

  return (
    <Paper>
      <GradientTitle order={3} className="mb-4">
        Transparency Score
      </GradientTitle>
      <div className="flex gap-4 items-center mb-4">
        <div className="flex-1 flex gap-2 items-center ">
          <RingProgress
            sections={[{ value: score, color: 'violet' }]}
            roundCaps
            size={100}
            label={
              <GradientText align="center" weight={700}>
                {score}%
              </GradientText>
            }
          />
          <div>
            <GradientTitle order={2}>{textScore}</GradientTitle>
          </div>
        </div>
        <div className="flex-1 mb-4">
          <GradientText className="mb-4" weight={700}>
            Highlights and Concerns
          </GradientText>
          {transparencyHighlights && transparencyHighlights.length && transparencyHighlights[0].content !== '' ? (
            <div className="flex flex-col gap-2">
              {transparencyHighlights.map((data: typeof form.values.transparencyHighlights, index: number) => {
                return (
                  <Text size="xs" color="dimmed" className="flex gap-2 items-center" key={`highlight_${index}`}>
                    <div
                      className={`${
                        data.isPositive ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'
                      } rounded p-1`}
                    >
                      {data.isPositive ? <Icons.ThumbsUp /> : <Icons.ThumbsDown />}
                    </div>
                    <div>{data.content}</div>
                  </Text>
                );
              })}
            </div>
          ) : (
            <Text size="xs" color="dimmed">
              The project currently has no highlights or concerns registered
            </Text>
          )}
        </div>
      </div>

      <div className="justify-between gap-4 items-center flex-col md:flex-row">
        <div>
          <GradientText weight={700}>
            {hasVoted || !canVote
              ? 'Thank you for voting! You can vote again in 24 hours.'
              : `How would you rate ${data.name} transparency today?`}
          </GradientText>
          {canVote ? (
            <>
              <div className="flex items-center gap-2 pt-4">
                <Button
                  size="sm"
                  leftIcon={<Icons.Eye />}
                  color="teal"
                  onClick={() => vote({ type: 'transparency', projectId: id, value: 1 })}
                >
                  Transparent
                </Button>
                <Button
                  size="sm"
                  leftIcon={<Icons.EyeSlashed />}
                  color="dark"
                  onClick={() => vote({ type: 'transparency', projectId: id, value: 0 })}
                >
                  Obscure
                </Button>
              </div>
            </>
          ) : (
            <div className="mt-4">
              {votes ? (
                <VotesProgressBar
                  votes={votes}
                  positiveText="Transparent"
                  negativeText="Obscure"
                  positiveIcon={<Icons.Eye />}
                  negativeIcon={<Icons.EyeSlashed />}
                />
              ) : null}
            </div>
          )}

          <div className="my-4">
            <GradientText size="xs">Share with your friends</GradientText>
            <SocialShare
              title={`${data.name} Transparency score is rated at ${score}/100 (${textScore}) with ${
                votes?.positivePercentage || 0
              }% positive community votes today! Leave your vote here:`}
              url={`${routes.base}${routes.project}/${data.slug}`}
              hashtag={data.slug as string}
            />
          </div>

          {user?.isAdmin ? (
            <div>
              <Text size="xs" color="red" className="my-2">
                Admin Controls
              </Text>
              <div className="flex items-center gap-2 flex-wrap mb-4">
                <div className="flex items-center gap-2">
                  <NumberInput
                    size="xs"
                    hideControls
                    max={100}
                    min={0}
                    value={tclScore}
                    onChange={(val) => setTclScore(val as number)}
                  />
                  <GradientButton
                    size="xs"
                    onClick={() =>
                      rateProjectAsTcl({
                        rating: tclScore,
                        id,
                        transparencyHighlights: JSON.stringify(form.values.transparencyHighlights),
                      })
                    }
                  >
                    Give TCL Rating
                  </GradientButton>
                </div>
                <GradientButton
                  size="xs"
                  onClick={() =>
                    recalculateTransparency({
                      rating: calculateTransparencyScore({
                        hasAudit: !!auditByCount,
                        hasKyc: !!kycByCount,
                        hasVetting: !!customVetting,
                        tclRating: tclRating as number,
                      }).score,
                      id,
                    })
                  }
                >
                  Recalculate
                </GradientButton>
              </div>
              <div>
                {form.values.transparencyHighlights.map(
                  (item: typeof form.values.transparencyHighlights, index: number) => {
                    return (
                      <div className="flex gap-2 items-end mb-2">
                        <ActionIcon
                          color="red"
                          className="mb-2"
                          onClick={() => {
                            form.removeListItem('transparencyHighlights', index);
                          }}
                        >
                          <Icons.Delete />
                        </ActionIcon>
                        <TextInput
                          {...form.getInputProps(`transparencyHighlights.${index}.content`)}
                          label={`Highlight #${index + 1}`}
                          className="flex-1"
                        />
                        <Checkbox
                          {...form.getInputProps(`transparencyHighlights.${index}.isPositive`, { type: 'checkbox' })}
                          label="Positive"
                        />
                      </div>
                    );
                  },
                )}
                <Button
                  size="xs"
                  variant="light"
                  color="violet"
                  leftIcon={<Icons.Add />}
                  onClick={() => {
                    form.insertListItem('transparencyHighlights', {
                      content: '',
                      isPositive: false,
                    });
                  }}
                >
                  Add Highlight
                </Button>
              </div>
            </div>
          ) : null}
        </div>
        <Text size="xs" color="dimmed" className="mt-2">
          Transparency score is not an endorsement. Transparency score is an evaluation of project's audit, kyc/kyb,
          custom vetting disclaimer, internal TCL rating, and community sentiment. Do conduct your own due diligence and
          consult your financial advisor before making any investment decisions.
        </Text>
      </div>
    </Paper>
  );
};

export default TransparencyScore;
