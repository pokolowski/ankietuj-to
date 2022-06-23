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
  const navigate = useNavigate();

  const handleAddSurvey = (name, desc, q) => {
    setSurveys([...surveys, { name, desc, questions: [...q] }]);
    navigate('/surveys');
    // console.log(surveys);
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
            <Route path="/surveys" element={<Surveys surveys={surveys} />} />
            <Route
              path="/createSurvey"
              element={<CreateSurvey addSurvey={handleAddSurvey} />}
            />
            <Route path="/dashboard" element={<MainDashboard />} />
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
