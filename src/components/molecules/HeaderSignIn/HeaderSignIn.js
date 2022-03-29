import React from 'react';
// import './HeaderSignIn.css';
import styled from 'styled-components';
// import styles from './HeaderSignIn.module.css';

const Wrapper = styled.ul`
  list-style: none;
  font-size: 12px;
  position: absolute;
  right: 50px;
  /* transform: translateX(-50%); */
  display: flex;
  flex-direction: ${(props) => props.direction};
  color: #0e3854;
  justify-content: center;
  align-items: center;
  // background-color: blue;
  padding: 0;
  @media (max-width: 500px) {
    font-size: 18px;
    width: 100%;
    right: 0;
  }
`;
const ListItems = styled.li`
  display: block;
  padding: 20px;
  cursor: pointer;
  text-align: center;
`;

const HeaderSignIn = ({ direction }) => (
  <Wrapper direction={direction}>
    <ListItems>Zaloguj się</ListItems>
    <ListItems>Zarejestruj się</ListItems>
  </Wrapper>
);

export default HeaderSignIn;
