import React from 'react';
import { StatusBar } from 'react-native';

import { Main } from './src/components/Main';

export default class App extends React.Component {
  render() {    
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
        <Main />
      </>
    );
  }
}