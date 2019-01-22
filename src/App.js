import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Container from './Component/Container';
import AppBar from './Component/AppBar';

import {RouteComponent} from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <AppBar />  
          <Container>
            {RouteComponent.map((route, index) => <Route key={index} {...route} /> )}
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
