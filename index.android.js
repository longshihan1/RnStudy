/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import {StackNavigator,} from 'react-navigation';
import {
    BackAndroid,
    StatusBar,
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ListView,
    View
} from 'react-native';
import HomePage from './app/HomePage'
import ImageSample from './app/ImageSample'
import QQLogin from './app/QQLogin'
import ViewPageDemo from './app/ViewPageDemo'
import NieJu from './app/NieJu'
import XiDing from './app/XiDing'
import TabDemo from './app/TabDemo'
import XMGMain from './Component/XMGMain'

export default class TestDemo extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <XMGMain/>
        );
    }
}


AppRegistry.registerComponent("TestDemo", () => TestDemo, true);
