/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

import ChatItem from './ChatItem';
import TabBar from './TabBar';
import ChatDetails from './ChatDetails';

class ChatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatList}>
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
              { key: 'Jimmy1' },
              { key: 'Julie2' },
              { key: 'Jimmy3' },
              { key: 'Julie4' },
            ]}
            renderItem={ChatItem}
          >
          </FlatList>
        </View>
        <View style={styles.tabBar}>
          {TabBar()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: 40,
    height: '100%',
  },
  chatList: {
    paddingBottom: 50,
    height: '100%',
  },
  tabBar: {
    bottom: 0,
  }
});

export default class NavigatorIOSApp extends Component {
  _handleNavigationRequest() {
    this.refs.nav.push({
      component: App,
      title: 'Genius',
      passProps: { myProp: 'genius' },
    });
  }
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: ChatDetails,
          title: '微信',
        }}
        style={{
          flex: 1
        }}
      ></NavigatorIOS>
    )
  }
}