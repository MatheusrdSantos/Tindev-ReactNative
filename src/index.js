/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View,
  Text,
  StatusBar,
  YellowBox
} from 'react-native';
import Routes from './routes';

export default function App(){
  YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
  ]);
  return (
    <Routes/>
  );
};
