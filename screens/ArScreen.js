import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class ArScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://trekkify.it/app/index.html'}}
        style={{marginTop: 20}}
      />
    );
  }
}
