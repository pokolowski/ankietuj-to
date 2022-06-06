import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Wrapper = styled.li`
  width: 70%;
  height: 20%;
  //   background-color: blue;
  border-bottom: 2px solid #0085ff;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const ProfileOptionLi = ({ value, color = 'black', onClick }) => {
  return (
    <Wrapper color={color} onClick={() => onClick()}>
      {value}
    </Wrapper>
  );
};

ProfileOptionLi.propTypes = {
  value: propTypes.string,
};

export default ProfileOptionLi;
