/*
 * @Author: your name
 * @Date: 2021-04-24 21:08:09
 * @LastEditTime: 2021-04-24 21:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoProject\src\api\apiConfig.js
 */
const apiConfig = {
  baseURL: "",
};
if (process.env.NODE_ENV === "development") {
  console.log(process);
  apiConfig.baseURL =
    "https://www.fastmock.site/mock/8dc193af88c5809ff3fe419571a2b30e/reactHooksMock";
} else {
  apiConfig.baseURL =
    "https://www.fastmock.site/mock/8dc193af88c5809ff3fe419571a2b30e/reactHooksMock";
}
export default apiConfig;
