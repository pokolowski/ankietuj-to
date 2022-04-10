import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './registry.module.css';
import LoginForm from 'components/molecules/LoginForm/loginForm';

const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: translate(-50%, -50%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  //   background-color: red;
`;

const Registry = () => {
  return (
    <Wrapper>
      <h1 className={styles.styledH1}> ankietuj to </h1>
      <LoginForm />
    </Wrapper>
  );
};

export default Registry;
