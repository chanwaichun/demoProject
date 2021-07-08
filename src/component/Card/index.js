/*
 * @Author: your name
 * @Date: 2021-07-04 01:41:13
 * @LastEditTime: 2021-07-06 00:11:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\Card\index.js
 */
import React from "react";
import { Card as AntdCard } from "antd";

const DEFAULT_CONFIG = {
  title: "Card title",
  bordered: false,
};
const DEFAULT_STYLE = { width: '100%', height: 500 };
export default function Card(props) {
  const currentProps = {
    ...DEFAULT_CONFIG,
    ...props,
    style: { ...DEFAULT_STYLE, ...props.style },
  };

  return <AntdCard {...currentProps}></AntdCard>;
}
