import React from 'react';
import { withRouter } from 'react-router';
import {Jumbotron, Button } from 'react-bootstrap'

class Top extends React.Component {
	handleToAboutPage = () => {
    this.props.history.push('/list')
  }
  render() {
		return(
			<div>
				<Jumbotron>
					<h1>Todo管理アプリ</h1>
					<Button variant="primary" onClick={this.handleToAboutPage}>
						ログイン
					</Button>
				</Jumbotron>
			</div>
		);
  }
}

export default withRouter(Top);