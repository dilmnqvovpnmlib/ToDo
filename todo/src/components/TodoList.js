import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import { withRouter } from 'react-router';


class TodoList extends React.Component {
	constructor() {
		super()
		this.state = {
			showUpdateModal: false,
			showDeleteModal: false,
			deleteId: '',
			deleteTitle: '',
			updateID: '',
			updateTitle: ''
		}
		this.UPDATE_CODE = 0
		this.DELETE_CODE = 1
		this.mockUrl = 'http://localhost:3001/todos/'
		this.closeModal = this.closeModal.bind(this)

		this.openDeleteModal = this.openDeleteModal.bind(this)
		this.deleteTask = this.deleteTask.bind(this)
		this.delete = this.delete.bind(this)
	}

	openUpdateModal(id, title) {
		this.setState({
			showUpdateModal: true,
			updateID: id,
			updateTitle: title
		})
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

	handleToUpdatePage = (item) => {
    this.props.history.push({
			pathname: '/update',
			state: {item: item}
		})
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
					<Button variant="success" onClick={() => this.handleToUpdatePage(item)}>編集</Button>
					<span>&nbsp;</span>
					<Button variant="danger" onClick={() => this.openDeleteModal(item.id, item.title)}>削除</Button>

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
			<table border="1" align="center">
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
				<h2 align="center">Todo一覧</h2>
				<div>
				{this.renderTable(data)}
				</div>
			</div>
    );
  }
}

export default withRouter(TodoList)