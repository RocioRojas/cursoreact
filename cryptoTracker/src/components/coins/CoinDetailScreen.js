import {ThemeProvider} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from 'cryptoTracker/src/res/colors';
import Http from 'cryptoTracker/src/libs/http';

class CoinDetailScreen extends Component {
  state = {
    coin: {},
  };

  getSymbolIcon = (name) => {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };
  componentDidMount() {
    const {coin} = this.props.route.params;
    this.props.navigation.setOptions({title: coin.symbol});
    this.setState({coin});
  }
  render() {
    const {coin} = this.state;
    console.log('Obteniendo coins', coin);
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image
            style={styles.iconImg}
            source={{uri: this.getSymbolIcon(coin.name)}}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  iconImg: {
    height: 25,
    width: 25,
  },
  subHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
});
export default CoinDetailScreen;
