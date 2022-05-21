import React from 'react';
import styled from 'styled-components';
// import './header.css';
import styles from './header.module.css';
import HeaderUl from 'components/molecules/HeaderUl/HeaderUl';
import HeaderSignIn from 'components/molecules/HeaderSignIn/HeaderSignIn';

// const Wrapper = styled.div`
// margin: 0 !important;
// box-sizing: border-box;
// width: 100%;
// height: 600px
// position: absolute;
// top: 0;
// left: 0;
// box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
// `;

const Header = ({ setLoginOrRegister }) => (
  <div className={styles.header}>
    <h1 className={styles.styledH1}> ankietuj to </h1>
    <HeaderUl />
    <HeaderSignIn setLoginOrRegister={setLoginOrRegister} />
  </div>
);
export default Header;
