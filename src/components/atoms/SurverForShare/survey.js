import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Survey = ({ title, description }) => {
  return <Wrapper></Wrapper>;
};

export default Survey;
