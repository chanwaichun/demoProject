/*
 * @Author: your name
 * @Date: 2021-07-04 01:33:42
 * @LastEditTime: 2021-07-04 01:39:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\FormSimple\index.js
 */
import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import CustomSelect from "./../CustomSelect/index";
const { Item: FormItem } = Form;
// 默认表单配置数据
const DEFAULT_FORM_CONFIG = [
  {
    name: "name",
    label: "姓名",
    FormComponent: <Input placeholder="请输入你的姓名" />,
    rules: [
      {
        required: true,
        message: "请输入你的姓名",
      },
    ],
  },
  {
    name: "eMail",
    label: "E-Mail",
    FormComponent: <Input placeholder="请输入你的E-MAIL" />,
  },
  {
    name: "relationPerson",
    label: "关系人",
    FormComponent: <CustomSelect></CustomSelect>,
  },
];
//   默认数据
const DEFAULT_FORM_DATA = {
  name: "chenweijun",
  eMail: "chanwaichuncc@163.com",
  relationPerson: "lisi",
};
function FormComponent(props) {
  // 当前表单数据 没有传值则用默认展示表单
  const { formConfig = DEFAULT_FORM_CONFIG, formData = DEFAULT_FORM_DATA } =
    props;
  const [form] = Form.useForm();
  useEffect(() => {}, [props]);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={formData}
      scrollToFirstError
    >
      {formConfig.map((item, index) => (
        /*遍历表单配置*/
        <FormItem
          key={index}
          name={item.name}
          label={item.label}
          rules={item.rules}
        >
          {item.FormComponent}
        </FormItem>
      ))}
      <FormItem>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  );
}
export default FormComponent;
