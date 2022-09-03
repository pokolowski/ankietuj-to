import React from 'react';
import WelcomePage from 'components/organisms/AuthorizedView/WelcomeScreen/welcomePage';
import AuthorizedHeader from 'components/organisms/AuthorizedView/AuthorizedHeader/authorizedHeader';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from 'components/organisms/AuthorizedView/ProfilePage/profilePage';

const AuthorizedView = ({ setMySurveys, setOtherSurveys }) => {
  return (
    <>
      <AuthorizedHeader
        setMySurveys={setMySurveys}
        setOtherSurveys={setOtherSurveys}
      />
      <WelcomePage
        setMySurveys={setMySurveys}
        setOtherSurveys={setOtherSurveys}
      />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
    </>
  );
};

export default AuthorizedView;
