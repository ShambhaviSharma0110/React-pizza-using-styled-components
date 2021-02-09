import React, {useState} from 'react'
import {HeroContainer, HeroContent, HeroH1, HeroP,HeroItems,HeroBtn} from './HeroElements';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar/Sidebar';


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizzzzzzzaaaa Everrrrrr</HeroH1>
          <HeroP>Ready in 120 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero
