import React from 'react';
import { withRouter } from 'react-router';
import { Button, Form, Col, Row } from 'react-bootstrap'

import '../static/css/create.css';


class Create extends React.Component {
  constructor() {
    super()
    this.status = [
      {'label': '未着手', 'value': 'wating'},
      {'label': '進行中', 'value': 'doing'},
      {'label': '完了', 'value': 'done'}
    ]

    this.state = {
      title: '',
      user: '',
      status: this.status[0].label,
    }

    this.mockUrl = 'http://localhost:3001/todos/'
    this.handleChange = this.handleChange.bind(this)
    this.postTodos = this.postTodos.bind(this)
  }

  handleToAboutPage = () => {
    this.props.history.push('/list')
  }

  postTodos() {
    if (this.state.value !== '') {
      fetch(this.mockUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          user: this.state.user,
          status: this.state.status,
        })
      })
      .then(() => {
        this.handleToAboutPage()
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  handleChange(event) {
    if (event.target.id === 'title') {
      this.setState({title: event.target.value});
    } else if (event.target.id === 'user') {
      this.setState({user: event.target.value});
    } else if (event.target.id === 'status') {
      this.setState({status: event.target.value});
    }
  }

  render() {
    return(
    <div>
			<br></br>
      <div style={{textAlign: "center"}}>
        <h2>Todo新規作成画面</h2>
        <form>
          <ul>
            <li>
              <label>Todo名</label>
              <input id="title" type="text" value={this.state.title} onChange={this.handleChange} style={{width: "200px"}} />
            </li>
            <li>
              <label>作成者</label>
              <input id="user" type="text" value={this.state.user} onChange={this.handleChange} />
            </li>
            <li>
            <label style={{display:"inline-flex"}}>状況</label>
            <select id="status" value={this.state.value} onChange={this.handleChange}>
              {this.status.map(status => <option value={status.label}>{status.label}</option>)}
            </select>
            </li>
          </ul>
          <Button onClick={this.postTodos} size="lg">作成</Button>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(Create)