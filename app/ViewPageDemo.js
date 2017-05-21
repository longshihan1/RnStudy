import React, {Component} from 'react'
import {
    StyleSheet,
    TimePickerAndroid,
    ScrollView,
    Image,
    Text,
    View
} from 'react-native'

var ImageData = require('./json/ImageData.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
export default class ViewPageDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: 1000,
            // 当前的页码
            currentPage: 0,
        }
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                console.log('把一个定时器的引用挂在this上');

            },
            500
        );
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    // 隐藏水平滚动条
                    showsHorizontalScrollIndicator={false}
                    // 自动分页
                    pagingEnabled={true}
                    // 当一帧滚动结束
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    // 开始拖拽
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    // 停止拖拽
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>
                {/*返回指示器*/}
                <View style={styles.pageViewStyle}>
                    {/*返回5个圆点*/}
                    {this.renderPageCircle()}
                </View>
            </View>
        );
    }

    renderAllImage() {
        // 数组
        var allImage = [];
        // 拿到图像数组
        var imgsArr = ImageData.data;
        // 遍历
        for (var i = 0; i < imgsArr.length; i++) {
            // 取出单独的每一个对象
            var imgItem = imgsArr[i];
            // 创建组件装入数组
            allImage.push(
                <Image key={i} source={require('./img/img_01.png')} style={{width: width, height: 120}}/>
            );
        }
        // 返回数组
        return allImage;
    }

    renderPageCircle() {
        // 定义一个数组放置所有的圆点
        var indicatorArr = [];
        var style;
        // 拿到图像数组
        var imgsArr = ImageData.data;
        // 遍历
        for (var i = 0; i < imgsArr.length; i++) {

            // 判断
            style = (i == this.state.currentPage) ? {color: 'orange'} : {color: '#ffffff'};

            // 把圆点装入数组
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
            );
        }
        // 返回
        return indicatorArr;
    }

    //  当一帧滚动结束的时候调用
    onAnimationEnd(e) {
        // 1.求出水平方向的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;

        // 2.求出当前的页数
        var currentPage = Math.floor(offSetX / width);
        // console.log(currentPage);

        // 3.更新状态机,重新绘制UI
        this.setState({
            // 当前的页码
            currentPage: currentPage
        });
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },

    pageViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.4)',

        // 定位
        position: 'absolute',
        bottom: 0,

        // 设置主轴的方向
        flexDirection: 'row',
        // 设置侧轴方向的对齐方式
        alignItems: 'center'
    }
});

module.exports = ViewPageDemo