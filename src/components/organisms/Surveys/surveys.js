import React, { useState } from 'react';
import styled from 'styled-components';
import AuthorizedHeader from '../AuthorizedHeader/authorizedHeader';
import PlusIcon from 'assets/icons/plus.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #bde0fe;
`;
const Container = styled.div`
  width: 70%;
  min-height: 95%;
  // background-color: red;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CreateSurvey = styled.div`
  width: 230px;
  height: 270px;
  background-color: white;
  border-radius: 10px;
  border: 2px dotted #067eed;
  position: absolute;
  top: 20px;
  left: calc(50% - 100px);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #067eed;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 3px solid #067eed;
  }
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Hr = styled.div`
  width: 600%;
  height: 2px;
  position: absolute;
  bottom: -100px;
  // background-color: grey;
  background: rgb(189, 224, 254);
  background: linear-gradient(
    90deg,
    rgba(189, 224, 254, 1) 0%,
    rgba(6, 126, 237, 1) 50%,
    rgba(189, 224, 254, 1) 100%
  );
  // color: red;
`;

const Surveys = () => {
  return (
    <>
      <AuthorizedHeader />
      <Wrapper>
        <Container>
          <CreateSurvey>
            <Div>
              <Img src={PlusIcon} />
              STWÓRZ ANKIETĘ
            </Div>
            <Hr />
          </CreateSurvey>
        </Container>
      </Wrapper>
    </>
  );
};

export default Surveys;
