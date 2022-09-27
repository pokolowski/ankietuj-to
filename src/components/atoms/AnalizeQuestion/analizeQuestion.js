import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: grey 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'Alata';
  overflow: hidden;
`;
const OpenQuestionContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  border-radius: 20px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
`;

const AnalizeQuestion = (q, survey) => {
  let labels = [];

  q.q.suggestedanswers.map((ans) => {
    labels.push(ans.value);
  });
  const questionType = q.q.questionTypeId;
  const answers = q.q.answers.map((ans) => ans.value);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${q.q.value}`,
        color: 'black',
        font: {
          size: 18,
        },
      },
    },
  };

  const compareLabels = [...labels];
  labels = labels.map((label) => label.split(' '));
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: compareLabels.map((label) => {
          let count = 0;
          answers.map((ans) => (ans === label ? count++ : ''));
          return count;
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(173, 129, 31, 0.2)',
          'rgba(250, 241, 95, 0.2)',
        ],
      },
    ],
  };
  return (
    <Wrapper>
      {questionType != 3 ? (
        <Bar options={options} data={data} />
      ) : (
        answers.map((answer) => (
          <OpenQuestionContainer>{answer}</OpenQuestionContainer>
        ))
      )}
    </Wrapper>
  );
};

export default AnalizeQuestion;
