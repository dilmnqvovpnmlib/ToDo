import React from 'react';
import './App.css';
import Header from './components/Header'


class App extends React.Component {
  render() {
    return(
      <div>
        <Header></Header>
				{/* <Router>
          <Route exact path="/list" component={List} />
          <Route exact path="/create" component={Create} /> */}
          {/* <Route exact path="/" component={Top} /> */}
          {/* <Link to="/list"></Link>
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
					</Switch> */}
				{/* </Router> */}
      </div>
    );
  }
}

export default App;