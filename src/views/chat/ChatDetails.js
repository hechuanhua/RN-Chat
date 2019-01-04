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
	TextInput,
	KeyboardAvoidingView,
	PixelRatio,
	Dimensions,
	ViewPagerAndroid,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import ChatBottomBar from '../component/ChatBottomBar'
import ChatIList from '../component/ChatList'
import emojiList from '../../utils/Smiley'
const { width } = Dimensions.get('window');


export default class ChatDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				{ avatar: '', message: { type: 'text', content: '111' }, name: 'aaa' },
				{ avatar: '', message: { type: 'text', content: '222' }, name: 'bbb' },
			],
			showEmoji:false
			//arr:arr
		};
	}

	sendMessage(data) {
        //socket.emit('send', data);
        this.updateViews('chatList',data)
    }

	//更新视图
	updateViews(type, data) {

		let a =  <Image source={require('../../images/toolBar/ic_collect.png')} style={styles.moreIcon}></Image>
		//更新聊天信息
		if(type == 'chatList'){
			this.state.messages.push(data)
			this.setState({
				messages: this.state.messages
			})
		}

		//切换表情
		if(type == 'showEmoji'){
			this.setState({
				showEmoji:!this.state.showEmoji,
				showTool:false,
				keyboard:false,
			})
		}

		//切换更多工具栏
		if(type == 'showTool'){
			this.setState({
				showTool:!this.state.showTool,
				showEmoji:false,
				keyboard:false,
			})
		}

		//切换语音和键盘
		if(type == 'showKeyboard'){
			this.setState({
				keyboard:!this.state.keyboard,
				showEmoji:false,
				showTool:false,
			})
		}
		
	}

	componentWillUpdate() {

		//this.refs.ScrollView.onPageScrollStateChanged
	}

	render() {

		let emj = []
		for (var a = 0; a < (Math.ceil(105 / 24)); a++) {
			let page = []
			for (let i = 0; i < 3; i++) {
				let row = []
				for (let j = 0; j < 8; j++) {
					if(j == 7 && i == 2 && a != ((Math.ceil(104 / 24))-1) ){
						row.push(
							<View key={j} style={styles.emojiBox}>
								<Image source={emojiList[105]} style={styles.emojiIcon} key={i} />
							</View>)
					}else{
						row.push(
							<View key={j} style={styles.emojiBox}>
								<Image source={emojiList[(i * 8 + j + a * 24)]} style={styles.emojiIcon} key={i} />
							</View>)
					}
					
				}
				page.push(<View key={i} style={styles.emojiRow}>{row}</View>)
			}
			emj.push(<View style={styles.pageStyle} key={a}>{page}</View>)
		}

		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<ChatIList data={this.state.messages}></ChatIList>
				</View>

				<KeyboardAvoidingView behavior="position">
					<View style={{ height: 50 }}>
						<View style={styles.bottomBar}>

							{/* 切换文字或者声音 按钮*/}
							<View style={styles.voice}>
								<TouchableOpacity onPress={()=>{
									this.updateViews('showKeyboard')
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

							{/* 切换表情 */}
							<View style={styles.emoji}>
								<TouchableOpacity 
									onPress={()=>{
										this.updateViews('showEmoji')
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

							{/* 切换更多工具栏 */}
							<View style={styles.toolMore} >
								<TouchableOpacity onPress={()=>{this.updateViews('showTool')}}>
									<Image source={require('../../images/toolBar/icon_add.png')}
										style={{ width: 25, height: 25 }}
									/>
								</TouchableOpacity>
							</View>

						</View>
					</View>

					{
						this.state.showEmoji?
						<ScrollView
							horizontal={true}
							style={styles.viewPager}
							initialPage={0}
							ref="ScrollView"
							pagingEnabled={true}//滚动条会停在滚动视图的尺寸的整数倍位置
							showsHorizontalScrollIndicator={false}//水平方向的滚动条。
						>
							{
								emj.map((el, i) => {
									return el
								})
							}
						</ScrollView>:<Text style={{height:0}}></Text>
					}

					{
						this.state.showTool?
						<View
							style={styles.morePage}
						>
							<View style={styles.moreBox}>
								<View style={styles.moreInner}>
									<Image source={require('../../images/toolBar/ic_collect.png')} style={styles.moreIcon}/>
								</View>
								<Text style={styles.moreText}>照片</Text>
							</View>
							<View style={styles.moreBox}>
								<View style={styles.moreInner}>
									<Image source={require('../../images/toolBar/ic_collect.png')} style={styles.moreIcon}/>
								</View>
								<Text style={styles.moreText}>拍摄</Text>
							</View>
							<View style={styles.moreBox}>
								<View style={styles.moreInner}>
									<Image source={require('../../images/toolBar/ic_collect.png')} style={styles.moreIcon}/>
								</View>
								<Text style={styles.moreText}>位置</Text>
							</View>
							<View style={styles.moreBox}>
								<View style={styles.moreInner}>
									<Image source={require('../../images/toolBar/ic_collect.png')} style={styles.moreIcon}/>
								</View>
								<Text style={styles.moreText}>收藏</Text>
							</View>
						</View>
						:<Text style={{height:0}}></Text>
					}
					
				</KeyboardAvoidingView>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebebeb',
		paddingTop: 50,
		flexDirection: 'column',
	},
	content: {
		flex: 1,
		flexDirection: 'column',
	},
	viewPager: {
		width: width,
		height: 150,
		backgroundColor: 'red',
		flexDirection: 'row',
	},
	pageStyle: {
		width: width,
		height: 150,
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
		paddingTop: 10, 
		paddingBottom: 10,
		flexDirection: 'column',
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#f8f8f8'
	},
	emojiRow: { 
		flex: 1, 
		justifyContent: 'center', 
		flexDirection: 'row' 
	},
	emojiBox: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
		paddingTop: 10, 
		paddingBottom: 10 
	},
	emojiIcon: {
		width: 30,
		height: 30,
	},
	emojiDelIcon: {
		width: 30,
		height: 24,
	},
	morePage:{
		width: width,
		height: 150,
		backgroundColor: '#f8f8f8',
		flexDirection: 'row',
		justifyContent: 'center', 
		alignItems: 'center', 
		paddingLeft:20,
		paddingRight:20,
	},
	moreBox:{
		flex:1,
		alignItems: 'center',
	},
	moreInner:{
		width:60,
		height:60,
		backgroundColor:'#fff',
		justifyContent: 'center', 
		alignItems: 'center',
	},
	moreIcon:{
		width:40,
		height:40,
	},
	moreText:{
		width:60,
		textAlign:'center',
		marginTop:10,
		color:'#999',
	},


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
