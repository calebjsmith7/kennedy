import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Lowermenu from './components/Lowermenu';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
            <div>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/services' component={Services} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
            </div>
          <Lowermenu />
        </div>
      </Router>
    );
  }
}

export default App;
