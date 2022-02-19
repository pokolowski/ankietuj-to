import React from 'react';
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
const HomeSlider = () => (
  <div class="wrapper">
    <div className="homeSliderContainer">
      <img src={gif} />
      <div className="sliderText">
        <h1>
          Twórz ankiety już teraz <br />
        </h1>
        <h3>Skorzystaj z naszych szablonów i stwórz swoją własną ankietę</h3>
      </div>
    </div>
  </div>
);

export default HomeSlider;
