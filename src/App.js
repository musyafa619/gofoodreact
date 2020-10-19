import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom"
import home from './containers/Home';
import Dashboard from './containers/Dashboard/dashboard';

class App extends Component {
console.log("mantap");
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div> 
    );
  }
}

export default App;
