/*
 * @Author: your name
 * @Date: 2021-06-15 22:12:07
 * @LastEditTime: 2021-06-15 23:07:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\PeopleDetail\index.js
 */
import React, { useState } from "react";
import { Anchor, Card } from "antd";
import "./index.less";
const { Link } = Anchor;

const linkInfoArray = [
  {
    id: "card-basicInfo",
    title: "基本信息",
  },
  { id: "card-manageInfo", title: "基本信息" },
];
export default function PeopleDetail() {
  return (
    <div id="peopleDetail_page">
      <div class="peopleDetail-anchor">
        <Anchor targetOffset={80}>
          {linkInfoArray.map((item) => (
            <Link href={`#${item.id}`} title={item.title} />
          ))}
        </Anchor>
      </div>
      <div class="peopleDetail-list">
        {linkInfoArray.map((item) => (
          <Card id={item.id} style={{ marginBottom: 16 }} title="卡片标题">
            <div style={{ width: "100%", height: 500 }}></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
