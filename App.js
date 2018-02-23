import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Header, Body, Title } from "native-base";
import { Provider } from "react-redux";

import Store from "./src/Store";
import { CryptoContainer } from "./src/components";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Container>
          <Header>
            <Body>
              <Title>Cryptocurrency App</Title>
            </Body>
          </Header>
          <CryptoContainer />
        </Container>
      </Provider>
    );
  }
}
