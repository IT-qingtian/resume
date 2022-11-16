const interval_codeEdit = 2;
// const style = `
// /*
// * 各位老师同学们你们好，我是飞天大炮同学
// * 特此准备了一份在线简历
// * 先准备一些样式
// */
// *{
//     transition: all .8s;
// }
// /* 容器中要添加点样式 */
// #codeEdit{
//     color: #fff;
//     background: #1E1E1E;
// }
// #resume{
//     box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
// }
// /* 再来点代码高亮 */
// pre#codeEdit{
//     color: #CE9e78;
// }
// .token.selector{
//     color: rgb(230, 155, 43);
// }
// .token.comment{
//     color: #2eb996;
//     font-size: 14px;
// }
// .token.property{
//     color: #60C8FE;
// }
// .token.function {
//     color: #DD4A68;
// }
// /* 好啦,右边就是我的简历，望查阅指正 */
//         `;
const style = `
@font-face {
  font-family: "sjs"; /*给自定义字体命名*/
  src: url("../ttf/sjsax1.ttf");
  font-size: 20px;
}
@font-face {
  font-family: "Kingsoft_Cloud_Font"; /*给自定义字体命名*/
  src: url("../ttf/Kingsoft_Cloud_Font.ttf");
  font-size: 20px;
}
@font-face {
  font-family: "yfjlhs"; /*给自定义字体命名*/
  src: url("../ttf/yfjlhs.ttf");
  font-size: 20px;
}
@font-face {
  font-family: "Combo"; /*给自定义字体命名*/
  src: url("../ttf/Combo.ttf");
  font-size: 20px;
}
@font-face {
  font-family: "aoyagireisyosimo_ttf_2_01"; /*给自定义字体命名*/
  src: url("../ttf/aoyagireisyosimo_ttf_2_01.ttf");
  font-size: 20px;
}
pre {
  margin: 0;
}

body {
  background: linear-gradient(to right, #77a1d3, #79cbca, #e684ae);
  margin: 0;
  background-color: rgba(150, 150, 150, 0.2);
  height: 100vh;
}

body::-webkit-scrollbar {
  width: 1px;
}

ul {
  padding: 0 15px;
  list-style: none;
}

.container {
  margin: auto;
  width: 95vw;

  //  通用分组
  .content {
    height: 100vh;
    width: 100%;
  }

  //  自我介绍页
  .resume {
    box-sizing: border-box;
    padding-top: 30px;
    height: 85%;
    display: flex;
    justify-content: space-between;

    .codeEdit {
      transition: all 0.5s;
      position: relative;
      // transform: translate3d(0, 65px, 80px);
      flex: 4;
      overflow: hidden;
      height: 100%;
      width: 48%;
      box-shadow: 10px 10px 10px 0px black;
      background-color: blanchedalmond;

      pre {
        height: 100%;

        code {
          font-weight: bold;
          font-size: 15px;
          box-sizing: border-box;
          height: 100%;
        }

        code::-webkit-scrollbar {
          width: 3px;
        }

        code::-webkit-scrollbar-track {
          background-color: #2e2e2e;
        }

        code::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background-color: #fff;
        }
      }
    }

    .resume_template {
      border: 0.5px solid #2e2e2e;
      border-radius: 10px;
      overflow: auto;
      // background: #2193b0;  /* fallback for old browsers */
      // background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      margin-left: 16px;
      box-sizing: border-box;
      flex: 6;
      height: 100%;
      width: 48%;
      box-shadow: 10px 10px 10px 0px;

      .animated {
        // padding: 0 15px;
        .head {
          transition: all 2s;
          position: relative;
          left: -100%;

          display: flex;

          .l {
            margin: auto 0;
            text-align: center;
            // flex: 1;
            width: 30%;
          }

          .r {
            #title {
              font-family: "aoyagireisyosimo_ttf_2_01";
              text-align: center;
              box-sizing: border-box;
              // border-bottom: 1px solid #3f3f3f;
              margin: 0 35px;
            }

            #title::before {
              content: "<—";
            }

            #title::after {
              content: "—>";
            }

            ul {
              display: flex;
              flex-wrap: wrap;

              li {
                font-family: "sjs";
                flex: 50%;
              }
            }

            // flex: 1;
            width: 70%;
          }
        }

        .cont {
          p {
            font-size: 15px;
          }

          transition: all 2s;
          position: relative;
          // left: 100%;
          padding: 0 30px;

          .resume_item {
            // border-bottom: 1px dashed white;
            transition: all 1s;

            h3 {
              font-family: "yfjlhs";
              border-bottom: 1px solid;
              color: rgba(37, 126, 226);
            }

            ul > li {
              p {
                margin: 3px;
                font-family: "Kingsoft_Cloud_Font";

                span {
                  padding: 0 5px;
                  color: red;
                }
              }

              p::before {
                content: "♦";
                color: #2ebb96;
                padding-right: 15px;
                font-size: 20px;
                font-family: "-webkit-pictograph";
              }
            }
          }
        }
      }
    }

    .resume_template::-webkit-scrollbar {
      width: 5px;
    }

    .resume_template::-webkit-scrollbar-track {
      background-color: rgba(1, 1, 1, 0);
    }

    .resume_template::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: rgba(119, 163, 210);
    }
  }

  .imgs {
    transition: all 0.5s;
    // opacity: 0;
    height: 100%;
    box-sizing: border-box;
    padding: 5% 0;
    display: flex;

    .photo {
      flex: 2;
      // background-color: red;
      display: flex;
      flex-direction: column;

      .photoWall {
        flex: 1;

        // background-color: white;
        ul {
          overflow: auto;
          height: 100%;
          position: relative;
          margin: 0;
          padding: 0;

          li {
            box-shadow: 0 0 13px black;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            position: absolute;
            box-sizing: border-box;
            padding: 15px;
            background-color: white;
            width: 30%;
            overflow: hidden;

            img {
              height: 80%;
              width: 100%;
            }

            p {
              margin: 0;
              text-align: center;
              word-wrap: break-word;
              word-break: break-all;
            }
          }

          li:hover {
            box-shadow: 0 0 13px yellow;
          }
        }

        ul::-webkit-scrollbar {
          width: 0;
          height: 1px;
          // color: blue;
        }

        ul::-webkit-scrollbar-thumb {
          background-color: #2e2e2e;
        }

        ul::-webkit-scrollbar-track {
          background-color: #fff;
        }
      }

      .image3d {
        border-left: 1px solid;
        // border-right: 1px solid;
        border-bottom: 1px solid;
        position: relative;
        transform-style: preserve-3d;
        flex: 1;

        // opacity: 0.5;
        // background-color: yellow;
        .carrier {
          // transition: all 0.5s;
          // box-sizing: border-box;
          // padding: 65px;
          transform-style: preserve-3d;
          animation: rotate3d 7s linear infinite;
          width: 50%;
          margin: auto;
          height: 100%;
          position: absolute;

          img {
            border: 3px solid whitesmoke;
            box-shadow: 0 0 20px 0 whitesmoke;
            position: absolute;
            // top: 50%;
            // left: 50%;
          }
        }
      }
    }

    .explain {
      box-shadow: 20px -20px 0px 0px black;
      padding: 15px;
      box-sizing: border-box;
      border: 1px solid;
      flex: 1;

      // background-color: rgb(43, 255, 0);
      h4 {
        transition: all 0.5s;
        text-align: center;
      }

      p {
        transition: all 0.5s;
        line-height: 180%;
        text-indent: 30px;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }

  .share {
    transform-style: preserve-3d;
    display: flex;
    padding: 45px;
    height: 100%;
    box-sizing: border-box;
    align-content: space-around;
    align-items: center;
    justify-content: space-between;

    // .box3d {
    //   // height: 80%;
    //   // width: 20%;
    //   transform-style: preserve-3d;
    //   transform: rotate3d(1, 1, 1, 21deg);

    //   div {
    //     background-color: #fff;
    //     position: absolute;
    //   }

    //   // div:nth-child(1) {
    //   //   background-color: pink;
    //   //   height: 100%;
    //   //   width: 100%;
    //   // }
    //   // div:nth-child(2) {
    //   //   background-color: pink;
    //   //   height: 100%;
    //   //   width: 100%;
    //   // }
    // }

    > div {
      transform-style: preserve-3d;
      // transform: rotateX(70deg);
      margin: 3px;
      // box-shadow: inset 0 0px 20px 0px black;
      // transition: all 1s;
      // transform-origin: bottom;
      // transform: rotateX(70deg);
      // width: 30%;
      // height: 50%;
      // background-color: pink;
      // display: flex;
      transition: all 1s;
      transform-origin: bottom;
      width: 30%;
      height: 50%;
      // background-color: white;
      display: flex;
      flex-direction: column;
      align-content: space-around;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-items: center;

      img {
        height: 40%;
      }
      p {
        padding: 3px;
        text-align: center;
        box-sizing: border-box;
      }
      .c_ {
        position: absolute;
        box-shadow: inset 0 0 20px 5px rgb(255, 255, 255);
        // background-color: rgba(111, 98, 98, 0.699);
      }

      // @he =15;

      .before {
        width: 100%;
        height: 100%;
        transform: translateZ(15px);
      }

      .bottom {
        width: 100%;
        height: 15px;
        bottom: 0;
        transform-origin: bottom;
        transform: rotateX(-90deg);
      }
      .top {
        width: 100%;
        height: 15px;
        top: 0;
        transform-origin: top;
        transform: rotateX(90deg);
        box-shadow: inset 0 0 20px 0 rgba(255, 255, 255, 0.2);
      }
    }

    // > div:hover {
    // transform: rotateX(0);
    // }
  }
}

footer {
  .lyric {
    h1 {
      font-family: "yfjlhs";
      z-index: 9999999;
      box-sizing: border-box;
      padding: 10px;
      transition: all 5s;
      margin: 0;
      opacity: 0.2;
      color: mediumblue;
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

// 定义css动画
@keyframes rotate3d {
  0% {
    left: 0;
    transform: rotate3d(1, 1, 1, 0deg) scale3d(0.5, 0.5, 0.5);
  }

  25% {
    transform: rotate3d(1, 1, 1, 90deg) scale3d(0.8, 0.8, 0.8);
  }

  50% {
    left: 50%;
    transform: rotate3d(1, 1, 1, 180deg) scale3d(0.5, 0.5, 0.5);
  }

  75% {
    transform: rotate3d(1, 1, 1, 270deg) scale3d(0.8, 0.8, 0.8);
  }

  100% {
    left: 0;
    transform: rotate3d(1, 1, 1, 360deg) scale3d(0.5, 0.5, 0.5);
  }
}

        `;
let isHighlight = false;
const el = document.querySelector("#test");
const c = style.split("");
//  创建目标字符
let v = "";
//  当前字符坐标
let n = 0;
const val = setInterval(() => {
  if (n < c.length) {
    v += c[n];
    el.innerHTML = v;
    //   递增
    n++;
    el.scrollTop = 10000;
    if (isHighlight) hljs.highlightAll();
  } else {
    clearInterval(val);
  }
}, interval_codeEdit);
setTimeout(() => {
  el.classList.add("hljs");
  el.classList.add("language-less");
  isHighlight = true;
}, 10000);
