/*
 * @Author: your name
 * @Date: 2021-04-24 18:36:33
 * @LastEditTime: 2021-05-21 20:56:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\Select\index.js
 */
import React, { useEffect, useState } from "react";
import { Select } from "antd";
const Option = Select.Option;
// 设置默认值
function setInitialValue(props) {
  // 根据传进来的配置是否取第一个选项为默认值
  if (props.getFirstKey) {
    return props.data.length > 0 ? props.data[0].value : "暂无数据";
  } else {
    return props.value;
  }
}
/**
 * @description:
 * @param {Array<object>} data
 * @param {boolean} getFirstKey,是否获取第一个选项为默认值
 * @param {string} value 默认值
 * @return {JSX}
 */
function CustomSelect(props) {
  // 设置初始值
  let currentProps = {
    data: [
      { title: "张三", value: "zhangsan" },
      { title: "李四", value: "lisi" },
    ],
    value: "",
    ...props,
  };
  const [defaultValue, setDefaultValue] = useState(currentProps.value);
  // 新的值覆盖旧的值

  // 监听props.data的变化重新设置下拉值
  useEffect(() => {
    console.log(props);
    setDefaultValue(setInitialValue(props));
  }, [props.data]);
  // 设置下拉value值
  function onChange(value) {
    setDefaultValue(value);
    currentProps.onChange && currentProps.onChange(value);
  }
  return (
    <Select
      value={defaultValue}
      placeholder={"请选择"}
      style={{ width: 120 }}
      onChange={onChange}
    >
      {currentProps.data.map((item, index) => (
        <Option key={index} value={item.value || "--"}>
          {item.title}
        </Option>
      ))}
    </Select>
  );
}
export default CustomSelect;
