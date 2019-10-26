import React from 'react';
import Table from 'react-bootstrap/Table'

const colors = ['Red','Orange','Yellow','Green','Blue','Violet'];

class TodoList extends React.Component {


	renderTable() {
		console.log(this.data)
    const rows = this.data.todos.map((id,titile) =>
      <tr key={id}>
        <td>{id}</td>
        <td>{titile}</td>
      </tr>
    );

    return (
      <table border='1' cellSpacing='0'>
         <thead>
            <tr>
               <th>Id</th>
               <th>Title</th>
            </tr>
         </thead>
         <tbody>
           {rows}
         </tbody> 
      </table>
    )
  }

  render() {
		const data = this.props
		console.log('helloooooooo', data.todos)
    return (
      <div>
        {this.renderTable()}
      </div>
    )
  }
}

export default TodoList