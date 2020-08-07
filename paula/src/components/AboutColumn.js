import React from "react";
import "../styles/components/aboutColumn.css";

class AboutColumn extends React.Component {
  render() {
    return (
      <div className="aboutColumn">
        <div className="aboutColumn__icon">
          <img src={this.props.data.icon} alt="data icon" />
        </div>
        <div className="aboutColumn__title">
          <h2>{this.props.data.title}</h2>
        </div>
        <div className="aboutColumn__description">
          <p>{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}

export default AboutColumn;
