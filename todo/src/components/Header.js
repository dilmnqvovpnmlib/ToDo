import React from 'react';
import { 
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Create from './Create'
import List from './List'
import Top from './Top'
import Update from './Update'

class Header extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">ToDo管理</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/list" component={List}>一覧</Nav.Link>
              <Nav.Link href="/create" component={Create}>新規作成</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <Switch>
            <Route path="/create">
              <Create></Create>
						</Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/update">
              <Update />
            </Route>
            <Route path="/">
              <Top />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header