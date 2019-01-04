/**
 * 聊天信息列表组件
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

export default class ChatIList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    keyExtractor = (item, index) => item.message.content;

    renderItem({ item }) {
        
        let avatar = require('../../images/avatar-default.png')
        if (item.avatar) {
            avatar = { uri: item.avatar };
        }
        if (item.name !== 'hechuanhua') {//别人的发言
            if(item.message.type == 'text'){
                return (
                    <View style={styles.messageItem}>
                        <View style={styles.avatar}>
                            <Image source={avatar}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={styles.messageBox}>
                            <Text style={styles.messageText}>{item.message.content}</Text>
                        </View>
                    </View>
                )
            }else{
                return (
                    <View style={styles.messageItem}>
                        <View style={styles.avatar}>
                            <Image source={avatar}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                        <View style={styles.imageBox}>
                            <Image source={require('../../images/avatar-default.png')}
                            //resizeMode="contain"
                            style={styles.image}
                            />
                        </View>
                    </View>
                )
            }
            
        } else {//自己的发言
            if(item.message.type == 'text'){
                return (
                    <View style={[styles.messageItem, styles.selfMessageItem]}>
                        <View style={[styles.messageBox, styles.selfMessageBox]}>
                            <Text style={styles.messageText}>{item.message.content}</Text>
                        </View>
                        <View style={styles.avatar}>
                            <Image source={avatar}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                    </View>
                )
            }else{
                return (
                    <View style={[styles.messageItem, styles.selfMessageItem]}>
                        <View style={styles.imageBox}>
                            <Image source={require('../../images/avatar-default.png')}
                            //resizeMode="contain"
                            style={styles.image}
                            />
                        </View>
                        <View style={styles.avatar}>
                            <Image source={avatar}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>
                    </View>
                )
            }
            
        }
    }

    componentWillUpdate(){
        this.refs.flatList.scrollToEnd()
    }

    render() {
        return (
            <FlatList
                ref="flatList"
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                extraData={this.props}
            />
        );
    }
}

const styles = StyleSheet.create({
    messageItem: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    avatar: {
        width: 40,
        height: 40,
    },
    messageBox: {
        marginRight: 50,
        marginLeft: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 5,
        flexDirection: 'row',
    },
    messageText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 15,
    },
    selfMessageItem: {
        justifyContent: 'flex-end',
    },
    selfMessageBox: {
        marginRight: 5,
        marginLeft: 50,
        backgroundColor: '#a0e75a',
        borderColor: '#6fb44d',
    },
    imageBox:{
        marginLeft: 50,
        flex:1,
        marginRight:10,
        alignItems:'flex-end'
    },
    image:{
        //flex:1,
        //width:150,
        //height:300
    }
})
