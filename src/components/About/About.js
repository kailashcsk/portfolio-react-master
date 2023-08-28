import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Kailash</strong>, an enthusiastic web developer dedicated to crafting full-stack web applications that seamlessly blend functionality with intuitive, captivating design. My journey as a software engineer is defined by a relentless pursuit of knowledge and a deep-seated passion for collaborative growth. Currently pursuing a <strong>Master's in Computer Science</strong> at the Illinois Institute of Technology, Chicago, I bring a wealth of experience from my tenure as a Frontend Developer at Cognizant. My portfolio is a testament to my commitment to excellence, featuring a collection of projects that showcase my prowess in creating immersive and visually striking digital experiences. I thrive on challenges and view them as stepping stones for continuous advancement. As I gaze ahead, I am excited about the limitless opportunities the future has in store for my evolution as a software engineer.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
