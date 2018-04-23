import React, { Component } from 'react';
import Layout from '../src/Pages/Layout/Layout';
import {BrowserRouter ,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout/>
      </BrowserRouter>
      
    );
  }
}

export default App;
