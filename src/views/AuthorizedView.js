import React from 'react';
import WelcomePage from 'components/organisms/WelcomeScreen/welcomePage';
import AuthorizedHeader from 'components/organisms/AuthorizedHeader/authorizedHeader';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from 'components/organisms/ProfilePage/profilePage';

const AuthorizedView = () => {
  return (
    <>
      <AuthorizedHeader />
      <WelcomePage />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
    </>
  );
};

export default AuthorizedView;
