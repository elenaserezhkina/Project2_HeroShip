import React from "react";
import "./HeroInfo.scss";
import Yes from "../../Pictures/like-button.svg";
import No from "../../Pictures/dislike-button.svg";
import SideA from "./SideA";
import SideB from "./SideB";
import ReactCardFlip from "react-card-flip";

class HeroInfo extends React.Component {
  constructor(props) {
    super(props);
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
        <div className="scene scene-card">
          <div className="info-wrapper">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="vertical"
            >
              <SideA
                changeCard={this.handleClick}
                hero={this.props.hero}
              ></SideA>

              <SideB
                changeCard={this.handleClick}
                hero={this.props.hero}
              ></SideB>
            </ReactCardFlip>

            <div className="like-buttons">
              <img
                src={No}
                alt="no"
                className="button-no"
                onClick={this.props.onReject}
              ></img>
              <img
                src={Yes}
                alt="yes"
                className="button-yes"
                onClick={this.props.onAccept}
              ></img>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroInfo;
