//  取随机数，但在指定区间
const random_interval = (len, max) => {
  const r = Math.random();
  return len + (max - len) * r;
};
// 元素
const el_photoWall = document.querySelector(".photo .photoWall");
const el_image3d = document.querySelector(".photo .image3d");
let el_explain;
let el_data_;
let el_week_;
let el_weather_;
let el_text_;
// 普通展示图片地址
const address_photoWall_wall = [
  {
    address: "imgs/show_image_2d/2d (5).png",
    t1: "《工地篇》",
    t2: "初入工地",
    contentText: {
      date: "2022-5-1",
      weather: "晴",
      content: `今年五一劳动节这天，我托关系进了工地，开始了一个月的底层人民工作历练，我希望通过本次计划能够让我找回我为什么努力学技术的动力。
      我们的工位是散水，通俗来说就是每栋小区周边的排水渠，主要思路：砌砖修水沟->内外抹灰->内填底->压盖板。
      或许是好日子过久了 那一晚 工友的鼾声很大，硬生生躺在床上啥也不做 大概是三四点钟才睡着。相比以前在学校里室友的鼾声，以前简直太过幸运。
      宿舍的床很随意，宿舍卫生也很随意，工友们也很随意。但也只能随意。
      `,
    },
  },
  {
    address: "imgs/show_image_2d/2d (1).jpg",
    t1: "《工地篇》",
    t2: "恒心",
    contentText: {
      date: "2022-5-7",
      weather: "晴",
      content: `第一次进入工地，我没有任何经验，因此理所应当的成为了工地上最累 工资最低的小工。
      但我并不好高骛远，反而认为这才是对于我来说最有价值的历练路程。
      回想起来，当时规定的是上班时间 7.30-11.30   下午1.30-6.30，但几乎都是早出晚归，当时我还不理解为啥工人咋这么拼 后来才知道是因为想多赚点奖金。
      全局负责打杂，当时力气又小，时常出料速度跟不上大工修筑速度。好在工友叔叔们也理解我 更何况工头是我表哥。
      但就是在这种锤炼期 我本人比较务实 第一天我感到很充实，即使没人监督但全程我都在卖命 第三天我的感受就是腰酸背痛，成了一起床 腿抬不起来 腰仿佛瘫痪的感觉。但我当时骨子里的倔强还不至于让我三天就放弃 那会是我的耻辱  好在第七天时我几乎已经适应了这种生活。`,
    },
  },
  {
    address: "imgs/show_image_2d/2d (43).jpg",
    t1: "《工地篇》",
    t2: "干饭",
    contentText: {
      date: "2022-5-8",
      weather: "晴",
      content: `
      工地是一个及其卖力气的地方，因此 早中晚的干饭阶段是除了睡觉之外最安逸的时光。
      我们的早餐很随意 就找个路边摊 吃一两个包子，稀饭+泡菜，大概一个人五块钱。
      午餐则是在我们工地附近桥下有路边摊 每天有两家三轮拉一些吃的来卖快餐，12元一份，八九个菜 荤素都有 自己随便打 偶尔有鸡腿、卤肉等稀有菜品。
      当时我不明白他们是如何赚钱的 后来才猜想出答案，比较这种无营业执照的路边摊位服务对象也就是农民工。  食品卫生实际上或许也就遵循则吃不死人 那就卖。或许冰箱里放了两三天 择日加热出来继续售卖也看不出什么。 但要是他们正儿八经做 那肯定是比赔本买卖。
      我倒是对这些不反感，毕竟底层人民的生活就是这样，图吃个饱就好。没办法要求太高。只要不把恶心的那一套搬出来让人看见 哪怕你泡菜是脚踩的 不告诉我们 我们或许也吃得津津有味。
      晚餐倒是过意得去，晚上下班时间还比较充足 我们就去工地附近一个民工饭馆里点五六个菜，至少味道不错 菜品也够新鲜。
      `,
    },
  },
  {
    address: "imgs/show_image_2d/V[MYZA1GQ~QE9F~K29@]~S1.png",
    t1: "《工地篇》",
    t2: "工业魅力",
    contentText: {
      date: "2022-5-8",
      weather: "晴",
      content: `在工地上 见得最多的就是挖掘机、吊车…… 之类的大型玩意了 很是让人震撼，让我不得不在夜晚思索 到底人类的历史里 都有哪些鬼才的探索和发明造就了我们今天的社会`,
    },
  },
  {
    address: "imgs/show_image_2d/2d (23).jpg",
    t1: "《工地篇》",
    t2: "作业",
    contentText: {
      date: "2022-5-10",
      weather: "晴",
      content: `工地上的作业从来都不容易，说起来或许很轻松 但只有自己亲自体验过 才知道搬砖对于手指、手套的磨损很大;搅灰拉灰、推混凝土对力量的要求可比搬砖要难太多了，尤其是工地这种不规则地形。`,
    },
  },
  {
    address: "imgs/show_image_2d/2d (34).jpg",
    t1: "《工地篇》",
    t2: "感悟",
    contentText: {
      date: "2022-5-14",
      weather: "晴",
      content: `在工地待了一段时间，已经了解我们工位基本上的操作流程了，工地也并不是我以前印象中认为只要傻不拉几的卖力气就对了 其实看似憨厚的农民工们也有自己的那套个性和灵活的智慧。
      我也不是以前做啥都需要班长下命令才去死执行，而是猜想大工要做什么 我就去辅助 简化他们的工作量。
      在职十余日，我逐渐适应了工地的环境、地形特点。接受了我已经成年应该独当一面的定义。`,
    },
  },
  {
    address: "imgs/show_image_2d/2d (28).jpg",
    t1: "《工地篇》",
    t2: "陷入底层人民的思想",
    contentText: {
      date: "2022-5-18",
      weather: "轻度雾",
      content: `偶然一次拉砖的过程中 认识了一个阿姨，和阿姨一遍拉砖 一边聊天其中最让我了然现状的一句话就是 “一般来说，非国办的工程，农民工可没有什么所谓的法定假期” 平常学生可能在工地坚持两三天就寄了 但总有些人不得不重复一日又一日的磨砺，因为他们有家要扶持 不敢不做。  
      或许我刚开始来的时候 我还期盼着 明天下一场雨吧，或者刚好那天没料，这样就可以躺在床上睡好半天 再惬意的打几盘游戏 看看电视之类的。
      但我也同样惧怕下雨 因为这样就会颓废的过掉一天 并且少拿一天的工资。`,
    },
  },
  {
    address: "imgs/show_image_2d/2d (36).png",
    t1: "《工地篇》",
    t2: "陷入底层人民的思想",
    contentText: {
      date: "2022-5-26",
      weather: "烈阳",
      content: `当时老板花了两万块买了这台手动档拖拉机 用于加大作业效率，刚好我有驾照 有驾驶经验 工友叔叔们出于对我年轻人的照顾 也很放心的让我去驾驶 平常去拉砖、拉灰等等任务干脆就交给了我 毫无疑问，我靠着这台铁玩意 少做了很多苦力活。
      但由于工地环境和经验问题 特别是雨后的天气 一个月下来 车轮卡死在泥里的次数有两次 一组人每次都得花很大力气才弄出来。 工地路面从来不会平整 一个月爆胎三四次也是时常发生。
      也不知道小半年快过去了 这台老伙计又怎么样了`,
    },
  },
  {
    address: "imgs/show_image_2d/2d (19).png",
    t1: "《工地篇》",
    t2: "尾声",
    contentText: {
      date: "2022-5-31",
      weather: "多云",
      content: `快一个月的工地生活 已经让我知晓 在社会底层的生活并不是那么容易，想要养家糊口 那就只能当牛马 或许对于他们来说 娱乐时间也就过年的那几天 能够回到家和家人团聚 其他偶尔不工作的时间可以找个河 钓钓鱼 和工友聊聊天之类的吧。
      最终我也在月底离开了工地 总之 在工地上学到了不少温室里学不到的 也明白人性并不是像教科书上说的那么单纯，成年人的世界永远都是复杂的。
      最让我惊喜的却是我每天都过得很累 每次干饭都把自己干撑着 但一个月下来我却瘦了十斤。`,
    },
  },
];
// 3d照片地址
const address_image3d = [
  "imgs/show_image_3d/69M[S6U1GRCSM5U{OVUNZ@B.png",
  "imgs/show_image_3d/(IDEWM$GDC{U9ND4BQ)Y(@7.png",
  "imgs/show_image_3d/XP@O~{W9SA7J6FFPWZ2I{@R.png",
  "imgs/show_image_3d/XYII{@_TWJ8VR906M1]0`2D.png",
  "imgs/show_image_3d/Z_NSF5~J`}KO[$2ISS7)PIQ.png",
  "imgs/show_image_3d/L[V[UJR{O1D2A@7Z21~WH0S.png",
];
function get2dImageInfo(index) {
  const children = Array.from(el_explain.children);
  children.map((item) => {
    item.style.opacity = "0";
  });
  el_explain;
  const info = address_photoWall_wall[index].contentText;
  const weekNum = new Date(info.date).getDay();
  let week = "";
  switch (weekNum) {
    case 0:
      week = "星期天";
      break;
    case 1:
      week = "星期一";
      break;
    case 2:
      week = "星期二";
      break;
    case 3:
      week = "星期三";
      break;
    case 4:
      week = "星期四";
      break;
    case 5:
      week = "星期五";
      break;
    case 6:
      week = "星期六";
      break;
  }
  const parseDate = info.date.split("-");

  el_data_.innerText = `${parseDate[0]}年${parseDate[1]}月${parseDate[2]}日`;
  el_week_.innerText = week;
  el_weather_.innerText = `天气${info.weather}`;
  el_text_.innerText = info.content;
  //   li.style.boxShadow = "0 0 13px yellow";
  // 生成对应信息
  setTimeout(() => {
    children.map((item) => {
      item.style.opacity = "1";
    });
  }, 200);
}
//  初始建立3d图
let rotate_ = 0.5,
  rotate_deg = 40,
  scale_ = 0.5;
