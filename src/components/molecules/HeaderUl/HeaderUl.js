import React from 'react';
// import './HeaderUl.css';
import styled from 'styled-components';
import styles from './HeaderUl.module.css';
// import { scroller } from 'react-scroll';

const Wrapper = styled.ul`
  list-style: none;
  font-size: 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: ${(props) => (props.dir === 'column' ? 'column' : 'row')};
  color: #0e3854;
  justify-content: center;
  align-items: center;
  // background-color: red;
  // background-color: blue;
  padding: 0;
  @media (max-width: 500px) {
    font-size: 18px;
    width: 100%;
  }
`;
const ListItems = styled.li`
  display: block;
  padding: 20px;
  cursor: pointer;
  text-align: center;
  // background-color: green;
`;

const HeaderUl = ({ direction }) => (
  <Wrapper dir={direction}>
    <ListItems>
      <a className={styles.aLink} href="#AboutPage">
        Jak to działa?
      </a>
    </ListItems>
    <ListItems>
      <a className={styles.aLink} href="#SurveysExamples">
        Przykłady ankiet
      </a>
    </ListItems>
    <ListItems>
      <a className={styles.aLink} href="">
        Kontakt
      </a>
    </ListItems>
  </Wrapper>
);

export default HeaderUl;
