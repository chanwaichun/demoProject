/*
 * @Author: your name
 * @Date: 2021-07-04 01:41:13
 * @LastEditTime: 2021-07-04 01:48:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\Card\index.js
 */
import React from "react";
import { Card as AntdCard } from "antd";

const DEFAULT_CONFIG = {
  title: "Card title",
  bordered: false,
  style: { width: 300 },
};
export default function Card(props) {
  const currentProps = { ...DEFAULT_CONFIG, ...props };

  return <AntdCard {...currentProps}></AntdCard>;
}
