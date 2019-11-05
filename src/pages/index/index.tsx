import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import './index.css'
import Config = Taro.Config;

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
  }

  onScrollToUpper(e){
    console.log(1)
    console.log(e.detail)
  }

  // or 使用箭头函数
  // onScrollToUpper = (e) => {
  //  console.log(e.detail)
  // }

  onScroll(e){
    console.log(2)
    console.log(e.detail)
  }

  render() {
    const scrollStyle = {
      height: '500px'
    }
    const WXSS = {
      height: '100%'
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '250px',
      'background-color': 'rgb(26, 173, 25)'
    }
    const vStyleB = {
      height: '250px',
      'background-color': 'rgb(39,130,215)'
    }
    const vStyleC = {
      height: '250px',
      'background-color': 'rgb(241,241,241)',
      color: '#333'
    }
    return (
      <ScrollView
        className='scrollview'
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        WXSS={WXSS}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={this.onScroll}
      >
        <View style={vStyleA}>A</View>
        <View style={vStyleB}>B</View>
        <View style={vStyleC}>C</View>
      </ScrollView>
    )
  }
}
