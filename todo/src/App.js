import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import Header from './components/Header'

class App extends React.Component {
  constructor() {
    super()
    this.facebookUrl = 'https://facebook.github.io/react-native/movies.json'
    this.mockUrl = "http://localhost:3001/todos"
    this.state = {
      loading: false,
      movies: [],
      todos: [],
    }
  }

  componentWillMount() {
    // this.fetchFacebook()
    this.fetchMock()
  }

  fetchFacebook() {
    return fetch(this.facebookUrl)
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          loading: true,
          movies: responseJson.movies,
          title:  responseJson.title
        })
      )
      .catch(error => {
        console.error(error);
      });
  }

  fetchMock() {
    return fetch(this.mockUrl)
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          loading: true,
          todos: responseJson
        })
      )
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if(this.state.loading){
      console.log(this.state.todos)
      return(
        // facebook用
        // <div className="App-header">
        //   <p>{ this.state.title }</p>
        // </div>
        // mock用
        // <div className="App-header">
        //   <p>{ this.state.title }</p>
        // </div>
        <div>
          <Header></Header>
          <ul>
            {this.state.todos.map(data => {
              return <li key={ data.id }>{ data.title }</li>
            })}

            <TodoList todo={this.state}></TodoList>
          </ul>
        </div>
      );
    }else{
      return(
        <div>
          <Header></Header>
          <div className="App-header">
            <p>Loading...</p>
          </div>
        </div>
      );
    }
  }
}

export default App;