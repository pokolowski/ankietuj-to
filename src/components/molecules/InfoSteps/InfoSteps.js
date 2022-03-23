import react from 'react';
import styled from 'styled-components';
import './InfoSteps.css';
import NumberInCirle from 'components/atoms/NumberInCircle/numberInCirle';

const Wrapper = styled.div`
  //float: left;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  //background-color: red;
`;
const WrapperChild = styled.div`
  max-width: 480px;
  //height: 100px;
  margin-left: 50px;
  //background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  height: 40%;
  //background-color: blue;
  font-size: 24px;
  font-weight: bold;
`;
const Description = styled.div`
  width: 100%;
  //height: 50%;
  //background-color: green;
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
