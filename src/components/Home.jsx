import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function Home() {
  return (
    <Container>
      <TravelSpace
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 , transition: 'easeIn'}}
        exit={{ x: "-100vw", transition: "easeOut" }}
        transition={{ type: "tween", delay: 0.3, duration:0.3 }}
      >
        <WriteUp>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </WriteUp>

        <Explore>
          <Link to="/destination">
            <div className="circle">
              <h2>Explore</h2>
            </div>
          </Link>
        </Explore>
      </TravelSpace>
    </Container>
  );
}

export default Home;

const Container = styled.section`
  position: relative;
  color: #fff;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background: url("/assets/home/background-home-desktop.jpg") no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;


  @media only screen and (min-width: 765px) and (max-width: 1000px) {
    height: 100vh;
    width: 100vw;
    overflow: unset;
    background: url("/assets/home/background-home-tablet.jpg") no-repeat;
    background-size: 100% 100%;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1150px) {
    height: 150vh;
  }
  @media only screen and (max-width: 765px) {
    background: url("/assets/home/background-home-mobile.jpg") no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    
  }
`;

const TravelSpace = styled(motion.div)`
  position: relative;
  padding-top: 20rem;
  margin-left: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    padding-top: 12rem;
    margin-left: 140px;
    margin-right: 140px;
    text-align: center;
  }

  @media only screen and (max-width: 765px){
    display: flex;
    flex-direction: column;
    padding-top: 7rem;
    margin: 0 1.5rem 1.5rem;
    text-align: center;
  }
`;

const WriteUp = styled.div`
  max-width: 450px;

  span {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 33.6px;
    letter-spacing: 4.76px;
  }

  h1 {
    margin-top: 24px;
    font-family: "Bellefair", serif;
    font-weight: 400;
    font-size: 150px;
    line-height: 171.9px;
    text-transform: uppercase;
  }

  p {
    margin-top: 24px;
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
      color: #d0d6f9;
    }
    h1 {
      margin-top: 20px;
      line-height: 150px;
      text-transform: uppercase;
    }

    p {
      margin-top: 20px;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: #d0d6f9;
    }
  }

  @media only screen and (max-width: 765px) {
    span {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 2.7px;
      color: #d0d6f9;
    }

    h1 {
      margin-top: 1rem;
      font-size: 80px;
      line-height: 100px;
      text-align: center;
    }

    p {
      margin-top: 1rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      color: #d0d6f9;
    }
  }
`;

const Explore = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-right: 10rem;

  .circle {
    height: 400px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    h2 {
      height: 275px;
      display: flex;
      padding: auto;
      text-align: center;
      width: 275px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      color: #0b0d17;
      font-family: "Bellefair", serif;
      font-size: 32px;
      font-weight: 400;
      line-height: 36.67px;
      letter-spacing: 2px;
      background: #fff;
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    margin-right: unset;

    .circle {
      height: 300px;
      width: 300px;
      margin-top: 1.3rem;

      :hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      h2 {
        height: 275px;
        width: 275px;
        border-radius: 100%;
        line-height: 37px;
      }
    }
  }

  @media only screen and (max-width: 765px) {
    margin-right: unset;
    .circle {
      width: 150px;
      height: 150px;
      margin-top: 5.0625rem;

      h2 {
        width: 150px;
        height: 150px;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        border-radius: 100%;
      }
    }
  }
`;
