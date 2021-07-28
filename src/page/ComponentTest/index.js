/*
 * @Author: your name
 * @Date: 2021-03-02 21:44:06
 * @LastEditTime: 2021-07-28 23:56:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\page\ComponentTest\index.js
 */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import MyMap from "../../component/MyMap/index";
// import apiGetData from "../../api/apiGetData.js";
import { fetchUtil } from "../../util/index";
// import CustomSelect from "../../component/CustomSelect/index";
// import CustomTable from "../../component/CustomTable/index";
// import Loading from "./../../component/Loading/index";
// import FormDemo from "../Form/index";
import Chart from "../../component/Chart/index";
import Card from "../../component/Card/index.js";
import { ComponentTestStore, Context } from "./store.js";
import "./index.less";
import { Button } from "antd";

const style = {
  minHeight: 400,
};
const ChildComponent = (props) => {
  const { state, dispatch } = useContext(Context);
  console.log(state, dispatch);
  useState(() => {}, []);
  return (
    <div>
      <Button onClick={() => dispatch({ type: "a", name: "test" })}>
        点击
      </Button>
      {console.log(props)}
    </div>
  );
};
export default function ComponentTest(params) {
  // const [dataInfo, setDataInfo] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      // setIsLoading(true);
      return config;
    });
    fetchUtil.fetchData("post", "api/getUnitInfo").then((dataObj) => {
      // setDataInfo(dataObj.data);
    });
    axios.interceptors.response.use(function (response) {
      // 在发送请求之前做些什么
      // setIsLoading(false);
      return response;
    });
  }, []);
  return (
    <ComponentTestStore>
      <div id="componentTest-container" className="standard-padding">
        <Card style={{ marginBottom: 16 }} title={"折线图"}>
          <Chart></Chart>
        </Card>
        {/* <MyMap></MyMap> */}
        {/* <CustomSelect data={dataInfo}></CustomSelect> */}
        {/* {!isLoading ? (
          <CustomTable
            columns={[
              {
                title: "編碼",
                key: "areadeptcode",
                render: (text, record) => {
                  return "areadeptcode";
                },
              },
              { title: "區域名字", key: "areaname" },
            ]}
            comStyle={{ minHeight: style.minHeight }}
            data={dataInfo}
          ></CustomTable>
        ) : (
          <Loading height={style.minHeight}></Loading>
        )}
        <Button
          onClick={() => {
            window.cancel();
            fetchData("post", "api/getUnitInfo", true).then((dataObj) => {
              setDataInfo(dataObj.data);
            });
          }}
        >
          取消请求
        </Button> */}
        {/* <ChildComponent></ChildComponent> */}
        {/* <FormDemo></FormDemo> */}
        {/* <div className="property">css属性学习</div> */}
      </div>
    </ComponentTestStore>
  );
}
