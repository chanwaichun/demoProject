/*
 * @Author: your name
 * @Date: 2021-03-03 00:28:39
 * @LastEditTime: 2021-03-22 23:41:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\BMap\index.js
 */
import React, { Component } from "react";
import "./index.less";
export default class MyMap extends Component {
  static defaultProps = {
    city: "广州市",
    point:[{}]
  };

  componentDidMount() {
    if (window.BMap) {
      var map = new window.BMap.Map("components-myMap"); // 创建地图实例
      var point = new window.BMap.Point(113.87512889354, 22.965473841946); // 创建点坐标
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);
      var marker = new window.BMap.Marker(point); // 创建标注
      map.addOverlay(marker);
    }
  }
  render() {
    return <div id="components-myMap"></div>;
  }
}
