/*
 * @Author: your name
 * @Date: 2021-07-04 01:41:13
 * @LastEditTime: 2021-07-24 21:07:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\Card\index.js
 */
import React from "react";
import { Card as AntdCard } from "antd";
import "./index.less";

const DEFAULT_CONFIG = {
  title: "Card title",
  bordered: false,
};
export default function Card(props) {
  const currentProps = {
    ...DEFAULT_CONFIG,
    ...props,
    style: {
      width: "100%",
      ...props.style,
    },
  };
  console.log(props.children);
  return <AntdCard {...currentProps}>{props.children}</AntdCard>;
}
