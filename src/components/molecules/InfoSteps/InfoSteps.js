import react from 'react';
import styled from 'styled-components';
import './InfoSteps.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border: 3px solid #fffcf2;
  border-radius: 50%;
  font-size: 24px;
  //font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Number = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InfoSteps = ({ num, title, desc }) => {
  return (
    <Wrapper>
      <StepNumber>
        <Number>{num}</Number>
      </StepNumber>
    </Wrapper>
  );
};

export default InfoSteps;
