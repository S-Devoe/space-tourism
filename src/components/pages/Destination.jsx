import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data.json";
import { motion } from "framer-motion";

function Destination() {
  const [planets] = useState(data);
  const planetDestination = planets.destinations;

  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } =
    planetDestination[value];

  return (
    <Container>
      <DestinationSpace
        initial={{ x: "500" }}
        animate={{ x: 0, transition: "easeIn" }}
        exit={{ x: "-100vw", transform: "easeOut" }}
        transition={{ type: "tween", delay: 0.3, duration: 0.3 }}
      >
        <ArrangeLeft>
          <h1>
            <span>01</span> Pick your destination
          </h1>
          <Solar className="image" src={images.png} alt={name} />
        </ArrangeLeft>
        <ArrangeRight>
          <RightContent>
            {planetDestination.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  setValue(index);
                }}
                isActive={value === index}
                isHover={value !== index}
              >
                {item.name}
              </Button>
            ))}

            <h2>{name}</h2>
            <p>{description}</p>
            <Line></Line>
            <BottomAR>
              <Distance>
                <span>avg. distance</span>
                {distance}
              </Distance>
              <Time>
                <span>est. travel time</span> {travel}
              </Time>
            </BottomAR>
          </RightContent>
        </ArrangeRight>
      </DestinationSpace>
    </Container>
  );
}

export default Destination;

const Container = styled.section`
  max-height: 100%;
  width: 100vw;
  color: white;
  position: relative;
  padding-top: 13rem;
  padding-left: 10rem;
  padding-right: 8rem;
  padding-bottom: 3.5rem;
  display: flex;
  gap: 10rem;
  background: url("/assets/destination/background-destination-desktop.jpg")
    no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    background: url("/assets/destination/background-destination-tablet.jpg")
      no-repeat;
    background-size: 100% 100%;
    height: 100vh;
  }

  @media only screen and (max-width: 765px) {
    background: url("/assets/destination/background-destination-mobile.jpg") no-repeat;
    background-size: cover;
    height: 100vh;
    max-width: 100vw;
    padding: 5.5rem 1.5rem 1rem;

  }
`;

const DestinationSpace = styled(motion.div)`
  display: flex;
  gap: 12rem;

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media only screen and (max-width: 765px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ArrangeLeft = styled.div`
  margin-left: 5rem;
  h1 {
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 4.725px;
    span {
      margin-right: 28px;
      font-size: 28px;
      font-weight: bold;
      line-height: 34px;
      letter-spacing: 4.725px;
      opacity: 0.25;
    }
  }

  @media only screen and (max-width: 765px) {
    margin-left: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;

      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        margin-right: 1rem;
      }
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    margin-left: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      position: relative;
      align-self: flex-start;
      margin-left: -5rem;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;

      span {
        font-weight: 700;
        opacity: 0.25;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }
    }
  }
`;

const ArrangeRight = styled.div`
  padding-right: 10rem;
  h2 {
    font-family: "Bellefair", serif;
    font-size: 100px;
    line-height: 115px;
    text-transform: uppercase;
    font-weight: normal;
  }

  p {
    font-family: "Barlow", sans-serif;
    font-weight: 18px;
    font-weight: normal;
    line-height: 32px;
    color: #d0d6f9;
    margin-top: 1rem;
    margin-bottom: 3rem;
    text-align: left;
  }

  @media only screen and (max-width: 765px) {
    padding-right: unset;

    h2 {
      font-weight: 400;
      font-size: 56px;
      line-height: 64px;
    }

    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      text-align: center;
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: unset;

    h2 {
      font-size: 80px;
      line-height: 92px;
      text-align: center;
      padding-top: 0.5rem;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: #d0d6f9;
    }
  }
`;

const RightContent = styled.div`
  text-align: center;
`;

const Solar = styled.img`
  margin-top: 5rem;
  height: 410px;
  width: 410px;

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    display: flex;
    margin-top: 2.97rem;
    width: 300px;
    height: 300px;
  }

  @media only screen and (max-width: 765px) {
    width: 170px;
    height: 170px;
    margin-top: 1.8rem;
    
  }
`;


const Button = styled.button`
  text-align: center;
  background: none;
  border: none;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  line-height: 2.7px;
  text-transform: uppercase;
  color: #d0d6f9;
  line-height: 19px;
  margin-right: 35px;
  padding-bottom: 0.8rem;
  cursor: pointer;
  margin-top: 4rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? "#fff" : "transparent")};

  :hover {
    border-bottom: 3px solid
      ${(props) =>
        props.isHover ? "rgba(255, 255, 255, .45)" : "transparent"};
  }


  @media only screen and (max-width: 765px) {
    
    padding-right: 1px;
    margin-right: 1rem;
    padding-bottom: 8px;
    margin-bottom: .8rem;
    margin-top: 1rem;
    gap: 1rem;
  }


  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    margin-top: 2rem;
    margin-left: 1rem;
    margin-bottom: 0;
  }
`;


const Line = styled.div`
  background-color: #383b4b;
  height: 1px;
  width: 100%;

  
`;

const BottomAR = styled.div`
  display: flex;
  margin-top: 0.8rem;
  gap: 4rem;

   @media only screen and (max-width: 765px) {
    flex-direction: column;
    margin-top: 1rem;
    gap: 1.4rem;

   }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

const Distance = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-family: "Bellefair", serif;
  font-size: 28px;
  line-height: 32px;

  span {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 14px;
    letter-spacing: 2.362px;
    color: #d0d6f9;
    line-height: 17px;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 765px) {
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 2.3625px;
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    margin-top: 20px;
  }
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Bellefair", serif;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;

  span {
    font-family: "Barlow Condensed", sans-serif;

    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #d0d6f9;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 765px) {
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 2.3625px;
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    margin-top: 20px;
  }
`;
