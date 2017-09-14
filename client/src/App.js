import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Container>
        <Register />
      </Container>
    );
  }
}

export default App;
