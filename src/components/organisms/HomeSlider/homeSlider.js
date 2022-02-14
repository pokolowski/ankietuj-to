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
    <img src={gif} />
    <div className="sliderText">Twórz ankiety już teraz</div>
  </div>
);

export default HomeSlider;
