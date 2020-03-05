import React from "react";
import "./HeroInfo.scss";
import Header from "../Header/HeaderNavigation";
import Yes from "../../Pictures/like-button.svg";
import No from "../../Pictures/dislike-button.svg";
import SideA from "./SideA";
import SideB from "./SideB";
import ReactCardFlip from "react-card-flip";

class HeroInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="scene scene-card">
          <div className="info-wrapper">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="vertical"
            >
              <SideA changeCard={this.handleClick}></SideA>

              <SideB changeCard={this.handleClick}></SideB>
            </ReactCardFlip>

            <div className="like-buttons">
              <img src={No} alt="no" className="button-no"></img>
              <img src={Yes} alt="yes" className="button-yes"></img>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroInfo;
