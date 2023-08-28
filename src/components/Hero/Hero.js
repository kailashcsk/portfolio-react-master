import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Kailash</h1>
            <h5>Software Engineer</h5>
            <p>
              I am deeply passionate about crafting responsive web applications that deliver exceptional user experiences, fostering positive global impact
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/346989450_221026647310990_7341704043001810279_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=i7DoVzQiGzAAX8yaClC&_nc_ht=scontent-ord5-2.xx&oh=00_AfAQy7x0Ru4dfkB7xkqRmGldiA95hKN1djI_bfwLZvo8KA&oe=64F0E87F"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
