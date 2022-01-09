import React from 'react';
// import './HeaderSignIn.css';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style: none;
  font-size: 12px;
  position: absolute;
  right: 50px;
  /* transform: translateX(-50%); */
  display: flex;
  flex-direction: row;
  color: #0e3854;
`;
const ListItems = styled.li`
  display: block;
  padding: 10px;
  cursor: pointer;
`;

const HeaderSignIn = () => (
  <Wrapper>
    <ListItems>Zaloguj się</ListItems>
    <ListItems>Zarejestruj się</ListItems>
  </Wrapper>
);

export default HeaderSignIn;
