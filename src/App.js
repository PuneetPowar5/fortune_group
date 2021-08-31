import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Stocks from './components/Stocks';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
