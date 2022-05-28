import React from 'react';
import WelcomePage from 'components/organisms/WelcomeScreen/welcomePage';
import AuthorizedHeader from 'components/organisms/AuthorizedHeader/authorizedHeader';

const AuthorizedView = () => {
  return (
    <>
      <AuthorizedHeader />
      <WelcomePage />
    </>
  );
};

export default AuthorizedView;
