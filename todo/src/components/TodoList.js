import React from 'react';
import { Button, Modal } from 'react-bootstrap'


class TodoList extends React.Component {
	constructor() {
		super()
		this.state = {
			showUpdateModal: false,
			showDeleteModal: false,
			deleteId: '',
			deleteTitle: '',
		}
		this.UPDATE_CODE = 0
		this.DELETE_CODE = 1
		this.mockUrl = 'http://localhost:3001/todos/'
		this.closeModal = this.closeModal.bind(this)

		this.openDeleteModal = this.openDeleteModal.bind(this)
		this.deleteTask = this.deleteTask.bind(this)
		this.delete = this.delete.bind(this)
	}

	openUpdateModal() {
		this.setState({ showUpdateModal: true })
	}

	closeModal(type) {
		if (type===this.UPDATE_CODE) {
			this.setState({ showUpdateModal: false })
		} else if (type===this.DELETE_CODE) {
			this.setState({ showDeleteModal: false })
		}
	}

	openDeleteModal(id, title) {
		this.setState({
			showDeleteModal: true,
			deleteId: id,
			deleteTitle: title,
		});
	}
	
	deleteTask(taskId) {
    fetch(this.mockUrl+taskId, {
      method: 'DELETE'
		})
		.then(() => {
			window.location.reload()
		})
    .catch(error => {
			console.error(error);
		});
  }

	delete() {
		this.deleteTask(this.state.deleteId)
		this.setState({ showDeleteModal: false })
	}

	renderTable(data) {
		console.log(data.todo.todos);
		var rows = data.todo.todos.map(item => 
			<tr key={ item.id }>
				<td>{ item.id }</td>
				<td>{ item.title }</td>
				<td>{ item.status }</td>
				<td>{ item.user }</td>
				<td>
					<Button variant="success" onClick={() => this.openUpdateModal()}>編集</Button>
					<span>&nbsp;</span>
					<Button variant="danger" onClick={() => this.openDeleteModal(item.id, item.title)}>削除</Button>

					<Modal show={this.state.showUpdateModal} onHide={() => this.closeModal(this.UPDATE_CODE)} style={{textAlign: "left"}}>
						<Modal.Header closeButton>
							<Modal.Title>Todo編集画面</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<h3>test test</h3>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.update}>はい</Button>
							<Button onClick={() => this.closeModal(this.UPDATE_CODE)}>いいえ</Button>
						</Modal.Footer>
					</Modal>
					<Modal show={this.state.showDeleteModal} onHide={() => this.closeModal(this.DELETE_CODE)}>
						<Modal.Header closeButton>
							<Modal.Title>Todo削除画面</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<h3>{this.state.deleteId} {this.state.deleteTitle}</h3>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.delete}>はい</Button>
							<Button onClick={() => this.closeModal(this.DELETE_CODE)}>いいえ</Button>
						</Modal.Footer>
					</Modal>
				</td>
			</tr>
		)

		return (
			<table  border="1" >
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル </th>
						<th>状態</th>
						<th>作成者</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{ rows }
				</tbody>
			</table>
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