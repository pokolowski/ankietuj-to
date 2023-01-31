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
import EditSurvey from 'components/organisms/AuthorizedView/EditSurvey/editSurvey';
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
  //Ankiety innych użytkowników, które można wypełniać
  const [otherSurveys, setOtherSurveys] = useState([]);
  //Ankiety możliwe do udostepnienia
  const [notSharedSurveys, setNotSharedSurveys] = useState([]);
  //Ankiety udostępnione możliwe do analizowania wyników
  const [sharedSurveys, setSharedSurveys] = useState([]);
  //wybranie ankiety do udostępnienia
  const [showSurvey, setShowSurvey] = useState(null);
  const [editSurveyId, setEditSurveyId] = useState(null);
  const [userAnswers, setUserAnswers] = useState([
    { idSurvey: '', questions: [{ question: '', answers: [] }] },
  ]);
  const navigate = useNavigate();

  const handleAddSurvey = async (name, desc, countAnswers, q) => {
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
      const response = await axios.post('/api/Survey/Create', {
        Title: name,
        Description: desc,
        questions: [...q],
        AnswersGoal: countAnswers,
      });
    } catch (e) {
      console.log(e);
    }
    navigate('/surveys');
  };
  const handleShowSurvey = (index) => {
    setShowSurvey(index);
    navigate('/preview');
  };
  const handleEditSurvey = (index) => {
    setEditSurveyId(index);
    navigate('/editSurvey');
  };

  //koniec danych do przeniesienia
  const auth = useAuth();
  let goToChoice = 'login';
  const handlePostAnswers = async (userAnswers) => {
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
    //refresh other user's surveys
    try {
      const response = await axios
        .get('api/Survey/getOtherUsersSurveys')
        .then(function (response) {
          setOtherSurveys(response.data);
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
            <Route path="/" element={<AuthorizedView />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/surveys"
              element={<Surveys editSurvey={handleEditSurvey} />}
            />
            <Route
              path="/createSurvey"
              element={<CreateSurvey addSurvey={handleAddSurvey} />}
            />
            <Route
              path="/editSurvey"
              element={<EditSurvey addSurvey={handleAddSurvey} />}
            />
            <Route path="/dashboard" element={<MainDashboard />} />
            <Route path="/preview" element={<ShowSurveyView />} />
            <Route
              path="/completeSurvey"
              element={<CompleteSurveys setUserAnswers={handlePostAnswers} />}
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
