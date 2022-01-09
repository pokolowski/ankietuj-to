import React from 'react';
// import './HeaderUl.css';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style: none;
  font-size: 12px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  color: #0e3854;
`;
const ListItems = styled.li`
  display: block;
  padding: 10px;
  cursor: pointer;
`;

const HeaderUl = () => (
  <Wrapper>
    <ListItems>Jak to działa?</ListItems>
    <ListItems>Przykłady ankiet</ListItems>
    <ListItems>Kontakt</ListItems>
  </Wrapper>
);

export default HeaderUl;
