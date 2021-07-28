/*
 * @Author: your name
 * @Date: 2021-06-15 22:12:07
 * @LastEditTime: 2021-07-28 23:51:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\PeopleDetail\index.js
 */
import React, { useState } from "react";
import { Anchor } from "antd";
import "./index.less";
import Card from "../../component/Card";
import Chart from "../../component/Chart";
const { Link } = Anchor;

const linkInfoArray = [
  {
    id: "card-basicInfo",
    title: "基本信息",
  },
  { id: "card-manageInfo", title: "管控信息" },
  { id: "card-visitInfo", title: "走访信息" },
  { id: "card-equipInfo", title: "设备信息" },
];
export default function PeopleDetail() {
  return (
    <div id="peopleDetail_page">
      <div className="peopleDetail-anchor">
        <Anchor targetOffset={80}>
          {linkInfoArray.map((item, index) => (
            <Link key={index} href={`#${item.id}`} title={item.title} />
          ))}
        </Anchor>
      </div>
      <div className="peopleDetail-list">
        {linkInfoArray.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            style={{ marginBottom: 16 }}
            title={item.title}
          >
            <Chart></Chart>
          </Card>
        ))}
      </div>
    </div>
  );
}
