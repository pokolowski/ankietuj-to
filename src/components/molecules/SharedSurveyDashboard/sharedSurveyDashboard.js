import React from 'react';
import styled from 'styled-components';
import styles from './sharedSurveyDashboard';
// import UserIcon from 'components/atoms/UserIcon/userIcon';
import UserIcon from 'components/atoms/UserIcon/userIcon';
import RightIcon from 'assets/icons/right-arrow.svg';
import IMG from 'components/atoms/IMG/img.js';

const Wrapper = styled.div`
  width: 50%;
  min-height: 150px;
  //   background-color: red;
  margin-bottom: 100px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  font-family: 'Alata';
  //   box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: -70px;
`;
const Span = styled.span`
  font-size: 14px;
  //   background-color: red;
`;
const Title = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #244a6e;
  margin-top: 10px;
`;
const Desc = styled.span`
  margin-top: 10px;
  font-size: 14px;
`;
const OptionContainer = styled.div`
  width: 100px;
  min-width: 100px;
  overflow: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  background-color: #99c7f2;
  border-radius: 0 10px 10px 0;
  box-shadow: #99c7f2 0px 0px 0px 1px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #0e3854;
  text-transform: uppercase;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    // box-shadow: #99c7f2 0px 54px 55px, #99c7f2 0px -12px 30px,
    // #99c7f2 0px 4px 6px, #99c7f2 0px 12px 13px, #99c7f2 0px -3px 5px;

    box-shadow: #99c7f2 0px 20px 30px -10px;
    // box-shadow: #0e3854 3px 3px 6px 0px inset, #0e3854 -3px -3px 6px 1px inset;
  }
`;

const SharedSurveyDashboard = ({ surveys }) => {
  return (
    <Wrapper>
      {console.log(surveys)}
      {/* <Icon src={UserIcon} /> */}
      <Icon>
        <UserIcon size="50px" />
      </Icon>
      <Span>*Imię* zaprasza do wypełnienia jego/jej ankiety:</Span>
      <Title>
        {/* Praca inżynierksa - portal do prowadzenia badań dla studentów */}
        {surveys.name}
      </Title>
      <Desc>
        {/* To jest opis jakieś pracy magisterskiej a ja patrze sobie na moją piękną
        dziewczynę, która jest taka urocza i kochana :DTo jest opis jakieś pracy
        magisterskiej a ja patrze sobie na moją piękną dziewczynę, która jest
        taka urocza i kochana :DTo jest opis jakieś pracy magisterskiej a ja
        patrze sobie na moją piękną dziewczynę, która jest taka urocza i kochana
        :D */}
        {surveys.desc}
      </Desc>
      <OptionContainer>
        <IMG size="35px" src={RightIcon} />
        <span>wypełnij ankietę</span>
      </OptionContainer>
    </Wrapper>
  );
};

export default SharedSurveyDashboard;
