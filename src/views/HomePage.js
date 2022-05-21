import react from 'react';
import Header from 'components/organisms/header/header';
import HomeSlider from 'components/organisms/HomeSlider/homeSlider';
import About from 'components/organisms/AboutPage/about';
import ExampleSurveys from 'components/organisms/ExampleSurveys/examplesurveys';
import ContactPage from 'components/organisms/ContactPage/ContactPage';
import MenuLeftPanel from 'components/organisms/menuLeftPanel/menuLeftPanel';

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
