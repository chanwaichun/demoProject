/*
 * @Author: your name
 * @Date: 2021-04-24 21:08:44
 * @LastEditTime: 2023-02-07 18:45:37
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @Description: In User Settings Edit
 * @FilePath: \demoProject-react\src\util\fetchUtil.js
 */
import axios from "axios";
import apiConfig from "../globalConfig/apiConfig";
const CancelToken = axios.CancelToken;
window.cancel = null;

export function fetchData(method, url, params, isCancel) {
  // if (isCancel) {
  //   source.cancel();
  // }
  return new Promise((resolve, reject) => {
    if (typeof params !== "object") params = {};
    let option = params;
    option = {
      method,
      url,
      baseURL: apiConfig.baseURL,
      timeout: 30000,
      params: null,
      data: null,
      headers: null,
      withCredentials: true, //是否携带cookies发起请求
      cancelToken: new CancelToken((c) => {
        window.cancel = c;
      }),
      validateStatus: (status) => {
        return status >= 200 && status < 300;
      },
    };
    axios.request(option).then((res) => {
      resolve(res);
    });
  });
}
