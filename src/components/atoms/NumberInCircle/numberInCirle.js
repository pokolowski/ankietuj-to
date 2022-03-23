import react from 'react';
import styled from 'styled-components';

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  border: 3px solid #fffcf2;
  border-radius: 50%;
  font-size: 45px;
  //font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Number = styled.span`
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
`;

const NumberInCirle = ({ num }) => {
  return (
    <>
      <StepNumber>
        <Number>{num}</Number>
      </StepNumber>
    </>
  );
};

export default NumberInCirle;