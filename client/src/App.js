import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const App = () => 
<React.Fragment>
  <Router>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </Router>
</React.Fragment>

export default App;