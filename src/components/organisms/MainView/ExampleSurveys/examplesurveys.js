import react from 'react';
import style from './examplesurveys.module.css';
import styled from 'styled-components';
import ScreenAfterLogin from 'assets/screens/SCREEN8.PNG';
import ScreenCreating1 from 'assets/screens/TWORZENIE-ALT.PNG';
import ScreenMySurv from 'assets/screens/screen12.PNG';
import ScreenPreview from 'assets/screens/screen10.PNG';
import ScreenShare from 'assets/screens/SCREEN7.PNG';
import ScreenAnalize from 'assets/screens/analiza.PNG';

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  min-width: 350px;
  // max-width: 100%;
  min-height: 500px;
  height: auto;
  background-color: #73d9d9;
  box-shadow: 0 5px 10px 2px #73d9d9, 0 10px 10px 5px #0e3854;
  overflow: hidden;
  font-family: 'Alata';
`;
const Title = styled.h2`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
`;
const Container = styled.div`
  width: 90%;
  min-height: 200px;
  position: relative;
  margin-bottom: 100px;
  top: 40px;
  left: 5%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const IMG = styled.img`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  // float: left;
  // border: 1px solid black;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const P = styled.div`
  position: relative;
  width: 100%;
  min-height: 350px;
  box-sizing: border-box;
  padding: 20px;
  // background-color: blue;
  display: flex;
  align-items: center;
  color: white;
  font-family: 'Alata';
`;
const Description = styled.div`
  // background-color: yellow;
  margin: 50px;
  min-width: 100px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;
  // line-height: 25px;
`;
const PTitle = styled.h1`
  text-transform: uppercase;
`;

const ExampleSurveys = () => {
  return (
    <Wrapper id="SurveysExamples">
      <Container>
        <P>
          <IMG src={ScreenAfterLogin} height="300px" />
          <Description>
            <PTitle>Przejrzysty panel</PTitle>
            <p>
              Po zalogowaniu się nie zostaniesz zaatakowany mnóstwem reklam,
              zgód marketingowych, lub ponadprogramowymi ciasteczkami! Logując
              się do naszego portalu od razu możesz przejść do działania
              wybierając jedną z 5 akcji, które ukażą się twoim oczom.
            </p>
          </Description>
        </P>
        <P>
          <Description>
            <PTitle>Tworzenie ankiet</PTitle>
            <p>
              Tworzenie ankiet jest banalnie proste. Szybko uda Ci się stworzyć
              cała ankietę do przeprowadzenia badań od zera! Napisz temat oraz
              dodaj opis do niego, aby zaciekawić ankietowanych, dodawaj dowolną
              ilość pytań wybierając jeden z trzech rodzajów: pytanie
              jednokrotnego wyboru, pytanie wylokrotnego wyboru lub pytanie
              otwarte.
            </p>
          </Description>
          <IMG src={ScreenCreating1} width="500px" />
        </P>
        <P>
          <IMG src={ScreenMySurv} height="300px" />
          <Description>
            <PTitle>Nie ograniczaj się!</PTitle>
            <p>
              Możesz u nas zrobić tyle ankiet ile chcesz, nie musisz się
              ograniczać! Potrzebujesz badań tylko do licencjatu? A może
              wybrałeś ścieżkę edukacji i potrzebujesz badań do licencjatu,
              magisterki oraz doktoratu? <br /> MY CI POMOŻEMY PRZEPROWADZIĆ
              BADANIA DO WSZYSTKICH ETAPÓW!
            </p>
          </Description>
        </P>
        <P>
          <Description>
            <PTitle>Podgląd Twojej ankiety</PTitle>
            <p>
              Zobacz jak inni będą widzieć Twoje ankiety. Jest to świetna
              okazja, żeby sprawdzić czy nie zrobiło się żadnej literówki lub
              czy może nie zmienić kolejności pytań!
            </p>
          </Description>
          <IMG src={ScreenPreview} height="450px" />
        </P>
        <P>
          <IMG src={ScreenShare} height="400px" />
          <Description>
            <PTitle>Udostępniaj swoje ankiety</PTitle>
            <p>
              Masz już stworzoną i sprawdzoną ankietę? <br /> NIE CZEKAJ DŁUŻEJ
              - UDOSTĘPNIJ JĄ, aby inni mogli ją zobaczyć i wypełnić! <br />{' '}
              Pamiętaj jednak, że każdy chce szybko przeprowadzić badania więc
              wyznajemy zasadę wzajemnej pomocy. Ankietę możesz udostępnić
              całkowicie za darmo, jednak wcześniej musisz zdobyć 5 punktów.{' '}
              <br /> Jak je zdobyć? TO PROSTE - wystarczy, że wypełnisz 5 czyiś
              ankiet! Za każdą wypełnioną ankietę dostaniesz 1 punkt.
            </p>
          </Description>
        </P>
        <P>
          <Description>
            <PTitle>Analizuj wyniki swojej ankiety!</PTitle>
            <p>
              Wreszcie całe clue Twojej przygody z nami! <br /> Przeanalizuj
              uzyskane odpowiedzi do swojej ankiety. Zobacz jakie odpowiedzi
              uzyskały więcej głosów, lub jak na pytania otwarte udzielili
              odpowiedzi ankietowani. Pomożemy Ci to zrobił miłymi dla oka
              wykresami, aby jak najbardziej przyjemnie podsumowywało Ci się
              badania.
            </p>
          </Description>
          <IMG src={ScreenAnalize} height="450px" />
        </P>
      </Container>
    </Wrapper>
  );
};

export default ExampleSurveys;
