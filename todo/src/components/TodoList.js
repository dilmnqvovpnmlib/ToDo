import React from 'react';
import Table from 'react-bootstrap/Table'


class TodoList extends React.Component {

	renderTable(data) {
		console.log(data.todo.todos);
		var rows = data.todo.todos.map(item => 
			<tr key={ item.id }>
				<td>{ item.id }</td>
				<td>{ item.title }</td>
			</tr>
		)

		return (
			<Table striped bordered hover sise="sm">
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル </th>
					</tr>
				</thead>
				<tbody>
					{ rows }
				</tbody>
			</Table>
		)
	}

  render() {
		var data = this.props;

    return(
			<div>
				<br></br>
				<h2>Todo一覧</h2>
				{ this.renderTable(data) }
			</div>
    );
  }
}

export default TodoList