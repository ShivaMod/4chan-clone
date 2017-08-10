// npm packages
import React, { Component } from "react";
import { Card, Header } from "semantic-ui-react";
import PropTypes from "prop-types";

// our stuff
import "../../assets/css/AnnouncementBox.css";

class AnnouncementBox extends Component {
  static defaultProps = {
    /** The header text for this box. */
    header: null,
    /** The actual content of what your announcement is. */
    content: null
  };

  static propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired
  };

  render() {
    const { header, content } = this.props;
    return (
      <div className="AnnouncementBoxWrapper">
        <Card centered style={{ width: "50%" }}>
          <div className="AnnouncementBoxHeader">
            <Header as="h2">
              {header}
            </Header>
          </div>
          <div className="AnnouncementBoxContent">
            {content}
          </div>
        </Card>
      </div>
    );
  }
}

export default AnnouncementBox;
