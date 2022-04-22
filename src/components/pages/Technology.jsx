import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../../data.json'
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function Technology() {
  const [tech] = useState(data.technology);
  const [value, setValue] = useState(0)
  const {name, images, description} = tech[value]

  const isResponsive = useMediaQuery({query: '(max-width: 980px)'})


  return (
    <Container>
      {isResponsive ? (
        <>
          <TechnologySpace
            initial={{ x: "-500" }}
            animate={{ x: 0, transition: "easeIn" }}
            exit={{ x: "10vw", transition: "easeIn" }}
            transition={{ type: "tween", delay: 0.3, duration: 0.3 }}
          >
            <Top>
              <h1>
                <span>03</span>space launch 101
              </h1>
            </Top>
            <Align>
              <TopImage>
                <div className="image">
                  <img src={images.landscape} alt="images" />
                </div>
              </TopImage>
              <Left>
                <Number>
                  <div className="">
                    {tech.map((item, index) => (
                      <Circle
                        key={index}
                        onClick={() => {
                          setValue(index);
                        }}
                        isActive={index === value}
                      >
                        <div
                          className={'circle'}
                        >
                          <div className={`${ index === value ? "active" : ""}`}>
                            <div className="text">
                              {index + 1}
                            </div>
                            </div>
                        </div>
                      </Circle>
                    ))}
                  </div>
                </Number>
                <Terminology>
                  <h2>the terminology...</h2>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </Terminology>
              </Left>
            </Align>
          </TechnologySpace>
        </>
      ) : (
        <>
          <TechnologySpace
            initial={{ x: "-500" }}
            animate={{ x: 0, transition: "easeIn" }}
            exit={{ x: "10vw", transition: "easeIn" }}
            transition={{ type: "tween", delay: 0.3, duration: 0.3 }}
          >
            <Top>
              <h1>
                <span>03</span>space launch 101
              </h1>
            </Top>
            <Align>
              <Left>
                <Number>
                  <div className="">
                    {tech.map((item, index) => (
                      <Circle
                        key={index}
                        onClick={() => {
                          setValue(index);
                        }}
                        isActive={index === value}
                      >
                        <div
                          className={`circle ${
                            index === value ? "active" : ""
                          }`}
                        >
                          <div className="text">{index + 1}</div>
                        </div>
                      </Circle>
                    ))}
                  </div>
                </Number>
                <Terminology>
                  <h2>the terminology...</h2>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </Terminology>
              </Left>
              <Right>
                <div className="image">
                  <img src={images.portrait} alt="images" />
                </div>
              </Right>
            </Align>
          </TechnologySpace>
        </>
      )}
    </Container>
  );
}

export default Technology

const Container = styled.section`
  height: 100vh;
  width: 100%;
  background: url("/assets/technology/background-technology-desktop.jpg")
    no-repeat;
  background-size: 100% 100%;
  

  @media only screen and (max-width: 765px) {
    background: url("/assets/technology/background-technology-mobile.jpg") no-repeat;
    min-height: 100vh;
    background-size: 100% 100%;
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    background: url("/assets/technology/background-technology-tablet.jpg")
      no-repeat;
    background-size: 100% 100%;
  }
`;

const Top = styled.section`
  padding-top: 14rem;
  padding-left: 12rem;
  h1 {
    font-family: "Barlow Condensed", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #fff;
    text-transform: uppercase;
    span {
      font-size: 28px;
      font-weight: 700px;
      line-height: 34px;
      letter-spacing: 4.725px;
      opacity: 0.25;
      mix-blend-mode: normal;
      margin-right: 1.2rem;
    }
  }

  @media only screen and (max-width: 765px) {
    padding: unset;
    padding-top: 5.5rem;
    text-align: center;

    h1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;

      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    padding: unset;

    h1 {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
      padding-top: 8.5rem;
      font-weight: 400;

      span {
        padding-left: 5rem;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
        margin-right: 1rem;
      }
    }
  }
`;



const TechnologySpace = styled(motion.div)`
  

`;

const TopImage = styled.div`
position: relative;
margin-top: 3.75rem;
  .image {
    width: 100vw;
    height: 330px;
  }

  img{
    width: 100%;
    height: 100%;
  }

    @media only screen and (max-width: 765px) {
      margin-top: 2rem;
      .image{
        height: 180px;
      
      }
    
    }
`;

const Align = styled.article`
display: flex;
position: relative;


@media only screen and (min-width: 765px) and (max-width: 1200px) {
  display: flex;
  flex-direction: column;

}
@media only screen and (max-width: 765px){
  display: flex;
  flex-direction: column;

}
`; 

const Left = styled.section`
  padding-left: 12rem;
  padding-top: 8rem;
  display: flex;

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 3.5rem;
    padding-left: unset;
  }

  @media only screen and (max-width: 765px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 2rem;
    padding-left: unset;
  }
`;

const Right = styled.section`
  position: absolute;
  right: 0;

  .image {
    height: 32.5rem;
    width: 32rem;
    /* padding-bottom: 10px; */
    img {
      max-block-size: 100%;
      block-size: auto;
    }
  }
`;

const Number = styled.div`
  position: relative;
  cursor: pointer;

  .active {
    background: white;

    .text {
      color: black;
    }
  }

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 100%;

    .text {
      display: flex;
      align-items: center;
      font-size: 32px;
      font-weight: 400;
      font-family: "Bellefair";
      font-style: normal;
      justify-content: center;
      height: 80px;
      width: 80px;
      border: 1px solid white;
      border-radius: 100%;
      margin-bottom: 1.3rem;
    }

    :hover {
      opacity: 0.4;
    }
  }

  @media only screen and (max-width: 765px) {
    .circle {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;

      .active {
        background-color: #fff;
        opacity: 1;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        margin-right: 1rem;
      }

      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 18.24px;
        height: 40px;
        width: 40px;
        margin-right: 1rem;
        margin-bottom: 1.8rem;
      }
      :hover {
        opacity: 0.99;
      }
    }
  }
  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    .circle {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;

      .active {
        background-color: #fff;
        opacity: 1;
        height: 60px;
        width: 60px;
        border-radius: 100%;
        margin-right: 2rem;

        .text {
          color: black;
        }
      }

      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        line-height: 28px;
        height: 60px;
        width: 60px;
        margin-right: 2rem;
        margin-bottom: 1.3rem;
      }
      :hover {
        opacity: 0.99;
      }
    }
  }
`;

const Terminology = styled.div`
  padding-left: 5rem;

  h2 {
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    padding-top: 0.2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #d0d6f9;
  }

  h3 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    color: #ffffff;
    text-transform: uppercase;
    margin-top: 0.9rem;
  }

  p {
    margin-top: 1rem;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #d0d6f9;
    max-width: 500px;
  }

  @media only screen and (max-width: 765px) {
    padding-left: unset;

    h2 {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 2.3625px;
    }

    h3 {
      margin-top: 0.5rem;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }
    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      max-width: 330px;
    }
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    padding-left: unset;
    text-align: center;

    h2 {
      padding-top: 2.75rem;
    }

    h3 {
      margin-top: 1rem;
      font-size: 40px;
      line-height: 46px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

const Circle = styled.div`
  
    @media only screen and (min-width: 765px) and (max-width: 1200px) {
      display: inline-block;
      text-align: center;
    }

    @media only screen and (max-width: 765px){
      display: inline-block;
    }

`;