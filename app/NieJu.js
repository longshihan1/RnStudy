import React, {Component} from 'react'
import {
    StyleSheet,
    ListView,
    Image,
    Text,
    Alert,
    StatusBar,
    TouchableOpacity,
    View
} from 'react-native'

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

// 导入json数据
var shareData = require('./json/shareData.json');

// 一些常量设置
var cols = 3;
var cellWH = 100;
var vMargin = (screenWidth - cellWH * cols) / (cols + 1);
var hMargin = 25;
export default class NieJu extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(shareData.data)
        }
    }

    render() {
        return (

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.item}
                contentContainerStyle={styles.listViewStyle}
            />
        );
    }

    item(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                Alert.alert('哈哈')
            }}>
                <View style={styles.innerViewStyle}>
                    <Image source={require('../img/icon.png')} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    listViewStyle: {
        // 改变主轴的方向
        flexDirection: 'row',
        // 多行显示
        flexWrap: 'wrap'
    },

    iconStyle: {
        width: 80,
        height: 80
    },

    innerViewStyle: {
        width: cellWH,
        height: cellWH,
        marginLeft: vMargin,
        marginTop: hMargin,

        // 居中
        alignItems: 'center'
    }
});
module.exports = NieJu