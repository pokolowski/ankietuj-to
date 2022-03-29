import react from 'react';
import styled from 'styled-components';
import styles from './about.module.css';
import InfoSteps from 'components/molecules/InfoSteps/InfoSteps';
import gif from 'assets/gifs/register.gif';

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #04a8d6;
  overflow: hidden;
  box-shadow: 0 5px 10px 2px #04a8d6, 0 10px 10px 5px #73d9d9;
  z-index: 4;
  // margin-bottom: 100px;

  @media screen and (max-width: 500px) {
    font-size: 5px;
  }
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
  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const NumberedSteps = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <Wrapper id="AboutPage">
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
        <NumberedSteps className={styles.InfoStepsHolder}>
          <InfoSteps
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
            title="Wypełnij kilka cudzych ankiet"
            desc="Aby udostępnić swoją ankietę musisz wypełnić parę cudzych ankiet. Dzięki takiemu systemowi Twoja ankieta również uzbiera określoną przez Ciebie potrzebną ilość odpowiedzi w krótkim czasie!"
          ></InfoSteps>
          <InfoSteps
            num="4"
            title="Udostępnij swoją ankietę"
            desc="Udostępnij swoją ankietę i daj się zaskoczyć jak szybko uzbierasz potrzebną Ci ilość odpowiedzi!"
          ></InfoSteps>
          <div className={styles.lastChild}>
            <InfoSteps
              num="5"
              title="Analizuj wyniki swojej ankiety"
              desc="Dajemy Ci narzędzia do jak najlepszej analizy wyników swojej ankiety i możliwość ich wyeksportowania, abyś mógł/mogła dołączyć ją do swojej pracy dyplomowej!"
            ></InfoSteps>
          </div>
        </NumberedSteps>
        <img src={gif} />
      </StepsContainer>
    </Wrapper>
  );
};

export default About;
