/**
 * Created by longshihan on 2017/5/21.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput
} from 'react-native'

//导入json数据
var BageData = require('./json/BadgeData.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get("window");

var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

export default class ImageSample extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllBadge()}
                <TextInput
                    style={styles.inputStyle}
                    // value={'我是默认文字'}
                    keyboardType={'number-pad'}
                    // 多行显示
                    // multiline={true}
                    // password={true}
                    placeholder={'我是占位文字'}
                    clearButtonMode={'always'}
                />
            </View>
        );
    }

    renderAllBadge() {
        //定义数组，装所有的子组件
        var allBadge = [];
        //遍历数据
        for (var i = 0; i < BageData.data.length; i++) {
            //取出数据
            var badge = BageData.data[i];
            //装入数组
            allBadge.push(
                <View key={i} style={styles.outerViewStyle}>
                    <Image style={styles.imageStyle}/>
                    <Text style={styles.textStyle}>
                        {badge.title}
                    </Text>
                </View>);
        }
        return allBadge;
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f5f',
        flexDirection: 'row',
        // 换行显示
        flexWrap: 'wrap'
    },
    outerViewStyle: {
        //占满窗口
        //flex: 1
        backgroundColor: 'red',
        alignItems: 'center',
        width: boxW,
        height: boxW,
        marginLeft: vMargin,
        marginTop: hMargin,
    },

    imageStyle: {
        width: 80,
        height: 80
    },

    mainTitleStyle: {},
    inputStyle: {
        marginTop: 30,
        width: 300,
        height: 60,
        // 背景
        // backgroundColor:'black',
        // 边框
        borderWidth: 1,
        borderColor: '#e8e8e8'
    }
});
module.exports = ImageSample