/*
 * @Author: your name
 * @Date: 2020-11-23 23:58:24
 * @LastEditTime: 2021-05-23 18:59:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\component\Loading\index.js
 */
import React, { Component } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.less";
export default class Loading extends Component {
  render() {
    return (
      <div className="cc_loading" style={{ height: this.props.height }}>
        <Spin size="large" />
      </div>
    );
  }
}
