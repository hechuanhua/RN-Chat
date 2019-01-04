/**
 * 聊天底部组件
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput,
    TouchableOpacity
} from 'react-native';
import io from 'socket.io-client';

// const socket = io('http://localhost:3000', {
//     transports: ['websocket'] // you need to explicitly tell it to use websockets
// });


export default class ChatBottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            keyboard:false,
            showEmoji:false,
        };
    }

    sendMessage(data) {
        //socket.emit('send', data);
        this.props.updateViews('chatList',data)
    }

    render() {
        return (

            <View style={styles.bottomBar}>

                {/* 切换文字或者声音 按钮*/}
                <View style={styles.voice}>
                    <TouchableOpacity onPress={()=>{
                        this.props.updateViews('showVoice')
                        this.setState({
                            keyboard:!this.state.keyboard,
                        })
                    }}>
                        {
                            this.state.keyboard?
                                <Image source={require('../../images/toolBar/ic_chat_keyboard.png')}
                                style={{ width: 25, height: 25 }}
                            />:
                                <Image source={require('../../images/toolBar/icon_voice.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                        
                    </TouchableOpacity>
                </View>

                {/* 输入文字或者声音 */}
                <View style={styles.messageTextarea}>
                    {
                        this.state.keyboard?
                            <Text style={styles.sayText}>按住  说话</Text>
                        :
                        <TextInput
                            style={{ height: 40 }}
                            ref="input"
                            onChangeText={(message) => this.setState({ message })}
                            keyboardType="default"
                            multiline={true}
                            onSubmitEditing={() => {
                                this.sendMessage({
                                    avatar:'',
                                    name: 'hechuanhua',
                                    message:{
                                        type:'text',
                                        content:this.state.message
                                    }
                                })
                                this.refs.input.clear()
                            }}
                            blurOnSubmit = {true}//文本框会在提交的时候失焦.回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行。
                            clearButtonMode="always"//是否要在文本框右侧显示“清除”按钮。仅在单行模式下可用
                            returnKeyType="send"
                            value={this.state.message}
                            editable={true}
                            autoGrow={true}
                            enablesReturnKeyAutomatically={true}//如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。
                        />
                    }
                    

                </View>

                {/* 表情按钮 */}
                <View style={styles.emoji}>
                    <TouchableOpacity 
                        onPress={()=>{
                            this.props.updateViews('showEmoji')
                            this.setState({
                                showEmoji:!this.state.showEmoji
                            })
                        }}>
                        {
                            this.state.showEmoji?
                            <Image source={require('../../images/toolBar/ic_chat_keyboard.png')}
                                style={{ width: 25, height: 25 }}
                            />:
                            <Image source={require('../../images/toolBar/icon_emoji.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                    </TouchableOpacity>
                </View>

                {/* 更多工具 按钮 */}
                <View style={styles.toolMore} >
                    <TouchableOpacity onPress={()=>{this.props.updateViews('showTool')}}>
                        <Image source={require('../../images/toolBar/icon_add.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f3f3f4',
        alignItems: 'center',
        padding: 15,
        borderTopColor: '#ddd',
        borderTopWidth: 0.5,
        borderStyle: 'solid',
    },
    messageTextarea: {
        height: 35,
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fcfcfc',
    },
    voice: {
        height: 25,
        width: 25,
    },
    toolMore: {
        marginLeft: 10,
        height: 25,
        width: 25,
    },
    sayText:{
        textAlign:'center',
        height:35,
        lineHeight:35,
        color:'#666',
    }
})
