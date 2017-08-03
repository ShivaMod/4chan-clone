// npm packages
import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

// our stuff
import "../../assets/css/AnnouncementBox.css";

class AnnouncementBox extends Component {
  static defaultProps = {
    /**
     * If cookie name is set, you will be able to exit out of this announcement, aka ignore it.
     * To keep track of what announcement is ignored, supply a cookiename.
     */
    cookieName: null,
    /** The header text for this box. */
    header: null,
    /** The actual content of what your announcement is. */
    content: null
  };

  static propTypes = {
    cookieName: PropTypes.string,
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  };

  render() {
    const { cookieName, header, content } = this.props;
    return (
      <div className="AnnouncementBoxWrapper">
        <Panel
          header={
            <h2 className="AnnouncementBoxHeader">
              {header}
            </h2>
          }
        >
          <div className="AnnouncementBoxContent">
            >{content}
          </div>
        </Panel>
      </div>
    );
  }
}

export default AnnouncementBox;
