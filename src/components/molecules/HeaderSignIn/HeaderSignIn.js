import React, { useContext } from 'react';
// import './HeaderSignIn.css';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import styles from './HeaderSignIn.module.css';

const Wrapper = styled.div`
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

const HeaderSignIn = ({ direction, setLoginOrRegister }) => {
  return (
    <Wrapper direction={direction}>
      <NavLink
        to="/Login"
        className={styles.StyledNavLink}
        as="li"
        onClick={() => setLoginOrRegister(false)}
      >
        Zaloguj się
      </NavLink>
      <NavLink
        to="/Login"
        className={styles.StyledNavLink}
        as="li"
        onClick={() => setLoginOrRegister(true)}
      >
        Zarejestruj się
      </NavLink>
    </Wrapper>
  );
};

export default HeaderSignIn;
