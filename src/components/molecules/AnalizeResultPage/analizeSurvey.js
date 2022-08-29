import React from 'react';
import styled from 'styled-components';
import AnalizeHeader from 'components/atoms/AnalizeHeader/analizeHeader';
import AnalizeQuestion from 'components/atoms/AnalizeQuestion/analizeQuestion';
import Surveys from 'components/organisms/AuthorizedView/Surveys/surveys';

const ChoosenTitle = styled.span`
  position: absolute;
  top: 20px;
  left: 50px;
  font-size: 18px;
  color: white;
  font-family: 'Alata';
`;
const AnswersContainer = styled.div`
  width: 1000px;
  min-height: 150px;
  height: auto;
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  // border: 1px solid black;
  margin-bottom: 100px;
`;

const AnalizeSurvey = (survey, analizedId) => {
  const surv = survey.survey;
  //   {
  //     "id": 7,
  //     "title": "Druga ankieta patryka",
  //     "description": "opis ",
  //     "createdAt": "2022-08-24T20:59:49",
  //     "editedAt": null,
  //     "isActive": 0,
  //     "answersGoal": 100,
  //     "userId": 4,
  //     "user": null,
  //     "categories": [],
  //     "tags": [],
  //     "completedSurveys": null,
  //     "questions": [
  //         {
  //             "id": 9,
  //             "value": "pytanko mam",
  //             "questionTypeId": 1,
  //             "surveyId": 7,
  //             "questionType": null,
  //             "answers": [],
  //             "suggestedanswers": [
  //                 {
  //                     "id": 16,
  //                     "value": "asdga",
  //                     "questionId": 9
  //                 },
  //                 {
  //                     "id": 17,
  //                     "value": "ggg",
  //                     "questionId": 9
  //                 },
  //                 {
  //                     "id": 18,
  //                     "value": "aaaa",
  //                     "questionId": 9
  //                 }
  //             ]
  //         }
  //     ],
  //     "grades": null
  // }
  console.log(surv.questions);
  return (
    <>
      <ChoosenTitle>{surv.title}</ChoosenTitle>
      <AnswersContainer>
        <AnalizeHeader countAnswers="95" />
        {surv.questions.map((question) => {
          console.log(question.value);
          return <AnalizeQuestion survey={surv} q={question} />;
        })}
      </AnswersContainer>
    </>
  );
};

export default AnalizeSurvey;
