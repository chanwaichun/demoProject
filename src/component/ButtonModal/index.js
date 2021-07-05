/*
 * @Author: your name
 * @Date: 2021-06-16 22:35:46
 * @LastEditTime: 2021-07-04 01:28:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\component\ButtonModal\index.js
 */
/**
 * @description:
 * @param {*} buttonName 按钮名字
 * @param {*} modalTitle 弹窗标题
 * @param {*} modalContent 弹窗内容
 */
import React, { useState } from "react";
import { Modal, Button } from "antd";
export default function ButtonModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    props.handleOk && props.handleOk();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    props.handleCancel && props.handleCancel();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {props.buttonName}
      </Button>
      <Modal
        title={props.modalTitle}
        visible={isModalVisible}
        destroyOnClose={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {props.modalContent}
      </Modal>
    </>
  );
}
