import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data.json";
import { motion } from "framer-motion";

function Crew() {
  const [people] = useState(data.crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = people[value];
  console.log(people);
  return (
    <Container>
      <CrewSpace
        initial={{ x: "500" }}
        animate={{ x: 0, transition: "easeIn" }}
        exit={{ x: "-100vw", transition: "easeOut" }}
        transition={{ type: "spring", delay: 0.7, duration: 0.3 }}
      >
        <h1>
          <span>02</span>meet your crew
        </h1>
        <Arrange>
          <Left>
            <h2>{role}</h2>
            <h3>{name}</h3>
            <p>{bio}</p>
            <div className="map-circle">
            {people.map((item, index) => (
              <Circle
                key={index}
                onClick={() => {
                  setValue(index);
                }}
                isActive={value === index}
              >
                <div className="circle">
                  <div className="hidden">{item.name}</div>
                </div>
              </Circle>
              
            ))}
            </div>
          </Left>
          <Right>
            <Astro src={images.png} alt={name} />
          </Right>
        </Arrange>
      </CrewSpace>
    </Container>
  );
}

export default Crew;

const Container = styled.section`
  position: relative;
  min-height: 100%;
  height: 100vh;
  width: 100%;
  background: url("/assets/crew/background-crew-desktop.jpg") no-repeat center
    center;
  background-size: 100% 100%;
  padding-top: 212px;
  padding-left: 160px;
  padding-right: 130px;
  overflow: hidden;
  /* padding-bottom: 43rem; */

  h1 {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    font-weight: normal;

    span {
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      mix-blend-mode: normal;
      opacity: 0.25;
      margin-right: 1.5rem;
    }
  }

  @media only screen and (max-width: 765px) {
    position: relative;
    background: url("/assets/crew/background-crew-mobile.jpg") no-repeat;
    background-size: 100% 100%;
    padding: 5.5rem 1rem 1rem 1rem;
    margin: unset;


    h1 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: center;

      span {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        margin-right: 1rem;
      }
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    height: 100%;
    /* max-height: 150vh; */
    background: url("/assets/crew/background-crew-tablet.jpg") no-repeat;
    background-size: 100% 100%;
    padding-top: unset;
    padding-left: unset;

    h1 {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
      padding-top: 8.5rem;

      span {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.25;
        padding-left: 4.5rem;
      }
    }
  }
`;

const CrewSpace = styled(motion.div)`


  @media only screen and (max-width: 765px) {
display: flex;
flex-direction: column;
  }
`;

const Arrange = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;


   @media only screen and (max-width: 765px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    position: relative;
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-direction: column;
  }
`;

const Left = styled.div`
  margin-top: 130px;
  h2 {
    font-family: "Bellefair", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    text-transform: uppercase;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  h3 {
    margin-top: 1rem;
    font-family: "Bellefair", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;
  }

  p {
    margin-top: 2rem;
    width: 450px;
    font-family: "Barlow", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #d0d6f9;
  }

  @media only screen and (max-width: 765px) {
    margin-top: unset;

    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
    }

    h3 {
      margin-top: 0.5rem;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }

    p {
      margin-top: 1rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      max-width: 380px;
    }

    .map-circle {
      position: absolute;
      top:21rem;
      right: 40%;
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    text-align: center;
    margin-top: 3.8rem;

    h2 {
      font-size: 24px;
      line-height: 28px;
    }

    h3 {
      font-size: 40px;
      line-height: 46px;
      margin-top: 0.5rem;
    }

    p {
      margin-top: 0.7rem;
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

const Right = styled.div`
  @media only screen and (max-width: 765px) {
    display: flex;
    justify-content: center;
    position: relative;
    height: 223px;
    width: 20.4rem;
    border-bottom: 1px solid #383b4b;
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    position: relative;
    height: 600px;
    width: 590px;
    padding-bottom: 1px;
  }
`;

const Astro = styled.img`
  position: absolute;
  max-width: 100%;
  min-width: 450px;
  max-height: 750px;
  height: 75%;
  /* top: 20px; */
  right: 150px;
  bottom: 0;

  @media only screen and (max-width: 765px) {
    position: absolute;
    max-width: 100%;
    min-width: 100px;
    max-height: 100%;
    display: flex;
    justify-content: center;
    bottom: 0;
    top: 63%;
    right: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    position: relative;
    max-width: 100%;
    min-width: 100px;
    max-height: 600px;
    max-inline-size: auto;
    block-size: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: unset;
  }
`;

const Circle = styled.div`
  display: inline-block;
  margin-top: 35px;
  margin-right: 25px;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background: rgba(255, 255, 255, 0.17);
  mix-blend-mode: normal;
  /* opacity: 0.17; */
  position: relative;
  cursor: pointer;

  .circle {
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.isActive ? "#fff" : "transparent")};
    opacity: 1;
    border-radius: 100%;
  }

  .hidden {
    visibility: hidden;
  }

  @media only screen and (max-width: 765px) {
    margin: unset;
    width: 10px;
    height: 10px;
    margin-left: .9rem;
    .circle {
    }
  }
`;
