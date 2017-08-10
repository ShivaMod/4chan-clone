// npm packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Image } from "semantic-ui-react";

// our stuff
import homePic from "../../assets/img/home_pic.png";
import AnnouncementBox from "../../components/AnnouncementBox";
import CommonBox from "../../components/CommonBox";
import { HomeInfo } from "./info";
import { fetchBoards } from "../../actions/boardsActions";
import "../../assets/css/Home.css";

const ListOfBoards = ({ boards }) => {
  const listItems = boards.map((board, i) =>
    <li key={i}>
      {board.name}
    </li>
  );
  return (
    <div>
      {listItems}
    </div>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchBoards();
  }
  render() {
    console.dir(this.props);
    const { boards } = this.props;
    return (
      <Grid id="homePage">
        <Grid.Row id="homeTop" columns={1}>
          <Grid.Column>
            <Image src={homePic} centered />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="announcement" columns={1}>
          <Grid.Column>
            <AnnouncementBox
              header="What is 4chan?"
              content={HomeInfo.homeAnnouncement}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="boards">
          <Grid.Column>
            <CommonBox header="Boards">
              {boards && <ListOfBoards boards={boards} />}
            </CommonBox>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards.boards,
  boardsPending: state.boards.pending
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBoards
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
