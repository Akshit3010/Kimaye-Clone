import React from 'react';
import banner from './Images/banner.png';
import { Body, Bottom, Mid } from './Style';
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
const Grow = () => {
  return (
    <Body>
      <img src={banner} alt='' />
      <Mid>
        <h1>GROW WITH KIMAYE</h1>
        <p>Home / Archive by Category "Grow with Kimaye"</p>
        <pre>
          NUTRITION LIFESTYLE MANAGEMENT CHILD NUTRITION STORAGE & HANDELING
        </pre>
      </Mid>
      <Bottom>
        <LeftSide />
        <RightSide />
      </Bottom>
    </Body>
  );
};

export default Grow;
