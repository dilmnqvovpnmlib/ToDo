import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { withRouter } from "react-router";

class Top extends React.Component {
  handleToListPage = () => {
    this.props.history.push("/list");
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Todo管理アプリ</h1>
          <Button variant="primary" onClick={this.handleToListPage}>
            ログイン
          </Button>
        </Jumbotron>
      </div>
    );
  }
}

export default withRouter(Top);
