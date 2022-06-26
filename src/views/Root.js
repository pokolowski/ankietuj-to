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
import ProfilePage from 'components/organisms/ProfilePage/profilePage';
import Surveys from 'components/organisms/Surveys/surveys';
import CreateSurvey from 'components/organisms/CreateSurvey/createSurvey';
import MainDashboard from 'components/organisms/MainDashboard/mainDashboard';
import ShowSurveyView from 'components/organisms/ShowSurvey/showSurveyView';
import CompleteSurveys from 'components/organisms/CompleteSurveys/completeSurveys';

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
  console.log(userAnswers);

  const handleAddSurvey = (name, desc, q, countAnswers) => {
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
