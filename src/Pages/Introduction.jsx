import React from "react";
import { bounceInDown, bounceInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";
import Logo from "../Pictures/logo.svg";
import "./Introduction.scss";

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

const LoveDiv = styled.div`
  animation: 5s ${bounceInDownAnimation};
`;
const FromDiv = styled.div`
  animation: 1s ${bounceInLeftAnimation};
`;
const ZeroDiv = styled.div`
  animation: 1.5s ${bounceInLeftAnimation};
`;
const ToDiv = styled.div`
  animation: 2s ${bounceInLeftAnimation};
`;
const HeroDiv = styled.div`
  animation: 2.5s ${bounceInLeftAnimation};
`;

function Introduction() {
  return (
    <div className="introduction-container">
      <div className="introduction-logo">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="introduction-text-container">
        <LoveDiv>
          <h1 className="introduction-text-love">LOVE</h1>
        </LoveDiv>
        <div className="introduction-text">
          <FromDiv>
            <h1 className="introduction-text-from">From</h1>
          </FromDiv>
          <ZeroDiv>
            <h1 className="introduction-text-zero">Zero</h1>
          </ZeroDiv>
          <ToDiv>
            <h1 className="introduction-text-to">To</h1>
          </ToDiv>
          <div className="introduction-text-hero-container">
            <HeroDiv>
              <h1 className="introduction-text-hero">Hero</h1>
            </HeroDiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
