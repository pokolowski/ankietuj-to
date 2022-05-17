import react, { useState } from 'react';
import styled from 'styled-components';
import styles from './FormField.module.css';
import { useForm } from 'react-hook-form';

const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: ${(props) => props.marginBottom}px;
  color: ${(props) => props.fontColor} !important;
`;

const FormField = ({
  label,
  marginBottom = 20,
  onChange,
  name,
  type = 'text',
  fontColor = '#c1e6ff',
  value = '',
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <label> {label} </label>
      <br />
      <StyledInput
        type={type}
        name={name}
        className={styles.inputClass}
        onChange={onChange}
        // {...register(name)}
        marginBottom={marginBottom}
        value={value}
        required
      ></StyledInput>
    </>
  );
};

export default FormField;
