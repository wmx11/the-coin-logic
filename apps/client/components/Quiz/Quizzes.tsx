import React, { FC } from 'react';
import QuizCard from './QuizCard';
import { Quiz } from 'types';

type QuizzesProps = {
  data: Quiz[];
};

const Quizzes: FC<QuizzesProps> = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data &&
          data.map((quiz, index) => {
            return <QuizCard quiz={quiz} key={`quiz_${index}`} />;
          })}
      </div>
    </div>
  );
};

export default Quizzes;
