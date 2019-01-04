/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,

} from 'react-native';

export default ChatItem = () => {
  return <TouchableHighlight underlayColor={'#000'} activeOpacity={0.8} style={{}} onPress={() => { }}>
    <View style={styles.itemBox}>
      <View style={styles.itemInner}>
        <View style={styles.avatar}>
          <Image source={require('../../images/avatar-default.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.info}>
          <View style={styles.infoTop}>
            <Text style={styles.name} numberOfLines={1}>群标题群标题群标题群标题</Text>
            <Text style={styles.time}>15:30</Text>
          </View>
          <View style={styles.infoBot}>
            <Text style={styles.message}>我怎么知道</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableHighlight>
}



const styles = StyleSheet.create({

  itemBox: {
    backgroundColor: '#fff',
  },
  itemInner: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  avatar: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  info: {
    flex: 1,
  },
  infoTop: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoBot: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontSize: 17,
    flex: 1,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  message: {
    fontSize: 13,
    color: '#888',
  },
});
 