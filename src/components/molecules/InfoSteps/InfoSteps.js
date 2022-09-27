import react from 'react';
import styled from 'styled-components';
import './InfoSteps.css';
import NumberInCirle from 'components/atoms/NumberInCircle/numberInCirle';

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 500px) {
  }
`;
const WrapperChild = styled.div`
  max-width: 480px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    max-width: 480px;
  }
`;
const Title = styled.div`
  width: 100%;
  height: 40%;
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const Description = styled.div`
  width: 100%;
  font-size: 14px;
  color: #c1e6ff;
`;

const InfoSteps = ({ num, title, desc }) => {
  return (
    <Wrapper>
      <NumberInCirle num={num}></NumberInCirle>
      <WrapperChild>
        <Title>{title}</Title>
        <Description> {desc}</Description>
      </WrapperChild>
    </Wrapper>
  );
};

export default InfoSteps;
