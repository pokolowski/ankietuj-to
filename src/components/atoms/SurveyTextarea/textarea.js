import React from 'react';
import styled from 'styled-components';
import styles from './textarea.module.css';
const Wrapper = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  resize: none;
  //
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.borderColor};
  font-size: 16px;
  transition: 0.2s;
  margin-top: 20px;
  margin-bottom: 20px;
  color: black;
  font-family: arial;
  font-size: ${(props) => props.fontSize};
  //   line-height: ${(props) => props.fontSize};
  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.borderColor};
    transition: 0.2s;
    border-radius: 10px;
  }
`;

const Textarea = ({
  width,
  height,
  placeholder,
  borderColor = '#0085ff',
  ...props
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      borderColor={borderColor}
      {...props}
      placeholder={placeholder}
    ></Wrapper>
  );
};

export default Textarea;
