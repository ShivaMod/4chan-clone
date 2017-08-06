// npm packages
import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

// our stuff
import homePic from "../../assets/img/home_pic.png";
import AnnouncementBox from "../../components/AnnouncementBox";
import CommonBox from "../../components/CommonBox";
import { HomeInfo } from "./info";
import "../../assets/css/Home.css";

const ListOfBoards = ({ boards }) => {
  const listItems = boards.map((board, i) =>
    <li key={i}>
      {board.name}
    </li>
  );
  return <div>{listItems}</div>;
};

class Home extends Component {
  state = {
    boards: null
  };
  componentDidMount() {
    fetch("/api/boards").then(res => res.json()).then(boards => {
      this.setState({ boards });
    });
  }
  render() {
    const { boards } = this.state;
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

export default Home;
