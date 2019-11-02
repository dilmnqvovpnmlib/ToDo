import React from 'react';
import TodoList from './TodoList'


class List extends React.Component {
  constructor() {
    super()
    this.mockUrl = "http://localhost:3001/todos"
    this.state = {
      loading: false,
      todos: [],
    }
	}

	componentWillMount() {
		this.fetchMock()
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
				return(
					<div>
						<TodoList todo={this.state}></TodoList>
					</div>
				);
			}else{
				return(
					<div>
						<div className="App-header">
							<p>Loading...</p>
						</div>
					</div>
				);
			}
  }
}

export default List