import React from "react";
import { View, StatusBar, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={headerContainer}>
    <StatusBar barStyle="dark-content" />
      <Text style={header}>Cryptocurrency App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
    paddingBottom: 20
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
});

const { headerContainer, header } = styles;

export default Header;
