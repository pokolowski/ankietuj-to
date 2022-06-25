import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './createSurvey.module.css';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import FormField from 'components/atoms/FormField/FormField';
import { useForm } from 'react-hook-form';
import Textarea from 'components/atoms/SurveyTextarea/textarea';
import PlusIcon from 'assets/icons/plus.svg';
import Question from 'components/molecules/Question/question';
import HowMuchAns from 'components/molecules/HowMuchAns/howMuchAns';
import ErrorContainer from 'components/atoms/CreateSurveyError/errorContainer';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: auto;
  background-color: #dae5f4;
  position: relative;
  overflow: hidden;
`;
const FlexContainer = styled.div`
  //   width: 50%;
  width: 800px;
  min-height: 150px;
  height: auto;
  //   height: 80%;
  position: relative;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #dae5f4;
  margin-bottom: 40px;
  // background-color: red;
`;
const TitleContainer = styled.div`
  width: 100%;
  min-height: 250px;
  height: auto;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  //   padding: 10px;
  //   font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const Options = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: ${(props) => (props.questions.length > 0 ? '160px' : '20px')};
  right: 0;
  transform: translateX(110%);
  background-color: white;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //   padding: 5px;
  align-items: center;
  transition: 0.2 s;
`;
const IMG = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 10px;
  border: 1px solid grey;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 1px solid #0085ff;
  }
`;
const SaveBtn = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-color: #067eed;
  color: white;
  font-family: 'Alata';
  display: flex;
  font-size: 25px;
  letter-spacing: 3px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset;
  // rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

const CreateSurvey = ({ addSurvey }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [answers, addAnswer] = useState([]);
  const [surveyData, setSurveyData] = useState({
    title: '',
    desc: '',
    countAnswers: 100,
  });
  const [titleHeight, setTitleHeight] = useState(50);
  const handleAddQuestion = () => {
    // console.log('test');
    setQuestions([
      ...questions,
      { question: '', questionType: '1', answers: [] },
    ]);
    // console.log(questions);
  };
  const handleDeleteQuestion = (index) => {
    const tempArr = [...questions];
    tempArr.splice(index, 1);
    setQuestions(tempArr);
  };
  const handleChangeQuestion = (e, index) => {
    const tempArr = [...questions];
    tempArr[index].question = e.target.value;
    setQuestions(tempArr);
  };
  const handleChangeType = (type, index) => {
    const tempArr = [...questions];
    tempArr[index].questionType = type;
    setQuestions(tempArr);
  };
  const handleChangeAnswers = (answers, index) => {
    // console.log(answers);
    const tempArr = [...questions];
    tempArr[index].answers = answers;
    setQuestions(tempArr);
  };
  const handleChangeData = (e) => {
    setSurveyData({ ...surveyData, [e.target.name]: e.target.value });
    setTitleHeight(50 + 50 * Math.floor(surveyData.title.length / 44));
    // console.log(surveyData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (surveyData.title == '') {
      setError('Nazwa ankiety nie może być pusta!');
    } else if (
      surveyData.countAnswers == '' ||
      surveyData.countAnswers == 0 ||
      surveyData.countAnswers > 200
    ) {
      setError('Ilość odpowiedzi została źle podana!');
    } else {
      addSurvey(surveyData.title, surveyData.desc, questions);
    }
  };
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        {error != '' ? <ErrorContainer err={error} deleteErr={setError} /> : ''}
        <FlexContainer as="form" onSubmit={handleSubmit}>
          <TitleContainer>
            <Textarea
              placeholder="Nazwa ankiety"
              name="title"
              width="90%"
              height={`${titleHeight}px`}
              fontSize="32px"
              value={surveyData.title}
              onChange={handleChangeData}
            />
            <Textarea
              width="90%"
              name="desc"
              height="50px"
              fontSize="14px"
              borderColor="grey"
              placeholder="Opis"
              value={surveyData.desc}
              onChange={handleChangeData}
            />
          </TitleContainer>
          <Options questions={questions}>
            <IMG src={PlusIcon} onClick={handleAddQuestion} />
          </Options>
          {questions.map((question, index) => {
            // console.log(index);
            return (
              <Question
                questions={questions}
                changeType={handleChangeType}
                changeQuestion={handleChangeQuestion}
                deleteQuestion={handleDeleteQuestion}
                changeAnswers={handleChangeAnswers}
                idx={index}
              />
            );
          })}
          {questions.length > 0 ? (
            <>
              <HowMuchAns
                name="countAnswers"
                value={surveyData.countAnswers}
                onChange={handleChangeData}
              />
              <SaveBtn as="button" type="submit">
                Zapisz
              </SaveBtn>
            </>
          ) : (
            ''
          )}
        </FlexContainer>
      </Wrapper>
    </>
  );
};

export default CreateSurvey;
