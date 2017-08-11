// npm packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Image, Header } from "semantic-ui-react";

// our stuff
import homePic from "../../assets/img/home_pic.png";
import AnnouncementBox from "../../components/AnnouncementBox";
import CommonBox from "../../components/CommonBox";
import { HomeInfo } from "./info";
import { fetchBoards } from "../../actions/boardsActions";
import "../../assets/css/Home.css";

const ListOfBoards = ({ boards }) => {
  return (
    <div>
      {boards.map((board, i) =>
        <li key={i}>
          {board.name}
        </li>
      )}
    </div>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    props.fetchBoards();
  }
  render() {
    const { boards } = this.props;
    return (
      <Grid id="homePage" className="home">
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
        <Grid.Row id="threads">
          <Grid.Column>
            <CommonBox header="Popular Threads">
              <p>Threads go here</p>
            </CommonBox>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="stats">
          <Grid.Column>
            <CommonBox header="Stats">
              <Grid centered container>
                <Grid.Row centered columns={4}>
                  <Grid.Column>
                    <b>Total Posts:</b>2,562,836,246
                  </Grid.Column>
                  <Grid.Column>
                    <b>Current Users:</b>209,248
                  </Grid.Column>
                  <Grid.Column>
                    <b>Active Content:</b>1380 GB
                  </Grid.Column>
                </Grid.Row>
              </Grid>
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
