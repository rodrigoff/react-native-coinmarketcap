import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Content, Spinner, List } from "native-base";

import FetchCoinData from "../actions/FetchCoinData";
import CoinCard from "./CoinCard";

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100
  }
});

const { contentContainer } = styles;

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {}

  render() {
    const { crypto } = this.props;
    if (crypto.isFetching) {
      return (
        <Content>
          <Spinner color="blue" />
        </Content>
      );
    }

    return (
      <Content>
        <List style={contentContainer}>
          {crypto.data.map(coin => (
            <CoinCard
              key={coin.name}
              coinName={coin.name}
              symbol={coin.symbol}
              priceUsd={coin.price_usd}
              percentChange24h={coin.percent_change_24h}
              percentChange7d={coin.percent_change_7d}
            />
          ))}
        </List>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
