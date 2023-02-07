/*
 * @Author: your name
 * @Date: 2021-02-18 14:20:51
 * @LastEditTime: 2023-02-07 18:44:12
 * @LastEditors: chanwaichun chanwaichuncc@163.com
 * @Description: In User Settings Edit
 * @FilePath: \demoProject-react\src\page\Home\index.js
 */
import React from "react";
import { Button } from "antd";
// function Home() {
//   debugger;
//   const [state, setState] = useState(0);
//   return (
//     <div>
//       <p>You clicked {state} times</p>
//       <button onClick={() => setState(state + 1)}>Click me</button>
//     </div>
//   );
// }
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ddd: 1,
    };
  }
  change() {
    console.log(1);

    this.setState({
      ddd: this.state.ddd + 1,
    });
    console.log(this.state.ddd);
    this.setState({
      ddd: this.state.ddd + 1,
    });
    console.log(this.state.ddd);
    setTimeout(() => {
      debugger;
      console.log(this.state.ddd);
      this.setState({
        ddd: this.state.ddd + 1,
      });
      console.log(this.state.ddd);
    });
  }
  render() {
    return (
      <Button
        onClick={() => {
          this.change();
        }}
      >
        {" "}
        {this.state.ddd}{" "}
      </Button>
    );
  }
}
export default Home;
