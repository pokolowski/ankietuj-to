import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gif from 'assets/gifs/surveygif.gif';
import './homeSlider.css';
// const Wrapper = styled.div`
//   position: absolute;
//   top: 100px;
//   left: 0;
//   width: 100%;
//   height: calc(100vh - 100px);
//   color: #067eed;
//   background-color: red;
//   @media screen and (max-width:500px){
//     top: 0;
//   }
// `;
const HomeSlider = () => {
  const textcontent = [
    {
      title: 'Twórz ankiety już teraz',
      content:
        'Skorzystaj z naszych szablonów i stwórz swoją własną ankietę. Wybieraj sposód pytań zamkniętych jednokrotnego wyboru lub wielokrotnego wyboru, a także listy rozwijanej lub pytań otwartych.',
    },
    {
      title: 'Zdobądź szybko potrzebną ilość odpowiedzi',
      content:
        'Wypełnij kilka ankiet, żeby udostępnić swoją! Ten system zapewni, że Twoja ankieta uzyska potrzebną ilość odpowiedzi w szybkim czasie!',
    },
    {
      title: 'Wszystko w jednym miejscu',
      content:
        'W ANKIETUJ TO  stworzysz, uzyskasz odpowiedzi i przeanalizujesz wyniki swojej ankiety w jednym miejscu!',
    },
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimation, setIsAnimation] = useState(true);
  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      let index = textIndex + 1 === textcontent.length ? 0 : textIndex + 1;
      setTextIndex(index);
    }, 15000);
    return () => clearInterval(textChangeInterval);
  }, [textIndex]);
  return (
    <div className="wrapper">
      <div className="homeSliderContainer">
        <img src={gif} />
        <div
          className={isAnimation ? 'sliderText animation' : 'sliderText'}
          key={Math.floor(Math.random() * 100 + 1)}
        >
          <h1 className="titleH1">
            {textcontent[textIndex].title} <br />
          </h1>
          <h3>{textcontent[textIndex].content}</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