const init_image3d_el = () => {
  // el_image3d
  const carrier = document.createElement("div");
  //   const style = `rotate3d(${rotate_},${rotate_},${rotate_},${rotate_deg}deg) scale3d(${scale_},${scale_},${scale_})`;
  carrier.style.transform = style;
  console.log(style);
  //   控制转
  //   const timer_ = setInterval(() => {
  //     rotate_deg += 5;
  //     //   rotate_++;
  //     const style = `rotate3d(${rotate_},${rotate_},${rotate_},${rotate_deg}deg) scale3d(${scale_},${scale_},${scale_})`;
  //     carrier.style.transform = style;
  //   }, 5);

  carrier.classList.add("carrier");
  el_image3d.appendChild(carrier);
  // 建图
  address_image3d.map((address, index) => {
    // console.log(`图片路径——3${address}`);
    const el_img = document.createElement("img");
    el_img.src = address;
    // 图片高度和父级保持一致
    const parent_kg = carrier.clientHeight * 1;
    el_img.style.height = `${parent_kg}px`;
    el_img.style.width = `${parent_kg}px`;
    let is_before = -1;
    if (index % 2 === 0) is_before *= -1;
    let t = `translate3d(0,0,0)`;
    let r = "";
    switch (index) {
      case 0:
        t = `translate3d(0,0,${(parent_kg / 2) * is_before}px)`;
        break;
      case 1:
        t = `translate3d(0,0,${(parent_kg / 2) * is_before}px)`;
        break;
      case 2:
        t = `translate3d(0,${(parent_kg / 2) * is_before}px,0)`;
        r = "rotateX(90deg)";
        break;
      case 3:
        t = `translate3d(0,${(parent_kg / 2) * is_before}px,0)`;
        r = "rotateX(-90deg)";
        break;
      case 4:
        t = `translate3d(${(parent_kg / 2) * is_before}px,0,0)`;
        r = "rotateY(90deg)";
        break;
      case 5:
        t = `translate3d(${(parent_kg / 2) * is_before}px,0,0)`;
        r = "rotateY(-90deg)";
    }
    // console.log(`${t} ${r} `);
    el_img.style.transform = `${t} ${r} `;
    carrier.appendChild(el_img);
  });
};
let z_index = 1;
const init_image2d_el = () => {
  //  获取元素
  el_explain = document.querySelector(".explain");
  //   console.log(el_explain);
  el_data_ = el_explain.querySelector("#date");
  el_week_ = el_explain.querySelector("#week");
  el_weather_ = el_explain.querySelector("#weather");
  el_text_ = el_explain.querySelector(".text");
  //   console.log(el_data_);
  //   console.log(el_week_);
  //   console.log(el_weather_);
  //   console.log(el_text_);
  let left = 0;
  const el_ul_image_2d = document.createElement("ul");
  el_photoWall.appendChild(el_ul_image_2d);
  //   创建li
  address_photoWall_wall.map((item, index) => {
    const el_scale = random_interval(0.5, 0.8);
    const li = document.createElement("li");
    // 调节li属性
    li.style.height = el_ul_image_2d.clientHeight * 1 + "px";
    li.style.width = el_ul_image_2d.clientHeight * 1 + "px";
    li.style.transform = `rotateZ(${random_interval(
      -15,
      15
    )}deg) scale(${el_scale})`;
    li.style.left = left + 2 + "px";
    // 安放进ul
    el_ul_image_2d.appendChild(li);
    left += li.clientHeight * el_scale;

    // li里面放 东西
    li.innerHTML = `
        <img src="${item.address}" alt="图片加载失败">
        <p>${item.t1}</p>
        <p>${item.t2}</p>
    `;
    li.addEventListener("click", (e) => {
      if (index === address_photoWall_wall.length - 1) {
        const top_ = clientHeight * 2;
        if (el_html.scrollTop < top_) {
          setTimeout(() => {
            el_html.scrollTo({
              // left: 0,
              top: top_,
              behavior: "smooth",
            });
          }, 5000);
        }
      }
      li.style.zIndex = z_index;
      z_index++;
      get2dImageInfo(index);
    });
  });
};
init_image3d_el();
init_image2d_el();
