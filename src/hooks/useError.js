import React, { useCallback, useContext, useState } from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = (message) => {
    setError(message);
  };

  return (
    <ErrorContext.Provider value={{ error, dispatchError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return errorContext;
};
