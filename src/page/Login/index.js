/*
 * @Author: your name
 * @Date: 2021-02-20 21:12:51
 * @LastEditTime: 2021-02-23 22:04:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\login.js
 */
import React, { Component } from "react";
import "./index.less";
import BackgroundImage from "../../component/BackgroundImage";
export default class Index extends Component {
  render() {
    return <BackgroundImage arrImage = {["gz-one.png", "gz2.png", "gz3.png"]} content={
      <div className="login-container">
          <div className="login-box"></div>
      </div>
    }></BackgroundImage>;
  }
}
