import React from 'react';
import styled from 'styled-components';
import styles from './HeaderUl.module.css';

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
`;

const HeaderUl = ({ direction, deactivateLeftPanel }) => (
  <Wrapper dir={direction}>
    <ListItems>
      <a
        className={styles.aLink}
        href="#AboutPage"
        onClick={() => deactivateLeftPanel(false)}
      >
        Jak to działa?
      </a>
    </ListItems>
    <ListItems>
      <a
        className={styles.aLink}
        href="#SurveysExamples"
        onClick={() => deactivateLeftPanel(false)}
      >
        Przykłady ankiet
      </a>
    </ListItems>
    <ListItems>
      <a
        className={styles.aLink}
        href="#ContactPage"
        onClick={() => deactivateLeftPanel(false)}
      >
        Kontakt
      </a>
    </ListItems>
  </Wrapper>
);

export default HeaderUl;
