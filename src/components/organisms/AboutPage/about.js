import react from 'react';
import styled from 'styled-components';
import styles from './about.module.css';
import InfoSteps from 'components/molecules/InfoSteps/InfoSteps';
import gif from 'assets/gifs/register.gif';

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
const StepsContainer = styled.div`
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  flex-direction: row;
  color: white;
`;
const NumberedSteps = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const About = () => {
  return (
    <Wrapper>
      <div className={styles.aboutHeader}>
        <h1>Jak to działa?</h1>
        <p>
          Jesteśmy grupą osób z pomysłem jak pomóc studentom i nie tylko w
          stworzeniu ankiet, zebraniu wyników, oraz analizie wyników. Dzięki
          naszemu systemowi szybko uzbieracie potrzebne wyniki badań do swoich
          prac dyplomowych lub innych.
          <br />
          Sprawdź jakie to łatwe:
        </p>
      </div>
      <StepsContainer>
        <NumberedSteps>
          <InfoSteps
            className={styles.chuj}
            num="1"
            title="Załóż konto"
            desc="Rejestracja na naszej stronie jest (i zawsze będzie) darmowa!"
          ></InfoSteps>
          <InfoSteps
            num="2"
            title="Stwórz własną ankietę"
            desc="Możesz użyć wielu typów pytań, aby wyniki Twojej ankiety jak najlepiej przybliżyły cię do zadanego problemu."
          ></InfoSteps>
          <InfoSteps
            num="3"
            title="Wypełnij kilka ankiet"
            desc="Aby udostępnić swoją ankietę musisz wypełnić parę cudzych ankiet. Dzięki takiemu systemowi Twoja ankieta również uzbiera określoną przez Ciebie potrzebną ilość odpowiedzi w krótkim czasie!"
          ></InfoSteps>
          <InfoSteps
            num="4"
            title="Udostępnij swoją ankietę"
            desc="Udostępnij swoją ankietę i daj się zaskoczyć jak szybko uzbierasz potrzebną Ci ilość odpowiedzi!"
          ></InfoSteps>
          <InfoSteps
            num="5"
            title="Analizuj wyniki swojej ankiety"
            desc="Dajemy Ci narzędzia do jak najlepszej analizy wyników swojej ankiety i możliwość ich wyeksportowania, abyś mógł/mogła dołączyć ją do swojejpracy dyplomowej!"
          ></InfoSteps>
        </NumberedSteps>
        <img src={gif} />
      </StepsContainer>
    </Wrapper>
  );
};

export default About;
