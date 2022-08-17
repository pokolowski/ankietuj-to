import react from 'react';
import Header from 'components/organisms/MainView/header/header';
import HomeSlider from 'components/organisms/MainView/HomeSlider/homeSlider';
import About from 'components/organisms/MainView/AboutPage/about';
import ExampleSurveys from 'components/organisms/MainView/ExampleSurveys/examplesurveys';
import ContactPage from 'components/organisms/MainView/ContactPage/ContactPage';
import MenuLeftPanel from 'components/organisms/MainView/menuLeftPanel/menuLeftPanel';

const HomePage = ({ setLoginOrRegister }) => {
  return (
    <>
      <Header setLoginOrRegister={setLoginOrRegister} />
      <HomeSlider />
      <About />
      <ExampleSurveys />
      <ContactPage />
      <MenuLeftPanel />
    </>
  );
};

export default HomePage;
