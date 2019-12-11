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

} from 'react-native';

const item = () => {
  return <TouchableHighlight underlayColor={'#000'} activeOpacity={0.8} style={{}} onPress={() => { }}>
    <View style={styles.itemBox}>
      <View style={styles.itemInner}>
        <View style={styles.avatar}>
          <Image source={require('./src/images/avatar-default.png')}
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

export default class App extends Component {
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
            renderItem={item}
          >
          </FlatList>
        </View>
        <View style={styles.tabBar}>
          <View style={styles.h50}></View>
          <TabBarIOS
            barTintColor="#f5f5f7"//背景颜色
            tintColor="#1aad19"//当前所选标签图标的颜色
            unselectedItemTintColor="#7a7e83"//未选标签图标的颜色
            unselectedTintColor="#808080"//未选定标签上的文字颜色
          >
            <TabBarIOS.Item
              title="微信"
              icon={require('./src/images/tabBar/wechat.png')}
              selectedIcon={require('./src/images/tabBar/wechat-active.png')}
              style={{width:25,height:25,backgroundColor:'#7a7e83'}}
              selected={false}
              badge={10}
              onPress={() => {
              }}>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="通讯录"
              icon={require('./src/images/tabBar/addressList.png')}
              selectedIcon={require('./src/images/tabBar/addressList-active.png')}
              style={{width:25,height:25,backgroundColor:'#7a7e83'}}
              selected={false}
              onPress={() => {
              }}>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="发现"
              icon={require('./src/images/tabBar/wechat.png')}
              selectedIcon={require('./src/images/tabBar/wechat-active.png')}
              style={{width:25,height:25,backgroundColor:'#7a7e83'}}
              selected={false}
              onPress={() => {
              }}>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="我"
              icon={require('./src/images/tabBar/me.png')}
              selectedIcon={require('./src/images/tabBar/me-active.png')}
              style={{width:25,height:25,backgroundColor:'#7a7e83'}}
              selected={false}
              onPress={() => {
              }}>
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height:'100%',
  },
  chatList:{
    paddingBottom: 50,
    height:'100%',
  },
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
  tabBar:{
    bottom:0,
  }
});
