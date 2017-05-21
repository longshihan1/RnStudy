/**
 * Created by longshihan on 2017/5/20.
 */
import React, {Component} from 'react'
import {
    BackAndroid,
    StatusBar,
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    ListView,
    View
} from 'react-native'

var DATA1 = [
    {
        "id": "1",
        "name": "Android 学习1",
        "img": "https://img.alicdn.com/bao/uploaded/i3/TB1602HPVXXXXa1apXX2atc8VXX_728x728.jpg",
        "teacher": "我们1",
        "add_time": "2015-8-15",
        "url": "http://www.baidu.com"
    },
    {
        "id": "2",
        "name": "Android 学习2",
        "img": "https://img.alicdn.com/bao/uploaded/i3/TB1602HPVXXXXa1apXX2atc8VXX_728x728.jpg",
        "teacher": "我们2",
        "add_time": "2015-8-15",
        "url": "http://www.baidu.com"
    },
    {
        "id": "3",
        "name": "Android 学习3",
        "img": "https://img.alicdn.com/bao/uploaded/i3/TB1602HPVXXXXa1apXX2atc8VXX_728x728.jpg",
        "teacher": "我们3",
        "add_time": "2015-8-15",
        "url": "http://www.baidu.com"
    }

];
var DATA_URL = "http://api.daguye.com/?m=course&c=index";
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
        }

    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch(DATA_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
                });
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='transparent'
                    translucent/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.item}
                />
            </View>
        );
    }

    item(course) {
        return (
            <View style={styles.container}>
                <Image source={{uri: course.img}} style={styles.imags}></Image>
                <Text style={styles.title}>
                    {course.name}
                </Text>
                <Text style={styles.teacher}>
                    {course.teacher}
                </Text>
                <Text style={styles.addtime}>
                    {course.add_time}
                </Text>
            </View>
        );
    }

}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 10,
    },
    teacher: {
        fontSize: 13,
        textAlign: 'left',
        marginLeft: 10,
    },
    addtime: {
        fontSize: 13,
        textAlign: 'left',
        color: '#2d85ca',
        marginLeft: 10,
    },
    imags: {

        height: 170,
        margin: 10,
    },
});

module.exports = HomePage