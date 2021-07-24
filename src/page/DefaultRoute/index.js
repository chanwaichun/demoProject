/*
 * @Author: your name
 * @Date: 2021-07-05 23:34:02
 * @LastEditTime: 2021-07-06 00:00:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\DefaultRoute\index.js
 */
import React from "react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";

export default function DefaultRoute(props) {
  console.log(props);
  return (
    <div>
      <div
        onClick={() => {
          // 跳转到主页
          props.history.push("/main/home");
        }}
      >
        进入系统
      </div>
    </div>
  );
}
