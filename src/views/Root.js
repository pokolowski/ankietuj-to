import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.js';
import Login from 'components/organisms/LoginPage/login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const Root = () => {
  const [displayOff, setDisplayOff] = useState(false);
  const auth = useAuth();

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
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/createSurvey" element={<CreateSurvey />} />
            <Route path="/editSurvey" element={<EditSurvey />} />
            <Route path="/dashboard" element={<MainDashboard />} />
            <Route path="/preview" element={<ShowSurveyView />} />
            <Route path="/completeSurvey" element={<CompleteSurveys />} />
            <Route path="/shareSurveys" element={<ShareUrSurvey />} />
            <Route path="/analize" element={<AnalizeResults />} />
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
