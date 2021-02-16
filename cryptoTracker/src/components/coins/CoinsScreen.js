import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import Http from 'cryptoTracker/src/libs/http';
import CoinsItem from './CoinsItem';
import colors from 'cryptoTracker/src/res/colors';
class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: false,
  };
  componentDidMount = async () => {
    this.setState({loading: true});
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({coins: res.data, loading: false});
  };

  handlePress = (coin) => {
    console.log('Acabo de presionar el boton');

    this.props.navigation.navigate('CoinDetail', {coin});
  };

  render() {
    const {coins, loading} = this.state;
    return (
      <View style={Styles.container}>
        {loading ? (
          <ActivityIndicator color="#fff" size="large" style={Styles.loader} />
        ) : null}
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 32,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 80,
  },
});

export default CoinsScreen;
