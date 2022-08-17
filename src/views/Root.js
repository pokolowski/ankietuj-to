import React, { useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import Login from 'components/organisms/LoginPage/login.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import HomePage from './HomePage';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import AuthorizedView from './AuthorizedView';
import ProfilePage from 'components/organisms/AuthorizedView/ProfilePage/profilePage';
import Surveys from 'components/organisms/AuthorizedView/Surveys/surveys';
import CreateSurvey from 'components/organisms/AuthorizedView/CreateSurvey/createSurvey';
import MainDashboard from 'components/organisms/AuthorizedView/MainDashboard/mainDashboard';
import ShowSurveyView from 'components/organisms/AuthorizedView/ShowSurvey/showSurveyView';
import CompleteSurveys from 'components/organisms/AuthorizedView/CompleteSurveys/completeSurveys';
import ShareUrSurvey from 'components/organisms/AuthorizedView/ShareYourSurvey/shareUrSurvey';
import AnalizeResults from 'components/organisms/AuthorizedView/AnalizeResults/analizeResults';

const AuthenticatedApp = () => {
  return <>zalogowano</>;
};
const UnauthenticatedApp = ({ handleSignIn }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ login, password }) => handleSignIn({ login, password });

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('login')} />
      <input {...register('password', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

const Root = () => {
  const [displayOff, setDisplayOff] = useState(false);
  //dane chwilowo tutaj - do przeniesienia jak najszybciej
  const [surveys, setSurveys] = useState([]);
  const [showSurvey, setShowSurvey] = useState(null);
  const [userAnswers, setUserAnswers] = useState([
    { idSurvey: '', questions: [{ question: '', answers: [] }] },
  ]);
  const navigate = useNavigate();
  // console.log(userAnswers);

  //POBIERANIE ANKIET Z BAZY
  const getSurveys = async () => {
    try {
      const response = await axios
        .get('api/Survey/getSurveys')
        .then(function (response) {
          console.log(response);
        });
      // let decoded = jwt_decode(response.data);
      // console.log(decoded);
      // setUser({
      //   id: decoded.Id,
      //   imie: decoded.Name,
      //   nazwisko: decoded.Surname,
      //   email: decoded.Email
      // })
      // console.log(response.data);
      // navigate(`/`);
      // localStorage.setItem('token', response.data);
    } catch (e) {
      console.log(e);
      // dispatchError('Invalid email or password');
      // test przekierowania
      // setUser({
      //   imie: 'Patryk',
      //   nazwisko: 'Okolowski',
      //   email: 'pokolowski@edu.cdv.pl',
      //   haslo: 'silneHaslo',
      // });
      // console.log(user);
      // localStorage.setItem('token', user);
      // navigate(`/`);
      // // koniec testu
      // console.log(e);
    }
  };

  const handleAddSurvey = (name, desc, q, countAnswers) => {
    // post do bazy tutaj :  tytul, opis, pytania = [...q]
    // console.log({ name, desc, questions: [...q], countAnswers });
    setSurveys([{ name, desc, questions: [...q], countAnswers }, ...surveys]);
    navigate('/surveys');
    // console.log(surveys);
  };
  const handleDeleteSurvey = (index) => {
    const tempArr = [...surveys];
    tempArr.splice(index, 1);
    setSurveys(tempArr);
    console.log(index);
  };
  const handleShowSurvey = (index) => {
    setShowSurvey(index);
    navigate('/preview');
  };

  //koniec danych do przeniesienia
  const auth = useAuth();
  let goToChoice = 'login';

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/Login"
          element={
            <Login
              setLoginOrRegister={setDisplayOff}
              LoginOrRegister={displayOff}
            />
          }
        />
        <Route path="/Register" element={<Login />} />
        {auth.user ? (
          <>
            <Route path="/" element={<AuthorizedView />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* W to miejce muszą zostać przekazane ankiety użytkownika */}
            <Route
              path="/surveys"
              element={
                <Surveys
                  surveys={surveys}
                  showSurvey={handleShowSurvey}
                  deleteSurvey={handleDeleteSurvey}
                />
              }
            />
            {/* W tym miejscu musi zostać wykonanyu post aby dodać ankiety do bazy danych */}
            <Route
              path="/createSurvey"
              element={<CreateSurvey addSurvey={handleAddSurvey} />}
            />
            {/* W to miejsce trzeba wrzucić wszystkie ankiety, które nie są tego użytkownika tylko innych. */}
            <Route
              path="/dashboard"
              element={
                <MainDashboard
                  surveys={surveys}
                  getSurveys={getSurveys}
                  showSurvey={handleShowSurvey}
                  userAnswers={userAnswers}
                />
              }
            />
            <Route
              path="/preview"
              element={
                <ShowSurveyView idSurvey={showSurvey} surveys={surveys} />
              }
            />
            <Route
              path="/completeSurvey"
              element={
                <CompleteSurveys
                  survey={surveys[showSurvey]}
                  userAnswers={userAnswers}
                  setUserAnswers={setUserAnswers}
                  idSurvey={showSurvey}
                />
              }
            />
            <Route
              path="/shareSurveys"
              element={<ShareUrSurvey surveys={surveys} />}
            />
            {/* Tutaj powinny trafić ankiety, które zostały udostępnione */}
            <Route
              path="/analize"
              element={
                <AnalizeResults surveys={surveys} answers={userAnswers} />
              }
            />
          </>
        ) : (
          <Route
            path="/"
            element={<HomePage setLoginOrRegister={setDisplayOff} />}
          />
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default Root;
