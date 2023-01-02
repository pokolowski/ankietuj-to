import React, { useState } from 'react';
import styled from 'styled-components';
import Textarea from '../SurveyTextarea/textarea';

const Wrapper = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: white;
  border-bottom: 1px solid darkgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const QuestionContainer = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Q = styled.h3``;
const AnswersContainer = styled.div`
  margin-left: 30px;
  margin-bottom: 25px;
`;
const Radio = styled.input`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  color: red;
  &:checked + label {
    color: #067eed;
  }
`;
const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: 'Alata';
`;

const SurveyQuestion = ({
  question,
  questionID,
  type,
  answers,
  questionIndex,
  getAnswers,
  setGetAnswers,
}) => {
  const [openAnswer, setOpenAnswer] = useState('');

  const handleChangeRadio = (ans) => {
    const tempArr = [...getAnswers];
    tempArr[questionIndex] = { question, questionID, answers: [ans] };
    setGetAnswers(tempArr);
  };
  const deleteAnswer = (index) => {
    const tempArr = [...getAnswers];
    tempArr[questionIndex].answers.splice(index, 1);
    setGetAnswers(tempArr);
  };
  const handleChangeCheckbox = (ans) => {
    const tempArr = [...getAnswers];
    let noQuestion = true,
      addAns = true;
    tempArr.map((temp, index) => {
      if (temp.question === question) noQuestion = false;
    });
    if (noQuestion) {
      tempArr[questionIndex] = { question, questionID, answers: [ans] };
    } else {
      tempArr[questionIndex].answers.map((answer, index) => {
        if (answer === ans) {
          deleteAnswer(index);
          addAns = false;
        }
      });
      if (addAns)
        tempArr[questionIndex].answers = [
          ...tempArr[questionIndex].answers,
          ans,
        ];
    }
    setGetAnswers(tempArr);
  };
  const handleOpenQuestion = (e) => {};
  const handleChangeTextarea = (e) => {
    setOpenAnswer(e.target.value);
    const tempArr = [...getAnswers];
    tempArr[questionIndex] = {
      question,
      questionID,
      answers: [e.target.value],
    };
    setGetAnswers(tempArr);
  };

  return (
    <Wrapper>
      <QuestionContainer>
        <Q>{question}</Q>
      </QuestionContainer>
      <AnswersContainer>
        {type === 1 ? (
          answers.map((answer, index) => (
            <AnswerContainer key={index}>
              <Radio
                type="radio"
                name={`question${questionIndex}`}
                id={`answer${questionIndex}.${index}`}
                value={answer.value}
                onChange={() => handleChangeRadio(answer.value)}
              />
              <label for={`answer${questionIndex}.${index}`}>
                {answer.value}
              </label>
              <br />
            </AnswerContainer>
          ))
        ) : type === 2 ? (
          answers.map((answer, index) => (
            <AnswerContainer key={index}>
              <Radio
                type="checkbox"
                name={`question${questionIndex}`}
                id={`answer${questionIndex}.${index}`}
                value={answer.value}
                onChange={() => handleChangeCheckbox(answer.value)}
              />
              <label for={`answer${questionIndex}.${index}`}>
                {answer.value}
              </label>
              <br />
            </AnswerContainer>
          ))
        ) : type === 3 ? (
          <AnswerContainer>
            <Textarea
              width="80%"
              height="40px"
              placeholder="Tutaj wpisz swoją odpowiedź"
              value={openAnswer}
              onChange={handleChangeTextarea}
            />
          </AnswerContainer>
        ) : (
          ''
        )}
      </AnswersContainer>
    </Wrapper>
  );
};

export default SurveyQuestion;
