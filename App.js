import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import Store from "./src/Store";
import { Header, CryptoContainer } from "./src/components";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={StyleSheet.absoluteFill}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
