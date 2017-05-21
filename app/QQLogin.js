import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class QQLogin extends Component {
    constructor(props) {
        super(props)
        this.state={
            age: 18,
            title1: '不透明触摸',
            person: '张三'
        }

    }

    render() {
        return (
            <View style={styles.container1}>
                {/*头像*/}
                <Image source={require('../img/icon.png')} style={styles.iconStyle}/>
                {/*账户和密码*/}
                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}
                           underlineColorAndroid='transparent'/>
                <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle}
                           underlineColorAndroid='transparent'/>
                {/*登录*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color: 'white'}}>
                        登录
                    </Text>
                </View>
                <View style={styles.settingStyle} ref="topView">
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={()=>this.activeEvent('点击')}
                        onPressIn={()=>this.activeEvent('按下')}
                        onPressOut={()=>this.activeEvent('抬起')}
                        onLongPress={()=>this.activeEvent('长按')}
                    >
                    <Text>
                        无法下载+{this.state.title1}+{this.state.person}+{this.state.age}
                    </Text>
                    </TouchableOpacity>
                    <Text>
                        新用户
                    </Text>
                </View>
                {/*以其他方式登陆*/}
                <View style={styles.otherLoginStyle}>
                    <Text onPress={()=>this.renderPress()}>
                        其他登录方式
                    </Text>
                    <Image source={require('../img/icon3.png')} style={styles.otherImageStyle}/>
                    <Image source={require('../img/icon7.png')} style={styles.otherImageStyle}/>
                    <Image source={require('../img/icon8.png')} style={styles.otherImageStyle}/>
                </View>
            </View>
        );
    }

    activeEvent(event) {
        this.setState({
            title1: event,
            person:'李四'
        })
        // 拿到View
        this.refs.topView
        this.refs.event
    }

    renderPress() {
        Alert.alert('查韦斯')
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#dddddd',
        // 设置侧轴的对齐方式
        alignItems: 'center'
    },

    iconStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white'
    },

    textInputStyle: {
        width: width,
        height: 38,
        backgroundColor: 'white',
        marginBottom: 1,
        // 内容居中
        textAlign: 'center'
    },

    loginBtnStyle: {
        height: 35,
        width: width * 0.9,
        backgroundColor: 'blue',
        marginTop: 30,
        marginBottom: 20,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 8
    },

    settingStyle: {
        // 设置主轴的方向
        flexDirection: 'row',
        // backgroundColor:'red',

        // 主轴的对齐方式
        width: width * 0.9,
        justifyContent: 'space-between'
    },

    otherLoginStyle: {
        // backgroundColor:'red',

        // 设置主轴的方向
        flexDirection: 'row',

        // 设置侧轴的对齐方式
        alignItems: 'center',

        // 绝对定位
        position: 'absolute',
        bottom: 10,
        left: 20
    },

    otherImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 8
    }
});
module.exports = QQLogin