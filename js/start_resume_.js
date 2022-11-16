const el_html = document.documentElement;
const clientHeight = document.body.clientHeight;

// 自我介绍模块
let class_index = 0;
const resumeInfo = [
  {
    title: "性格与爱好",
    contentHtml: [
      "性格1- 幽默、安静、礼貌、善解人意、无畏",
      "性格2- 保守、敏感、乏味",
      "爱好1- 喜欢沉浸式听歌",
      "爱好2- 喜欢和朋友夜跑以发泄消极情绪",
      "爱好3- 遇事不决 那就摆烂",
    ],
  },
  {
    title: "专业能力",
    contentHtml: [
      "熟练使用<span>HTML5</span><span>CSS3</span><span>javaScript</span>",
      "基于原生js，能够灵活使用运用<span>Vue2</span>框架进行产品开发。对<span>react</span>有初步了解",
      "对<span>CheatEngine、olldebg</span>有一定了解 知晓程序内存数据知识。",
      "初中时 有两年易语言内存型外挂程序开发能力 后期有与第三方代练签订过技术转让合同经历。",
      "对<span>socketIo</span>有了解，懂得联网页程序机制。",
      "懂得如何正确使用<span>MongoDB</span>数据库",
      "曾使用<span>nodejs</span>进行简单的小型全栈开发。",
      "熟悉<span>PhotoShop</span>、<span>Office</span>等常用软件",
      "带领过画师团队，通过协作 了解过3d<span>blander</span>建模、live2d等2d、3d处理程序。",
      "……",
    ],
  },
  {
    title: "高级项目经历",
    contentHtml: [
      "项目名称——从截图到机甲旋风",
      "项目类型——横板伪3d格斗游戏，类似dnf（地下城与勇士），原作腾讯机甲旋风[原作已关服]",
      "技术栈采用：socket+nodejs+mongodb+vue2.x+e+t_packer+ia5+pixijs6.x 由github进行代码管理 后续接入腾讯qqApi、BaiduMapApi",
      "项目由本人去年中旬发起，本人独立完成 素材压缩、全局联网、服务器维护、前后端开发与交互、",
      "印象深的功能：1、家族管理系统，此功能包括了 家族抽奖模块、家族管理模块(权限处理)、家族资金库交互、家族排名系统、家族注能系统、家族等级系统…… 2、机体契合 3、联网模式下的同步传输。4、交互解码。5、装备系统、rpg系统",
      "我在项目中担任角色：总开发指挥官   ——其成员包含插画师一名、低级建模一名、中级建模一名、临摹师一名、动画师1名、PBS一名",
      "项目进度：已完善非副本地区联网及其正常操作，接入QQ登陆进游戏，正在攻克素材桎梏 全力进军副本系统。",
    ],
  },
  {
    title: "自我评定",
    contentHtml: [
      "具有引导团队的经验，能够结合各个组成员的优势来配合主体获得最大收益。",
      "有较强的自学能力，能够精准快速的在互联网上获得精确答案。",
      "性格坚定、诚恳稳重、身体素质较好、适应环境能力强`",
      "做事不够认真、过度自卑、对异性有恐惧感，不善交际。",
    ],
  },
];
// 渲染标题速度
const interval_title = 100;
// 渲染内容速度
const interval_content = 100;
// 测试速度
// const interval_content = 1;
// 内容元素
const el_cont = document.querySelector("#cont");

const el_resume_template = document.querySelector(".resume_template");

