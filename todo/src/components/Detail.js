import React from 'react';

import '../static/css/create.css';


class Detail extends React.Component {
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
    this.updateTodos = this.updateTodos.bind(this)
  }

  handleToAboutPage = () => {
    this.props.history.push('/list')
  }

  updateTodos(todoId) {
    if (this.state.value !== '') {
      fetch(this.mockUrl + todoId, {
        method: 'Update',
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
      Hello
    </div>
    );
  }
}

export default Detail