// npm packages
import React, { Component } from "react";
import { Card, Header } from "semantic-ui-react";
import PropTypes from "prop-types";

// our stuff
import "../../assets/css/CommonBox.css";

class CommonBox extends Component {
  static defaultProps = {
    /** The header text for this box. */
    header: null
  };

  static propTypes = {
    header: PropTypes.string.isRequired
  };

  render() {
    const { header, children } = this.props;
    return (
      <div className="CommonBoxWrapper">
        <Card centered style={{ width: "50%" }}>
          <div className="CommonBoxHeader">
            <Header as="h2">
              {header}
            </Header>
          </div>
          <div className="CommonBoxContent">
            {children}
          </div>
        </Card>
      </div>
    );
  }
}

export default CommonBox;
