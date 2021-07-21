import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Stocks from './components/Stocks';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
          <Footer />
        </Route>
        <Route path='/team'>
          <Team />
          <Footer />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
          <Footer />
        </Route>
        <Route path='/stocks'>
          <Stocks />
          <Footer />
        </Route>
        <Route path='/about'>
          <About />
          <Footer />
        </Route>
        <Route path='/contact'>
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
