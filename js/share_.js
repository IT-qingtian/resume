// 好句分享
const share = [
  {
    t: "你日渐平庸，甘于平庸，将继续平庸。—— 《以自己喜欢的方式过一生》",
    a: "imgs/share_/WYtS-fyeyqem1610249.jpg",
  },
  {
    t: "夏虫不可语冰——庄子",
    a: "imgs/share_/`XV)_PYX3NMAQBK5(S4655O.png",
  },
  {
    t: "强者恒强，弱者恒弱——《道德经》",
    a: "imgs/share_/81c0-iipztff7716929.jpg",
  },
];
const el_share = document.querySelector(".share");
// 创建立方体
// const el_share_div = document.createElement("div");
// const d1 = document.createElement("div");
// const d2 = document.createElement("div");
// const d3 = document.createElement("div");
// const d4 = document.createElement("div");
// const d5 = document.createElement("div");
// const d6 = document.createElement("div");
// el_share_div.appendChild(d1);
// el_share_div.appendChild(d2);
// el_share_div.appendChild(d3);
// el_share_div.appendChild(d4);
// el_share_div.appendChild(d5);
// el_share_div.appendChild(d5);
// el_share_div.appendChild(d6);
// el_share_div.classList.add("box3d");
// el_share_div.style.width = el_share.clientWidth * 0.2 + "px";
// el_share_div.style.height = el_share.clientHeight * 0.8 + "px";
// const children = ;
// console.log(children);
// Array.from(el_share_div.children).map((item, index) => {
//   let is_before = -1;
//   if (index % 2 === 0) is_before *= -1;
//   const parent_kg = el_share.clientWidth * 0.2;
//   const parent_gd = el_share.clientHeight * 0.8;
//   let t = `translate3d(0,0,0)`;
//   let r = "";
//   switch (index) {
//     case 0:
//       t = `translate3d(0,0,${(parent_kg / 2) * is_before}px)`;
//       break;
//     case 1:
//       t = `translate3d(0,0,${(parent_kg / 2) * is_before}px)`;
//       break;
//     case 4:
//       t = `translate3d(0,${(parent_gd / 2) * is_before}px,0)`;
//       r = "rotateX(90deg)";
//       break;
//     case 5:
//       t = `translate3d(0,${(parent_gd / 2) * is_before}px,0)`;
//       r = "rotateX(-90deg)";
//       break;
//     case 2:
//       t = `translate3d(${(parent_kg / 2) * is_before}px,0,0)`;
//       r = "rotateY(90deg)";
//       break;
//     case 3:
//       t = `translate3d(${(parent_kg / 2) * is_before}px,0,0)`;
//       r = "rotateY(-90deg)";
//   }
//   item.style.transform = `${t} ${r} `;

//   item.style.width = el_share.clientWidth * 0.2 + "px";
//   if (index > 3) {
//     item.style.height = el_share.clientWidth * 0.2 + "px";
//     return;
//   }
//   item.style.height = el_share.clientHeight * 0.8 + "px";
// });

// el_share.appendChild(el_share_div);

// 创建语句分享
share.map((item, index) => {
  console.log(item);
  const div = document.createElement("div");
  div.classList.add("item");
  // 图片和语句
  const jsx = `
  <img src="${item.a}"
  alt="映射图加载失败" />
  <p>${item.t}</p>
  <div class='c_ before'></div>
  <div class='c_ bottom'></div>
  <div class='c_ top'></div>
  <div class='c_ left'></div>
  <div class='c_ right'></div>
  `;
  div.style.transform = "rotateX(70deg)";
  div.innerHTML = jsx;
  el_share.appendChild(div);
  div.addEventListener("click", (e) => {
    if (div.style.transform === "rotateX(0deg)" || div.style.transform === "") {
      console.log("ok");
      div.style.transform = "rotateX(70deg)";
      return;
    }
    div.style.transform = "rotateX(0deg)";
    // 下一页
    if (index === share.length - 1) {
      const top_ = clientHeight * 3;
      if (el_html.scrollTop < top_) {
        setTimeout(() => {
          // el_html.scrollTo({
          //   // left: 0,
          //   top: top_,
          //   behavior: "smooth",
          // });
          isRenderMode(1);
        }, 8000);
      }
    }
  });
});
