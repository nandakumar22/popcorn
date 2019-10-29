import React, {Component} from 'react';

import {Text, View} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class PageTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtStyle}>{'Hi!!!! ' + this.props.data}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },
  txtStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
};
