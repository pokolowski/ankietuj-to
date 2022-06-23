import React from 'react';
import styled from 'styled-components';
import styles from './sharedSurveyDashboard';
// import UserIcon from 'components/atoms/UserIcon/userIcon';
import UserIcon from 'components/atoms/UserIcon/userIcon';

const Wrapper = styled.div`
  width: 50%;
  min-height: 150px;
  //   background-color: red;
  margin-bottom: 100px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  //   box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: -70px;
`;
const Span = styled.span`
  //   background-color: red;
  font-family: 'Alata';
`;

const SharedSurveyDashboard = () => {
  return (
    <Wrapper>
      {/* <Icon src={UserIcon} /> */}
      <Icon>
        <UserIcon size="50px" />
      </Icon>
      <Span>*Imię* zaprasza do wypełnienia jego ankiety:</Span>
    </Wrapper>
  );
};

export default SharedSurveyDashboard;