let tA = ``;
//  开始讲述。
function show_resume() {
  const el_head = document.querySelector(".animated .head");
  el_head.style.left = "0";
  //   const el_cont = document.querySelector(".animated .cont");
  //   el_cont.style.left = "0";

  //   载入数据

  // 初始第一大类
  render_item(resumeInfo[class_index]);
}
//  渲染类列
const render_item = (item) => {
  //  解构
  const { title, contentHtml } = item;
  // 创建item板  -div
  const el_item = document.createElement("div");
  //   模板的位置
  el_item.style.position = "relative";
  //   console.log("------");
  //   console.log(class_index, class_index / 2);
  //   console.log("------");
  if (class_index % 2 === 0) {
    // console.log("l");
    el_item.style.left = "200%";
  } else {
    // console.log("r");
    el_item.style.left = "-200%";
  }

  //  位置更替
  setTimeout(() => {
    el_item.style.left = "0";
  }, 200);

  el_item.classList.add("resume_item");
  el_cont.appendChild(el_item);

  //  创建标题-标签
  const el_title = document.createElement("h3");
  el_item.appendChild(el_title);
  //    编辑内容-标题
  let history_title = "";
  // 数组
  const el_title_textArea = title.split("");
  //   字符标号
  let el_title_textArea_index = 0;
  //    开始构造标题
  const timer_t = setInterval(() => {
    history_title += el_title_textArea[el_title_textArea_index];
    el_title.innerText = history_title;
    el_title_textArea_index++;

    //  标题渲染完毕
    if (history_title === title) {
      clearInterval(timer_t);
      //   渲染html内容
      //   console.log("本项标题渲染完毕 正在渲染content", contentHtml);
      //    创建父盒
      const el_ul = document.createElement("ul");
      //  加载进去
      el_item.appendChild(el_ul);
      //    分别渲染contenthtml
      const item_len = contentHtml.length;
      //   渲染li，参数1 渲染内容组，渲染编号
      function render_item_item(contentHtml, index) {
        // 渲染编号超过
        if (index + 1 > contentHtml.length) {
          console.log("大类渲染li完毕 开始请求渲染下一组大类");
          class_index++;
          // 渲染下一组
          if (class_index <= resumeInfo.length - 1) {
            render_item(resumeInfo[class_index]);
          } else {
            console.log("渲染完毕");
            // 下一页
            if (el_html.scrollTop < clientHeight) {
              setTimeout(() => {
                el_html.scrollTo({
                  // left: 0,
                  top: clientHeight,
                  behavior: "smooth",
                });
              }, 1000);
            }
          }

          return;
        }

        // 渲染进li
        const el_li = document.createElement("li");
        const el_p = document.createElement("p");
        el_ul.appendChild(el_li);
        el_li.appendChild(el_p);
        // 单段文字分解
        const area = contentHtml[index].split("");
        // 当前内容
        let history_content_item = "";
        // 下标
        let history_content_index = 0;
        // 设定定时器
        const timer_content_item = setInterval(() => {
          history_content_item += area[history_content_index];
          history_content_index++;
          //    渲染结束
          if (history_content_item === contentHtml[index]) {
            clearInterval(timer_content_item);
            // 开始渲染下一个条例
            render_item_item(contentHtml, index + 1);
            el_p.innerHTML = history_content_item;
          } else {
            el_p.innerHTML = history_content_item + "_";
          }
          el_resume_template.scrollTop = 100000;
        }, interval_content);
      }
      // 始调用。
      render_item_item(contentHtml, 0);

      //   contentHtml.map((item, index) => {
      //     // 渲染进li
      //     const el_li = document.createElement("li");
      //     const el_p = document.createElement("p");
      //     el_ul.appendChild(el_li);
      //     el_li.appendChild(el_p);
      //     // 单段文字分解
      //     const area = item.split("");
      //     let history_content_item = "";
      //     let history_content_index = 0;
      //     const timer_content_item = setInterval(() => {
      //       history_content_item += area[history_content_index];
      //       history_content_index++;
      //       el_p.innerHTML = history_content_item;
      //       //    渲染结束
      //       if (history_content_item === item) {
      //         clearInterval(timer_content_item);
      //       }
      //     }, 100);
      //   });
      //   cb && cb();
    }
  }, interval_title);
};

setTimeout(() => {
  show_resume();
}, 1000);
