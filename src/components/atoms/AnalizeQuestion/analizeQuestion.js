import React from 'react';
import styled from 'styled-components';
//test
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

//koniec testu

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
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'Alata';
  overflow: hidden;
`;

const AnalizeQuestion = (q, survey) => {
  let labels = [];

  q.q.suggestedanswers.map((ans) => {
    labels.push(ans.value);
  });
  //test
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
        position: 'right',
        labels: {
          font: {
            size: 13,
          },
        },
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

  //   const labels = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //   ];
  //   const labels = [
  //     'Halo pytanie pierwsze',
  //     'halo odpowiedz poprawna',
  //     'a ta niepoprawna',
  //   ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Liczba odpowiedzi',
        data: labels.map(() => Math.floor(Math.random() * 100) + 1),
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
  console.log(data);
  //   console.log(q.q.value);
  //koniec testu
  return (
    <Wrapper>
      <Bar options={options} data={data} />
    </Wrapper>
  );
};

export default AnalizeQuestion;
