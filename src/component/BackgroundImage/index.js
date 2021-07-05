/*
 * @Author: your name
 * @Date: 2021-02-22 20:02:40
 * @LastEditTime: 2021-02-23 21:56:02
 * @LastEditors: Please set LastEditors
 * @Description: 背景轮播图
 * @FilePath: \demoProject\src\component\BackgroundImage\index.js
 */
import React, { Component } from "react";
import "./index.less";
let timer = null;
export default class BackgroundImage extends Component {
  static defaultProps = {
    currentIndex: 0,
    imageArr: [],
    content: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.props.currentIndex,
    };
  }
  componentDidMount() {
    timer = setInterval(() => {
      const currentIndex = (this.state.currentIndex + 1) % 3;
      console.log(currentIndex);
      this.setState({ currentIndex: currentIndex });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(timer);
  }
  render() {
    return (
      <div className="components-backgroundImage">
        <div className="components-backgroundImage-container">
          {this.props.arrImage.map((item, index) => {
            return (
              <img
                className={
                  index === this.state.currentIndex
                    ? "backgroundImage-show"
                    : "backgroundImage-hidden"
                }
                src={require(`../../assets/image/${item}`)}
                alt="www"
              />
            );
          })}
        </div>
        <div className="components-backgroundImage-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}
