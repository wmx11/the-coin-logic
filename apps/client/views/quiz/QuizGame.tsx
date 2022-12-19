import { Checkbox, RingProgress } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { FC, useEffect, useState } from 'react';
import { Quiz } from 'types';
import { Answer, QuizConfig } from './CreateOrUpdateQuiz';
import QuizResults from './QuizResults';

type QuizGameProps = {
  quiz: Quiz;
};

const QuizGame: FC<QuizGameProps> = ({ quiz }) => {
  const [results, setResults] = useState<QuizConfig[]>([]);
  const [hasEnded, setHasEnded] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState<string>();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timer, setTimer] = useState<number>(quiz.timePerQuestion || 0);

  let interval: NodeJS.Timer | null = null;

  const {
    title,
    timePerQuestion,
    config,
  } = quiz;

  const quizConfig: QuizConfig[] = (() => {
    try {
      const data = JSON.parse(config);
      return data;
    } catch (error) {
      return [];
    }
  })();

  const handleQuestionChange = () =>
    setQuestionNumber((n) => {
      if (!hasEnded) {
        setResults((prev) => {
          const newResults = [...prev, { question: question as string, answers }];
          return newResults;
        });
      }

      if (n >= quizConfig.length) {
        setHasEnded(true);
        return n;
      }

      return n + 1;
    });

  const handleTimerChange = () =>
    setTimer((n) => {
      if (n <= 0) {
        handleQuestionChange();
        return n;
      }
      return n - 1;
    });

  useEffect(() => {
    setTotalQuestions(quizConfig.length);
    setQuestion(quizConfig[questionNumber - 1].question);
    setAnswers(quizConfig[questionNumber - 1].answers);

    if (questionNumber && quiz?.timePerQuestion && quiz?.timePerQuestion > 0 && !hasEnded) {
      setTimer(quiz.timePerQuestion || 0);
      interval = setInterval(() => handleTimerChange(), 1000);
    }

    if (interval) {
      return () => clearInterval(interval as unknown as string);
    }
  }, [questionNumber, hasEnded]);

  if (hasEnded) {
    return <QuizResults quiz={quiz} results={results} />;
  }

  return (
    <div>
      <GradientTitle className="mb-4">{title}</GradientTitle>
      <Paper withBorder className="relative flex justify-center flex-col items-center mb-4">
        {timePerQuestion ? (
          <div className="">
            <RingProgress
              size={100}
              thickness={8}
              roundCaps
              sections={[{ value: ((timer * 100) as number) / timePerQuestion, color: 'violet' }]}
              label={
                <div className="flex items-center justify-center">
                  <GradientText weight={700}>{timer}</GradientText>
                </div>
              }
            />
          </div>
        ) : null}

        <div className="mb-4">
          <GradientText weight={600}>
            Question {questionNumber} / {totalQuestions}
          </GradientText>
        </div>
        <GradientTitle order={2}>{question}</GradientTitle>
      </Paper>

      <div>
        {answers
          ? answers.map((answer, answerIndex) => {
              return (
                <Paper
                  className="flex gap-2 items-center mb-4 cursor-pointer"
                  withBorder
                  key={`answer_${answerIndex}`}
                  onClick={() => {
                    setAnswers((prev) => {
                      const newAnswers = [...prev];
                      newAnswers[answerIndex].selected = !newAnswers[answerIndex].selected;
                      return newAnswers;
                    });
                  }}
                >
                  <Checkbox checked={answer.selected} className="mt-2" color="violet"/>
                  {answer.answer}
                </Paper>
              );
            })
          : null}
      </div>

      <div className="flex justify-end">
        {hasEnded ? null : (
          <GradientButton size="lg" onClick={handleQuestionChange}>
            Next
          </GradientButton>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
