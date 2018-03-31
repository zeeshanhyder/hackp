import React, { Component } from "react";

import { Container } from "../components/Container";
import { SampleText } from '../components/Text';

class Home extends Component {
  render() {
    return (
      <Container>
        <SampleText text="Test" />
      </Container>
    );
  }
}

export default Home;
