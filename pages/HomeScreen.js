import React, {Component} from 'react';

import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {Form, Label, Input, Item} from 'native-base';

export default class PageOne extends Component {
  state = {text: ''};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Sign In</Text>

        <Form style={{marginTop: 60}}>
          <Label style={{fontSize: 14}}>Username</Label>
          <Item stackedLabel last>
            <Input
              style={styles.InputStyle}
              value={this.state.text}
              onChangeText={text => this.setState({text})}
              placeholder="Type Here.."
            />
          </Item>

          <Label style={{fontSize: 14}}>Password</Label>
          <Item stackedLabel last>
            <Input
              style={styles.InputStyle}
              placeholder="Type Here.."
              secureTextEntry={true}
            />
          </Item>
        </Form>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={this.onPressNext.bind(this)}>
          <Text style={styles.textColor}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressNext() {
    Actions.PageTwo({data: this.state.text});
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },

  textColor: {
    color: '#fff',
  },

  btnContainer: {
    backgroundColor: '#0abde3',

    padding: 20,

    borderRadius: 5,
    marginTop: 20,
  },
  InputStyle: {
    fontSize: 20,
    // borderColor: '#000',
    borderWidth: 2,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
};
