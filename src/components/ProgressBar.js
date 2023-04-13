/* eslint-disable no-unused-vars */
import React from 'react';
// useSelector hook is used to access the Redux store and retrieve data from it.
import { useSelector } from 'react-redux';
import './ProgressBar.css';

// functional component called ProgressBar which is exported
//  to be used in other parts of the application.
export const ProgressBar = () => {
  // useSelector hook retrieves the questions array from redux store
  // It takes a function as an argument that returns a specific piece of state from the store.
  const questions = useSelector((state) => state.quiz.questions);
  // useSelector hook retrieves the currentQuestionIndex from redux store
  const currentQuestionIndex = useSelector((state) => {
    return state.quiz.questions[state.quiz.currentQuestionIndex];
  });

  return (
    <div className="progress-element">
      <p className="progress-label">
        Question: {currentQuestionIndex.id} / {questions.length}
      </p>
      <div className="container">
        {/* <progress value="20" max="100"></progress> */}
        <h1>
          Question: {currentQuestionIndex.id} / {questions.length}
        </h1>
      </div>
    </div>
  );
};
