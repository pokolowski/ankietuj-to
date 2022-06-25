import React from 'react';
import styled from 'styled-components';
import Textarea from '../SurveyTextarea/textarea';

const Wrapper = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: white;
  //   border: 1px solid red;
  border-bottom: 1px solid darkgrey;
`;
const QuestionContainer = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Q = styled.h3`
  //   border-bottom: 2px solid #067eed;
`;
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

const SurveyQuestion = ({ question, type, answers, questionIndex }) => {
  return (
    <Wrapper>
      <QuestionContainer>
        <Q>{question}?</Q>
      </QuestionContainer>
      <AnswersContainer>
        {type === '1' ? (
          answers.map((answer, index) => (
            <AnswerContainer>
              <Radio
                type="radio"
                name={`question${questionIndex}`}
                id={`answer${questionIndex}.${index}`}
                value={answer.option}
              />
              <label for={`answer${questionIndex}.${index}`}>
                {answer.option}
              </label>
              <br />
            </AnswerContainer>
          ))
        ) : type === '2' ? (
          answers.map((answer, index) => (
            <AnswerContainer>
              <Radio
                type="checkbox"
                name={`question${questionIndex}`}
                id={`answer${questionIndex}.${index}`}
                value={answer.option}
              />
              <label for={`answer${questionIndex}.${index}`}>
                {answer.option}
              </label>
              <br />
            </AnswerContainer>
          ))
        ) : type === '3' ? (
          <AnswerContainer>
            <Textarea
              width="80%"
              height="40px"
              placeholder="Tutaj wpisz swoją odpowiedź"
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
