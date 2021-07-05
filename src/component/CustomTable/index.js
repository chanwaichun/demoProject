/*
 * @Author: your name
 * @Date: 2021-05-21 21:58:40
 * @LastEditTime: 2021-06-08 16:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\CustomTable\index.js
 */
import React, { useEffect, useState, useCallback } from "react";

import "./index.less";
import { Table } from "antd";

function formateColumns(columns, data) {
  let newColumns = columns.map((item, index) => {
    const { title, key, render } = item;
    if (title === undefined || key === undefined) {
      throw new Error("需要title以及key字段");
    } else {
      let itemConfig = {
        key,
        title,
        dataIndex: key,
      };
      if (render) {
        itemConfig = {
          ...itemConfig,
          render: (text, record) => item.render(text, record),
        };
      }
      return itemConfig;
    }
  });
  return newColumns;
}
function CustomTable(props) {
  const currentProps = {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
    ],
    data: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
    ],

    ...props,
  };
  const [columns, setColums] = useState(
    formateColumns(currentProps.columns, currentProps.data)
  );
  const [data, setData] = useState(currentProps.data);
  useEffect(() => {
    console.log("渲染");
    setColums(formateColumns(currentProps.columns, currentProps.data));
    setData(currentProps.data);
  }, [props.data]);
  return (
    <div
      className="customTable"
      style={{ minHeight: currentProps.comStyle.minHeight }}
    >
      <Table columns={columns} dataSource={data}/>
    </div>
  );
}
export default CustomTable;
