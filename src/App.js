import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Play from './components/Play';
import NoPage from './components/NoPage';
import { Route, Switch} from 'react-router-dom';
import {Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/play' component={Play} />
        <Route component={NoPage} />
        
      </Switch>
    </Container>
  </>
)


export default App;
