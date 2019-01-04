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
  TabBarIOS,
} from 'react-native';

export default TabBar = () => {
  return <TabBarIOS
    barTintColor="#f5f5f7"//背景颜色
    tintColor="#1aad19"//当前所选标签图标的颜色
    unselectedItemTintColor="#7a7e83"//未选标签图标的颜色
    unselectedTintColor="#808080"//未选定标签上的文字颜色
  >
    <TabBarIOS.Item
      title="微信"
      icon={require('../../images/tabBar/wechat.png')}
      selectedIcon={require('../../images/tabBar/wechat-active.png')}
      style={{ width: 25, height: 25, backgroundColor: '#7a7e83' }}
      selected={false}
      badge={10}
      onPress={() => {
      }}>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      title="通讯录"
      icon={require('../../images/tabBar/addressList.png')}
      selectedIcon={require('../../images/tabBar/addressList-active.png')}
      style={{ width: 25, height: 25, backgroundColor: '#7a7e83' }}
      selected={false}
      onPress={() => {
      }}>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      title="发现"
      icon={require('../../images/tabBar/wechat.png')}
      selectedIcon={require('../../images/tabBar/wechat-active.png')}
      style={{ width: 25, height: 25, backgroundColor: '#7a7e83' }}
      selected={false}
      onPress={() => {
      }}>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      title="我"
      icon={require('../../images/tabBar/me.png')}
      selectedIcon={require('../../images/tabBar/me-active.png')}
      style={{ width: 25, height: 25, backgroundColor: '#7a7e83' }}
      selected={false}
      onPress={() => {
      }}>
    </TabBarIOS.Item>
  </TabBarIOS>
}

