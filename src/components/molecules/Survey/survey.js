import React from 'react';
import styled from 'styled-components';
import styles from './survey.module.css';
const Wrapper = styled.div`
  min-width: 300px;
  width: auto;
  max-width: 360px;
  height: 150px;
  background-color: white;
  // position: relative;
  margin-top: 30px;
  margin-left: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Survey = ({ title, desc }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <h4>{desc}</h4>
    </Wrapper>
  );
};

export default Survey;
