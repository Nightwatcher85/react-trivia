import React, { useState } from 'react';
import * as Questions from './Questions';

function App() {
  // Sets all the variables
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const questionData = Questions.questionData(index);
  var correctAnswer = questionData[1];
  var answered = questionData[2];
  const [score, setScore] = useState(0);
  const question = questionData[0];
  const [answerVisible, setAnswerVisible] = useState(false);
  const [prevVisible, setPrevVisible] = useState(false);
  const [nextVisible, setNextVisible] = useState(true);
  const [submitVisible, setSubmitVisible] = useState(false);
  const [trueVisible, setTrueVisible] = useState(true);
  const [falseVisible, setFalseVisible] = useState(true);
  const [scoreVisible, setScoreVisible] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  //Created a function to update the answer and see visibilities of the buttons
  function updateAnswer() {
    if (submitClicked == false) {
      Questions.updateAnswer(index, answer);
      setPrevVisible(true);
      setNextVisible(true);
      setSubmitVisible(false);
    }
    else {
      setPrevVisible(true);
      setNextVisible(true);
      setTrueVisible(false);
      setFalseVisible(false);
    }
  }

  //Decreases the index to the questions
  const handlePrevClick = () => {
    updateAnswer();
    if (index == 1) {
      setPrevVisible(false);
      setNextVisible(true);
      setSubmitVisible(false);
    }
    setIndex(index - 1);
  };

  //Increases the index to the questions
  const handleNextClick = () => {
    updateAnswer();
    if (index == 23) {
      setPrevVisible(true);
      setNextVisible(false);
      if (submitClicked == false) {
        setSubmitVisible(true);
      }
    }
    setIndex(index + 1);
  };


  //Hnadles the submit button.
  const handleSubmitClick = () => {
    updateAnswer();
    //Sets the variable and loops through the questions and answers to count the correct responses.
    let newScore = 0;
    for (let i = 0; i < 25; i++) {
      const qData = Questions.questionData(i);
      if (qData[1] === qData[2]) {
        newScore += 1;
      }
    }

    //Resets the index to the first question.
    setIndex(0);
    setScore(newScore);
    //Shows the values that need to be shown.
    setSubmitClicked(true);
    setPrevVisible(true);
    setNextVisible(true);
    setTrueVisible(false);
    setFalseVisible(false);
    setAnswerVisible(true);
    setScoreVisible(true);
  };

  //Sets answer to t or f bepending upon which button is clicked.
  const handleTrueClick = () => {
    setAnswer('t');
  };

  const handleFalseClick = () => {
    setAnswer('f');
  };

  //DIsplays the buttons accordingly.
  return (
    <div>
      <p>Question {index + 1}</p>
      <p>{question}</p>
      <div>
        {scoreVisible && <p>Score: {score}</p>}
        {answerVisible && <p>Answer: {correctAnswer}</p>}
        {answerVisible && <p>Your Answer: {answered}</p>}
      </div>
      <div>
        {trueVisible && <button onClick={handleTrueClick}>True</button>}
        {falseVisible && <button onClick={handleFalseClick}>False</button>}
      </div>
      <div>
        {!prevVisible && <button>** **</button>}
        {prevVisible && <button onClick={handlePrevClick}>Prev</button>}
        {nextVisible && <button onClick={handleNextClick}>Next</button>}
        {submitVisible && <button onClick={handleSubmitClick}>Submit</button>}
      </div>
    </div>
  );
}

export default App;