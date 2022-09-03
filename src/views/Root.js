import React, { useState, useEffect } from 'react';
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
  //ankiety użytkownika
  const [mySurveys, setMySurveys] = useState([]);
  //Ankiety innych użytkowników, które można wypełniać
  const [otherSurveys, setOtherSurveys] = useState([]);
  //Ankiety możliwe do udostepnienia
  const [notSharedSurveys, setNotSharedSurveys] = useState([]);
  //Ankiety udostępnione możliwe do analizowania wyników
  const [sharedSurveys, setSharedSurveys] = useState([]);
  const [showSurvey, setShowSurvey] = useState(null);
  const [userAnswers, setUserAnswers] = useState([
    { idSurvey: '', questions: [{ question: '', answers: [] }] },
  ]);
  const navigate = useNavigate();
  // console.log(userAnswers);

  //POBIERANIE ANKIET Z BAZY
  // const getSurveys = async () => {

  // };

  const handleAddSurvey = async (name, desc, countAnswers, q) => {
    // post do bazy tutaj :  tytul, opis, pytania = [...q]
    // console.log({ name, desc, questions: [...q], countAnswers });

    //Zmiany Alberta
    let authToken = localStorage.getItem('token');
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${authToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    //Koniec zmian Alberta
    // const count = 100;
    try {
      // console.log({
      //   Title: name,
      //   Description: desc,
      //   questions: [...q],
      //   AnswersGoal: countAnswers,
      // });
      const response = await axios.post('/api/Survey/Create', {
        Title: name,
        Description: desc,
        questions: [...q],
        AnswersGoal: countAnswers,
      });
    } catch (e) {
      // dispatchError('Invalid email or password');
      // test przekierowania
      console.log(e);
    }
    //setSurveys([{ name, desc, questions: [...q], countAnswers }, ...surveys]);
    navigate('/surveys');
    // console.log(surveys);
  };
  const handleDeleteSurvey = async (index) => {
    let authToken = localStorage.getItem('token');
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${authToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    try {
      const response = await axios.delete(
        `/api/Survey/deleteSurvey?surveyId=${index}`
      );
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await axios
        .get('api/Survey/getUserSurveys')
        .then(function (response) {
          setMySurveys(response.data);
        });
    } catch (e) {
      console.log(e);
    }

    //
  };
  const handleShowSurvey = (index) => {
    setShowSurvey(index);
    navigate('/preview');
  };

  //koniec danych do przeniesienia
  const auth = useAuth();
  let goToChoice = 'login';
  const handleSetMySur = () => {
    setMySurveys([]);
  };
  const handleSetOtherSur = () => {
    setOtherSurveys([]);
  };
  const handlePostAnswers = async (userAnswers) => {
    console.log(userAnswers);
    setUserAnswers(userAnswers);
    let authToken = localStorage.getItem('token');
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${authToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    try {
      const response = await axios.post('api/Survey/completeSurvey', {
        ...userAnswers,
      });
    } catch (e) {
      console.log(e);
    }
  };
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
            <Route
              path="/"
              element={
                <AuthorizedView
                  setMySurveys={setMySurveys}
                  setOtherSurveys={setOtherSurveys}
                />
              }
            />
            <Route path="/profile" element={<ProfilePage />} />
            {/* W to miejce muszą zostać przekazane ankiety użytkownika */}
            <Route
              path="/surveys"
              element={
                <Surveys
                  surveys={mySurveys}
                  addSurveys={setMySurveys}
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
                  otherSurveys={otherSurveys}
                  setOtherSurveys={setOtherSurveys}
                  // getSurveys={getSurveys}
                  showSurvey={handleShowSurvey}
                  userAnswers={userAnswers}
                />
              }
            />
            <Route
              path="/preview"
              element={
                <ShowSurveyView idSurvey={showSurvey} surveys={mySurveys} />
              }
            />
            <Route
              path="/completeSurvey"
              element={
                <CompleteSurveys
                  survey={otherSurveys[showSurvey]}
                  userAnswers={userAnswers}
                  setUserAnswers={handlePostAnswers}
                />
              }
            />
            <Route
              path="/shareSurveys"
              element={
                <ShareUrSurvey
                  notSharedSurveys={notSharedSurveys}
                  shareSurvey={setNotSharedSurveys}
                />
              }
            />
            {/* Tutaj powinny trafić ankiety, które zostały udostępnione */}
            <Route
              path="/analize"
              element={
                <AnalizeResults
                  sharedSurveys={sharedSurveys}
                  answers={userAnswers}
                  setSharedSurveys={setSharedSurveys}
                />
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
