import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { IoConstructOutline } from 'react-icons/io5';
import { useSelector } from '@reduxjs/toolkit';

const APIContext = React.createContext({});

export const APIProvider = ({ children }) => {
  const [usersSurveys, setUsersSurvey] = useState([]);
  const [otherUsersSurveys, setOtherUsersSurveys] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [surveyIDToPreview, setSurveyIDToPreview] = useState(null);
  const [notSharedSurveys, setNotSharedSurveys] = useState([]);
  const [usersPoints, setUsersPoints] = useState([]);
  const [sharedSurveys, setSharedSurveys] = useState([]);

  const configureAuthToken = () => {
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
  };

  const reverseArray = (arr) => {
    const tempArr = [];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i]) tempArr.unshift(arr[i]);
    }
    return tempArr;
  };

  const getUsersSurveys = async () => {
    configureAuthToken();
    try {
      const response = await axios
        .get('api/Survey/getUserSurveys')
        .then(function (response) {
          const reversedSurveysArr = reverseArray(response.data);
          setUsersSurvey(reversedSurveysArr);
          setLoading(false);
        });
    } catch (e) {
      //   setLoading(false);
    }
    return usersSurveys;
  };
  const handleAddSurvey = async (name, desc, countAnswers, q) => {
    configureAuthToken();
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
    getUsersSurveys();
  };
  const getNotSharedUserSurveys = async () => {
    setLoading(true);
    configureAuthToken();

    try {
      const response = await axios
        .get('api/Survey/getUserInactiveSurveys')
        .then(function (response) {
          setNotSharedSurveys(response.data);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const updateUsersPoints = async () => {
    configureAuthToken();
    try {
      const response = await axios
        .get('api/Account/getUserPoints')
        .then(function (response) {
          setUsersPoints(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const shareSurvey = async (id) => {
    configureAuthToken();
    try {
      const response = await axios.post(
        `/api/Survey/shareSurvey?surveyid=${id}`
      );
    } catch (e) {
      console.log(e);
    }
  };
  const getOtherUsersSurveys = async () => {
    setLoading(true);
    setLoading(true);
    configureAuthToken();
    try {
      const response = await axios
        .get('api/Survey/getOtherUsersSurveys')
        .then(function (response) {
          const reversedArr = reverseArray(response.data);
          setOtherUsersSurveys(reversedArr);
          setLoading(false);
        });
    } catch (e) {
      console.log(
        'Wystapil blad przy pobieraniu ankiet innnych uzytkownikow. Już pracuję nad poprawą tego błędu. Przepraszam za niedogodności.'
      );
    }
    return otherUsersSurveys;
  };

  const updateSharedSurveys = async () => {
    configureAuthToken();
    try {
      const response = await axios
        .get('api/Survey/getUserActiveSurveys')
        .then(function (response) {
          setSharedSurveys(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const postAnswers = async (userAnswers) => {
    configureAuthToken();
    try {
      const response = await axios.post('api/Survey/completeSurvey', {
        ...userAnswers,
      });
    } catch (e) {
      console.log(e);
    }
    getOtherUsersSurveys();
  };

  const deleteSurvey = async (ID) => {
    configureAuthToken();
    try {
      const response = await axios.delete(
        `/api/Survey/deleteSurvey?surveyId=${ID}`
      );
    } catch (e) {
      console.log(e);
    }
    getUsersSurveys();
  };
  return (
    <APIContext.Provider
      value={{
        getUsersSurveys,
        usersSurveys,
        isLoading,
        surveyIDToPreview,
        setSurveyIDToPreview,
        deleteSurvey,
        getOtherUsersSurveys,
        otherUsersSurveys,
        postAnswers,
        notSharedSurveys,
        getNotSharedUserSurveys,
        updateUsersPoints,
        usersPoints,
        shareSurvey,
        updateSharedSurveys,
        sharedSurveys,
        handleAddSurvey,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => {
  const api = useContext(APIContext);
  if (!api) {
    throw Error('useAuth needs to be used inside AuthContext');
  }
  return api;
};
