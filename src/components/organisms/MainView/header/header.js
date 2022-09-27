import React from 'react';
import styled from 'styled-components';
import styles from './header.module.css';
import HeaderUl from 'components/molecules/HeaderUl/HeaderUl';
import HeaderSignIn from 'components/molecules/HeaderSignIn/HeaderSignIn';

const Header = ({ setLoginOrRegister }) => (
  <div className={styles.header}>
    <h1 className={styles.styledH1}> ankietuj to </h1>
    <HeaderUl />
    <HeaderSignIn setLoginOrRegister={setLoginOrRegister} />
  </div>
);
export default Header;
