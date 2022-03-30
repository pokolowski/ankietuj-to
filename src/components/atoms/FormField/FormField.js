import react from 'react';
import styled from 'styled-components';
import styles from './FormField.module.css';

const StyledInput = styled.input`
  margin-bottom: 20px;
`;

const FormField = ({ label, marginBottom = 0 }) => {
  return (
    <>
      <label> {label} </label>
      <br />
      <br />
      <StyledInput type="tekst" className={styles.inputClass}></StyledInput>
    </>
  );
};

export default FormField;
