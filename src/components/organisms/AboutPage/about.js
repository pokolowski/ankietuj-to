import react from 'react';
import styled from 'styled-components';
import './about.css';
import InfoSteps from 'components/molecules/InfoSteps/InfoSteps';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: realtive;
  background-color: #04a8d6;
  overflow: hidden;
`;
const NumberOne = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  border: 3px solid #fffcf2;
  border-radius: 90px;
  text-align: center;
`;

const About = () => {
  return (
    <Wrapper>
      <div className="aboutHeader">
        <h1>Jak to działa?</h1>
        <p>
          Jesteśmy grupą osób z pomysłem jak pomóc studentom i nie tylko w
          stworzeniu ankiet, zebraniu wyników, oraz analizie wyników. Dzięki
          naszemu systemowi szybko uzbieracie potrzebne wyniki badań do swoich
          prac dyplomowych lub innych.
          <br />
          Sprawdź jakie to łatwe:
        </p>
        <InfoSteps num="1"></InfoSteps>
      </div>
    </Wrapper>
  );
};

export default About;
