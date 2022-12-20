import { ActionIcon, Button, Checkbox, Container, NumberInput, Text, Textarea, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { CKEditor, CKEditorEventPayload } from 'ckeditor4-react';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import ImageUpload from 'components/ImageUpload';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_PROJECT_ID } from 'constants/general';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import routes from 'routes';
import { Quiz } from 'types';
import { Icons } from 'utils/icons';
import { signedRequest } from 'utils/signedRequest';
import toLocaleString from 'utils/toLocaleString';

type CreateOrUpdateQuizProps = {
  quiz?: Quiz;
  isUpdate?: boolean;
};

export type Answer = {
  answer: string;
  isCorrect?: boolean;
  selected?: boolean;
  allCorrect?: boolean;
};

export type QuizConfig = {
  question: string;
  answers: Answer[];
};

const CreateOrUpdateQuiz: FC<CreateOrUpdateQuizProps> = ({ quiz, isUpdate }) => {
  const router = useRouter();
  const { user } = useUser();
  const [editor, setEditor] = useState<CKEditorEventPayload<'instanceReady'>>();
  const [imageData, setImageData] = useState<Blob>();

  const description = (() => {
    try {
      return JSON.parse(quiz?.description);
    } catch (error) {
      return '';
    }
  })();

  const config: QuizConfig[] = (() => {
    try {
      return JSON.parse(quiz?.config);
    } catch (error) {
      return '';
    }
  })();

  const form = useForm({
    initialValues: {
      title: quiz?.title || '',
      enabled: quiz?.enabled || true,
      hasRewards: quiz?.hasRewards || false,
      rewardsAmount: quiz?.rewardsAmount || 0,
      rewardType: quiz?.rewardType || '',
      description: description || '',
      onWinDescription:
        quiz?.onWinDescription ||
        'Congratulations! You are one of the winners! To claim your reward, please open a ticket on our Discord channel and post the screenshot with your winning code.',
      onEndDescription:
        quiz?.onEndDescription ||
        'Thank you for playing! We really appreciate it! Feel free to share it with your friends! Have suggestions? Leave them on our discord channel!',
      totalWinners: quiz?.totalWinners || 0,
      timePerQuestion: quiz?.timePerQuestion || 0,
      startDate: quiz?.startDate || null,
      endDate: quiz?.endDate || null,
      config: config || [
        { question: '', answers: [{ answer: '', isCorrect: false, selected: false, allCorrect: false }] },
      ],
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const editorData = JSON.stringify(editor?.editor?.getData());
      const fd = new FormData();

      fd.append('title', values.title);
      fd.append('enabled', values.enabled.toString());
      fd.append('hasRewards', values.hasRewards.toString());
      fd.append('rewardsAmount', values.rewardsAmount.toString());
      fd.append('rewardType', values.rewardType);
      fd.append('description', editorData);
      fd.append('onWinDescription', values.onWinDescription);
      fd.append('onEndDescription', values.onEndDescription);
      fd.append('totalWinners', values?.totalWinners?.toString());
      fd.append('timePerQuestion', values?.timePerQuestion?.toString());
      fd.append('startDate', values?.startDate?.toString() || undefined);
      fd.append('endDate', values?.endDate?.toString() || undefined);
      fd.append('config', JSON.stringify(values.config));
      fd.append('projectId', router.query[QUERY_PROJECT_ID] as string);
      fd.append('quizId', quiz?.id as string);
      fd.append('userId', user?.id as string);
      fd.append('image', imageData as Blob);
      fd.append('isUpdate', isUpdate ? 'true' : 'false');

      const { data } = await signedRequest(
        {
          type: 'post',
          data: fd,
          url: routes.api.products.quiz.createUpdate,
          headers: { 'Content-Type': 'multipart/form-data' },
        },
        user?.id as string,
      );

      return router.push(`${routes.quiz.replace('${slug}', data?.data?.slug)}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="py-10">
      <GoBack />
      <div className="mb-4">
        <GradientTitle>{isUpdate ? 'Update' : 'Create a'} Quiz</GradientTitle>
        {isUpdate ? null : (
          <Text size="xs" color="dimmed">
            Create a new Quiz for the project. It's a perfect way to involve the community and share your rewards!
          </Text>
        )}
      </div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex flex-col gap-4">
          <TextInput {...form.getInputProps('title')} label="Title" placeholder="My Quiz" required withAsterisk />
          <div className="flex justify-between gap-4 flex-col md:flex-row">
            <div className="flex flex-col gap-4">
              <ImageUpload
                label="Quiz Cover Image"
                previewTetxt="Upload a quiz cover image. 800 x 450"
                accept="image/jpeg,image/png,image/jpg"
                size={{ width: 800, height: 450, maxHeigth: '', maxWidth: '' }}
                setImageBlob={(image: Blob) => setImageData(image)}
                initialImageUrl={quiz?.image?.url || ''}
              />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <Checkbox
                {...form.getInputProps('enabled', { type: 'checkbox' })}
                label="Enabled?"
                description="Is the quiz enabled and ready to be used?"
              />
              <Checkbox
                {...form.getInputProps('hasRewards', { type: 'checkbox' })}
                label="Has rewards?"
                description="Will you distributed some kind of a reward upon successful completion of the quiz?"
              />
              {form.values.hasRewards ? (
                <div className="pl-8 flex flex-col gap-4">
                  <NumberInput
                    {...form.getInputProps('totalWinners')}
                    label="Maximum amount of winners"
                    description="Specify the amount of winners that will be eligible to received the rewards."
                    min={1}
                    placeholder="5"
                    hideControls
                  />
                  <div className="flex gap-2 items-center flex-col md:flex-row">
                    <NumberInput
                      {...form.getInputProps('rewardsAmount')}
                      label="Rewards Amount"
                      description="Specify the amount of rewards you will be giving out (In total)."
                      min={1}
                      placeholder="10000"
                      hideControls
                      className="flex-1"
                    />
                    <TextInput
                      {...form.getInputProps('rewardType')}
                      description="Specify the reward type in tokens like BUSD / BNB / USDC / ETC..."
                      label="Reward type"
                      className="flex-1"
                      placeholder="Tokens / BUSD / ETC..."
                    />
                  </div>
                  <GradientText weight={600}>
                    {toLocaleString(Math.floor(form.values.rewardsAmount / form.values.totalWinners || 0))}{' '}
                    {form.values.rewardType || 'Tokens?'} Per Winner
                  </GradientText>
                  <Textarea
                    {...form.getInputProps('onWinDescription')}
                    label="On WIN Description"
                    minRows={5}
                    description="This will be displayed to players who guess everything right and are eligible to get a reward."
                  />
                </div>
              ) : null}
              <NumberInput
                {...form.getInputProps('timePerQuestion')}
                label="Time per question in seconds"
                description="Specify the amount of time in seconds required to answer each question."
                min={0}
                max={60}
                placeholder="0"
                hideControls
              />
              <div className="flex gap-2 items-center justify-between">
                <DatePicker
                  {...form.getInputProps('startDate')}
                  placeholder="Pick date"
                  description="Whem does the quiz start? Leave empty if you don't want date constraints."
                  label="Quiz Start Date"
                  className="flex-1"
                />
                <DatePicker
                  {...form.getInputProps('endDate')}
                  placeholder="Pick date"
                  description="Whem does the quiz end? Leave empty if you don't want date constraints."
                  label="Quiz End Date"
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="font-semibold mb-2 block">Quiz description</label>
            <CKEditor
              initData={
                form.values.description ||
                'What is the quiz about and how will you distribute the rewards if you have any?'
              }
              onInstanceReady={(data) => {
                setEditor(data);
              }}
            />
          </div>

          <Textarea
            {...form.getInputProps('onEndDescription')}
            label="On END Description"
            minRows={5}
            description="This will be displayed to players who have participated in the quiz and no rewards will be given out."
          />
          <div>
            <GradientTitle order={3} className="mb-4">
              Questions
            </GradientTitle>
            {form.values.config.map((item, questionIndex) => {
              return (
                <Paper className="mb-4" key={`question_${questionIndex}`}>
                  <div className="flex gap-2 items-center mb-2">
                    <TextInput
                      {...form.getInputProps(`config.${questionIndex}.question`)}
                      label={`• Question #${questionIndex + 1}`}
                      required
                      withAsterisk
                      className="flex-1"
                    />
                    <ActionIcon
                      color="red"
                      className="mt-6"
                      onClick={() => {
                        form.removeListItem(`config`, questionIndex);
                      }}
                    >
                      <Icons.Delete />
                    </ActionIcon>
                  </div>

                  {form.values.config[questionIndex].answers.map((answer, answerIndex) => {
                    return (
                      <div className="px-6 flex gap-2 items-center mb-2" key={`answer_${answerIndex}`}>
                        <div className="flex-1">
                          <TextInput
                            {...form.getInputProps(`config.${questionIndex}.answers.${answerIndex}.answer`)}
                            label={`• Answer #${answerIndex + 1}`}
                            className="mb-2"
                          />
                          <Checkbox
                            {...form.getInputProps(`config.${questionIndex}.answers.${answerIndex}.isCorrect`, {
                              type: 'checkbox',
                            })}
                            label="Correct Answer"
                          />
                          {answerIndex + 1 === form.values.config[questionIndex].answers.length ? (
                            <Checkbox
                              {...form.getInputProps(`config.${questionIndex}.answers.${answerIndex}.allCorrect`, {
                                type: 'checkbox',
                              })}
                              label="All of the above answers are correct"
                              onClick={() => {
                                form.values.config[questionIndex].answers.forEach((item, index: number) => {
                                  form.setFieldValue(
                                    `config.${questionIndex}.answers.${index}.isCorrect`,
                                    !form.values.config[questionIndex].answers[index].isCorrect,
                                  );
                                });
                              }}
                            />
                          ) : null}
                        </div>
                        <ActionIcon
                          color="red"
                          className="mb-2"
                          onClick={() => {
                            form.removeListItem(`config.${questionIndex}.answers`, answerIndex);
                          }}
                        >
                          <Icons.Delete />
                        </ActionIcon>
                      </div>
                    );
                  })}
                  <Button
                    size="xs"
                    variant="light"
                    color="violet"
                    leftIcon={<Icons.Add />}
                    className="mt-2"
                    onClick={() => {
                      form.insertListItem(`config.${questionIndex}.answers`, {
                        answer: '',
                        isCorrect: false,
                        selected: false,
                        allCorrect: false,
                      });
                    }}
                  >
                    Add Answer
                  </Button>
                </Paper>
              );
            })}
            <GradientButton
              leftIcon={<Icons.Add />}
              onClick={() => {
                form.insertListItem('config', {
                  question: '',
                  answers: [{ answer: '', isCorrect: false, selected: false, allCorrect: false }],
                });
              }}
            >
              Add Question
            </GradientButton>
          </div>
          <GradientButton type="submit">{isUpdate ? 'Update' : 'Create'}</GradientButton>
        </div>
      </form>
    </Container>
  );
};

export default CreateOrUpdateQuiz;
