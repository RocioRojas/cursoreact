import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class CoinsScreen extends Component {
  handlePress = () => {
    console.log('go to detail', this.props);
    this.props.navigation.navigate('CoinDetail');
  };
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.titleText}>Coins Screen</Text>
        <Pressable style={Styles.btn} onPress={this.handlePress}>
          <Text style={Styles.btnText}> Ir a detail </Text>
        </Pressable>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
});
export default CoinsScreen;
