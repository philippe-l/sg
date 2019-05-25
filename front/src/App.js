import React from 'react';
import './App.css';
import InstantPiCamera from './components/InstantPiCamera';
import TempAndHumidity from './components/TempAndHumidity';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1>My super green monitoring app</h1>
            <InstantPiCamera data-test="InstantPiCamera" />
            <TempAndHumidity />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
