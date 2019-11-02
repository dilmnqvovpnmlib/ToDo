import React from 'react';
import Top from './Top'
import List from './List'
import Create from './Create'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Body extends React.Component {

  render() {
    return(
      <div>
				<Router>
          <Link to="/list"></Link>
          <Link to="/create"></Link>
          <Link to="/"></Link>
					<Switch>
            <Route path="/list">
              <List></List>
						</Route>
            <Route path="/create">
              <Create></Create>
						</Route>
						<Route path="/">
              <Top></Top>
						</Route>
					</Switch>
				</Router>
      </div>
    );
  }
}

export default Body