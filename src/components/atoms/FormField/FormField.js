import react, { useState } from 'react';
import styled from 'styled-components';
import styles from './FormField.module.css';
import { useForm } from 'react-hook-form';

const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: ${(props) => props.marginBottom}px;
  color: ${(props) => props.fontColor} !important;
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
      value,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <label> {label} </label>
        <br />
        <StyledInput
          type={type}
          name={name}
          className={styles.inputClass}
          // onChange={onChange}
          marginBottom={marginBottom}
          // value={value}
          {...props}
          ref={ref}
          required
        ></StyledInput>
      </>
    );
  }
);

export default FormField;
