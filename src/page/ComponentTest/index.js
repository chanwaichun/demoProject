/*
 * @Author: your name
 * @Date: 2021-03-02 21:44:06
 * @LastEditTime: 2021-03-03 00:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\ComponentTest\index.js
 */
import React, { Component } from "react";
import MyMap from "../../component/MyMap/index";
export default class ComponentTest extends Component {
  render() {
    return (
      <div id="componentTest-container">
        <MyMap></MyMap>
      </div>
    );
  }
}
