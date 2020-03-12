import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

import "../static/css/create.css";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.status = [
      { label: "未着手", value: "wating" },
      { label: "進行中", value: "doing" },
      { label: "完了", value: "done" }
    ];
    this.mockUrl = "http://localhost:3001/todos/";
    this.handleChange = this.handleChange.bind(this);
    this.updateTodos = this.updateTodos.bind(this);

    this.state = {
      id: this.props.location.state.item.id,
      title: this.props.location.state.item.title,
      user: this.props.location.state.item.user,
      status: this.props.location.state.item.status
    };
  }

  handleToListPage = () => this.props.history.push("/list");

  updateTodos(todoId) {
    if (
      this.state.title !== "" &&
      this.state.user !== "" &&
      this.state.status !== ""
    ) {
      fetch(this.mockUrl + todoId, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.state.title,
          user: this.state.user,
          status: this.state.status
        })
      })
        .then(() => {
          this.handleToListPage();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  handleChange(event) {
    if (event.target.id === "title") {
      this.setState({ title: event.target.value });
    } else if (event.target.id === "user") {
      this.setState({ user: event.target.value });
    } else if (event.target.id === "status") {
      this.setState({ status: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <h2>Todo編集画面</h2>
          <form>
            <ul>
              <li>
                <label>Todo名</label>
                <input
                  id="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                  style={{ width: "200px" }}
                />
              </li>
              <li>
                <label>作成者</label>
                <input
                  id="user"
                  type="text"
                  value={this.state.user}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <label style={{ display: "inline-flex" }}>状況</label>
                <select
                  id="status"
                  value={this.state.status}
                  onChange={this.handleChange}
                >
                  {this.status.map(status => (
                    <option value={status.label}>{status.label}</option>
                  ))}
                </select>
              </li>
              <Button onClick={() => this.updateTodos(this.state.id)} size="lg">
                編集
              </Button>
              <span>&nbsp;</span>
              <Button onClick={() => this.updateTodos(this.state.id)} size="lg">
                戻る
              </Button>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Update);
