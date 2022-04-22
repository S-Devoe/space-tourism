import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function Header() {
  const location = useLocation();
  // console.log(location.pathname);

  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle("show-nav")
  }

  return (
    <Container
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <Link to="/">
        <Logo src="/assets/logo.svg" alt="logo" />
      </Link>

      <Line></Line>
      <div className="menu-open" onClick={showNavBar}>
        <img src="./assets/shared/icon-hamburger.svg" alt="open" />
      </div>
      <Nav className="nav" ref={navRef}>
        <div className="menu-close" onClick={showNavBar}>
          <img src="./assets/shared/icon-close.svg" alt="close" />
        </div>
        <ul onClick={showNavBar}>
          <List
            // isActive={"/" === location.pathname}
            // isHover={"/" !== location.pathname} Mqt Method for the below code using props
            className={` ${"/" === location.pathname ? "underline" : ""}`}
          >
            <Link to="/">
              {" "}
              <span>00</span> Home
            </Link>
          </List>
          <List
            // isActive={"/destination" === location.pathname}
            // isHover={"/destination" !== location.pathname} Mqt Method for the below code using props
            className={` ${
              "/destination" === location.pathname ? "underline" : ""
            }`}
          >
            <Link to="/destination">
              <span>01</span> Destination
            </Link>
          </List>
          <List
            // isActive={"/crew" === location.pathname}
            // isHover={"/crew" !== location.pathname} Mqt Method for the below code using props
            className={` ${"/crew" === location.pathname ? "underline" : ""}`}
          >
            <Link to="/crew">
              {" "}
              <span>02</span> Crew
            </Link>
          </List>
          <List
            // isActive={"/technology" === location.pathname}
            // isHover={"/technology" !== location.pathname} Mqt Method for the below code using props
            className={` ${
              "/technology" === location.pathname ? "underline" : ""
            }`}
          >
            <Link to="/technology">
              {" "}
              <span>03</span> Technology
            </Link>
          </List>
        </ul>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled(motion.nav)`
  z-index: 11;
  margin-left: 55px;
  position: relative;
  /* display: none; */

  .menu-open{
    display: none;
  }

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    margin-left: 2rem;

    .menu-open{
      display: none;
    }
  }

  @media only screen and (max-width: 765px) {
    margin: unset;
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    .menu-open{
      position: absolute;
      display: block;
      right: 1.5rem;
      left: unset;
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 55px;
  top: 64px;
  cursor: pointer;

  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    top: 24px;
    left: 30px;
  }

  @media only screen and (max-width: 765px){
    position: relative;
    top: 0;
    left: 0;
  }
`;

const Line = styled.div`
  position: absolute;
  height: 1px;
  width: 473px;
  background: #fff;
  top: 88px;
  left: 167px;
  z-index: 1;
  opacity: 0.25;
  margin-left: 80px;
  mix-blend-mode: normal;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const Nav = styled.div`
  position: absolute;
  height: 96px;
  left: 610px;
  top: 45px;
  right: 10px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  .menu-close {
    display: none;
  }

  ul {
    display: flex;
    margin-top: 2.3rem;
    margin-left: 159px;
    text-decoration: none;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: 2.7px;
    z-index: 1;

    li {
      list-style-type: none;
      margin-right: 50px;
      text-transform: uppercase;
      padding-bottom: 2.25rem;
      cursor: pointer;

      :hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      }
    }
    .underline {
      bottom: 0;
      border-bottom: 3px solid #fff;
    }

    span {
      margin-right: 5px;
      font-weight: bold;
      font-family: "Barlow Condensed", sans-serif;
    }
  }

  @media only screen and (max-width: 765px) {
    height: 100vh;
    width: 68%;
    left: unset;
    top: 0;
    right: 0;

    .menu-close {
      display: flex;
      justify-content: flex-end;
      padding-top: 2.1rem;
      padding-right: 1.5rem;
    }

    ul {
      margin: unset;
      margin-left: 2rem;
      margin-top: 4rem;
      display: flex;
      flex-direction: column;

      li {
        margin-right: unset;
        padding-bottom: 2rem;

        :hover {
          border-bottom: none;
        }
      }

      .underline {
        border: none;
      }
    }
  }
  @media only screen and (min-width: 765px) and (max-width: 1200px) {
    height: 96px;
    left: 25%;
    /* width: 450px; */
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu-close {
      display: none;
    }

    ul {
      margin-top: auto;
      margin-bottom: auto;
      margin-left: 2.2rem;
      margin-top: 1.9rem;
      display: flex;
      justify-content: center;
      font-family: "Barlow Condensed";
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;

      li {
        padding-bottom: 5px;
        padding-bottom: 10%;
      }
      span {
        display: none;
      }
    }
  }
`;

const List = styled.li`
  .underline {
    /* border-bottom: 3px solid #fff; */
  }

`;
