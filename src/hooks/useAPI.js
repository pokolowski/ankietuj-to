import React, { useContext, useState } from 'react';
import axios from 'axios';
import { IoConstructOutline } from 'react-icons/io5';

const APIContext = React.createContext({});

export const APIProvider = ({ children }) => {
  const [usersSurveys, setUsersSurvey] = useState([]);
  const [otherUsersSurveys, setOtherUsersSurveys] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [surveyIDToPreview, setSurveyIDToPreview] = useState(null);

  const reverseArray = (arr) => {
    const tempArr = [];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i]) tempArr.unshift(arr[i]);
    }
    return tempArr;
  };
  const getUsersSurveys = async () => {
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
  const getOtherUsersSurveys = async () => {
    setLoading(true);
    setLoading(true);
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

  const deleteSurvey = async (ID) => {
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
