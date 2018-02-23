import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Left, Body, Right, Thumbnail, Text } from "native-base";
import { images } from "../utils/CoinIcons";

const CoinCard = ({ symbol, coinName, priceUsd, percentChange24h, percentChange7d }) => {
  const percentChange24hStyle = percentChange24h < 0 ? styles.negativeChange : styles.positiveChange;
  const percentChange7dStyle = percentChange7d < 0 ? styles.negativeChange : styles.positiveChange;
  return <ListItem avatar>
      <Left>
        <Thumbnail source={{ uri: images[symbol] }} />
      </Left>
      <Body>
        <Text>
          {symbol} | {coinName}
        </Text>
        <Text style={percentChange24hStyle} note>
          24h: {percentChange24h} %
        </Text>
        <Text style={percentChange7dStyle} note>
          7d: {percentChange7d} %
        </Text>
      </Body>
      <Right>
        <Text note>
          $ {Number.parseFloat(priceUsd).toLocaleString(navigator.language, {
            currency: "USD",
            minimumFractionDigits: 2
          })}
        </Text>
      </Right>
    </ListItem>;
};

const styles = StyleSheet.create({
  positiveChange: {
    color: "green"
  },
  negativeChange: {
    color: "red"
  }
});

export default CoinCard;
