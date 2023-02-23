import react, { useState } from 'react';
import styled from 'styled-components';
import styles from './FormField.module.css';
import { useForm } from 'react-hook-form';

const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: ${(props) => props.marginBottom}px;
  color: ${(props) => props.fontColor} !important;
  box-sizing: border-box;
  padding: 5px;
  ${(props) => (props.width ? 'width: ' + props.width + ';' : '')}
  ${(props) => (props.height ? 'height: ' + props.height + ';' : '')}
  ${(props) => (props.fontSize ? 'font-size: ' + props.fontSize + ';' : '')}
`;

const FormField = react.forwardRef(
  (
    {
      label,
      marginBottom = 20,
      onChange,
      name,
      type = 'text',
      fontColor = '#c1e6ff',
      floatLeft,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {label === 'none' ? '' : <label> {label} </label>}

        {!floatLeft ? '' : <br />}
        <br />
        <StyledInput
          type={type}
          name={name}
          className={styles.inputClass}
          onChange={onChange}
          marginBottom={marginBottom}
          defaultValue={props.defaultValue}
          {...props}
          ref={ref}
          required
        ></StyledInput>
      </>
    );
  }
);

export default FormField;
