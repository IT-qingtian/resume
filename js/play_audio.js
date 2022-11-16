var sound = new Howl({
  src: ["./video/whnqwhnq.mp3"],
  volume: 0.3,
});
const el_gc = document.querySelector("#gc");
el_gc.addEventListener("click", () => {
  if (!sound.playing()) sound.play();
});
const gc = `[00:00.000] 作词 : 张立长
[00:01.000]作曲:老王乐队
[00:03.770]
[00:15.750]在这个世界里
[00:18.260]寻找着你的梦想
[00:22.110]你问我梦想在哪里
[00:25.870]我还年轻我还年轻
[00:31.570]他们都说
[00:33.660]我们把理想都忘在
[00:37.330]在那轻狂的日子里
[00:40.810]我不哭泣
[00:43.070]我不逃避
[00:45.950]给我一瓶酒
[00:47.440]再给我一支烟
[00:49.720]说走就走
[00:51.170]我有的是时间
[00:53.490]我不想在未来的日子里
[00:56.870]独自哭着无法往前
[01:01.050]给我一瓶酒
[01:02.460]再给我一支烟
[01:04.690]说走就走
[01:06.150]我有的是时间
[01:08.220]我不想在未来的日子里
[01:11.970]独自哭着无法往前
[01:15.170]
[01:31.210]在这个世界里
[01:33.480]寻找着你的未来
[01:37.100]你问我未来在哪里
[01:40.870]我还年轻我还年轻
[01:46.370]他们都说
[01:48.330]我们把理想都忘在
[01:52.140]在那轻狂的日子里
[01:55.830]我不哭泣
[01:58.140]我不逃避
[02:01.030]给我一瓶酒
[02:02.360]再给我一支烟
[02:04.750]说走就走
[02:06.150]我有的是时间
[02:08.360]我不想在未来的日子里
[02:11.970]独自哭着无法往前
[02:16.060]给我一瓶酒
[02:17.370]再给我一支烟
[02:19.730]说走就走
[02:21.200]我有的是时间
[02:23.210]我不想在未来的日子里
[02:26.860]独自哭着无法往前
[02:30.770]
[03:00.730]我在青春的边缘挣扎
[03:04.420]我在自由的尽头凝望
[03:08.020]我在荒芜的草原上流浪
[03:12.210]寻找着理想
[03:15.700]我在青春的边缘挣扎
[03:19.250]我在自由的尽头凝望
[03:23.060]我在荒芜的草原上流浪
[03:27.180]寻找着寻找着理想
[03:39.550]
[04:05.000]给我一瓶酒
[04:06.170]再给我一支烟
[04:08.430]说走就走
[04:09.830]我有的是时间
[04:12.170]我不想在未来的日子里
[04:15.480]独自哭着无法往前
[04:19.780]给我一瓶酒
[04:21.100]再给我一支烟
[04:23.450]说走就走
[04:24.830]我有的是时间
[04:26.830]我不想在未来的日子里
[04:30.530]独自哭着无法往前
[04:34.680]给我一瓶酒
[04:36.120]再给我一支烟
[04:38.500]说走就走
[04:39.840]我有的是时间
[04:41.970]我不想在未来的日子里
[04:45.430]独自哭着无法往前
[04:49.800]给我一瓶酒
[04:51.070]再给我一支烟
[04:53.460]说走就走
[04:54.900]我有的是时间
[04:56.840]我不想在未来的日子里
[05:00.560]独自哭着无法往前
[05:04.850]给我一瓶酒
[05:06.130]再给我一支烟
[05:08.490]说走就走
[05:09.940]我有的是时间
[05:11.890]我不想在未来的日子里
[05:15.550]独自哭着无法往前
[05:19.850]给我一瓶酒
[05:21.150]再给我一支烟
[05:23.460]说走就走
[05:24.900]我有的是时间
[05:27.030]我不想在未来的日子里
[05:30.460]独自哭着无法往前
[05:34.830]给我一瓶酒
[05:36.120]再给我一支烟
[05:38.530]说走就走
[05:39.940]我有的是时间
[05:42.040]我不想在未来的日子里
[05:45.950]
`;
// 歌词被分解成一段一段
const gc2 = gc.split(/[\n]/);
// 当前进度生成 分 -秒 -毫秒
function fomatD(seek) {
  // 当前进度时间
  let i = seek.toFixed(2) - 0;
  // 进度分钟
  let m = 0;
  // 进度秒
  let s = Math.trunc(i);
  // 进度毫秒
  let hm = Math.trunc((i - s).toFixed(1) * 10) + "";
  // 秒转化
  if (s >= 60) {
    m = Math.trunc(s / 60);
    s -= m * 60;
  }
  m += "";
  s += "";
  if (m.length === 1) m = "0" + m;
  if (s.length === 1) s = "0" + s;
  // if (hm.length === 1) hm = "0" + hm;
  // return `[${m}:${s}.${hm}]`;
  return `[${m}:${s}.${hm}`;
}
sound.once("load", function () {
  console.log("加载完毕", sound);
  // 开始播放
  sound.play();
  let t;
  sound.on("play", () => {
    console.log("音频已开始播放");
    t = setInterval(() => {
      // 当前时间点
      const so = fomatD(sound.seek());
      // console.log(so);
      // 歌词查找
      //   let isBreak = false;
      // 这个时间点遍历歌词组
      gc2.some((item, index) => {
        // console.log(item);
        // 如果含有
        if (item.includes(so)) {
          const c = gc2[index].split("]")[1];
          gc2.splice(index, 1);
          if (c === "") {
            el_gc.innerText = "……";
          } else {
            el_gc.innerText = c;
          }
          return true;
        }
      });
      // console.log(sound.seek(), sound._duration);
    }, 60);
  });

  sound.on("end", () => {
    console.log("音频已播放结束");
    el_gc.innerText = "";
    clearInterval(t);
  });
});

//  是否开启 rendermode
function isRenderMode(isOpen) {
  if (isOpen) {
    // 渐变提高声音
    VolumeUp_down(1);
    // 背景颜色修改
    el_gc.style.backgroundColor = "black";
    // 宽高铺满
    el_gc.style.height = "100vh";
    el_gc.style.width = "100vw";
    // 透明度
    el_gc.style.opacity = "1";
    // 修改布局方案
    el_gc.style.display = "flex";
    el_gc.style.alignItems = "center";
    el_gc.style.justifyContent = "center";
    // 修改字体大小
    el_gc.style.fontSize = "13vh";
    // 修改字体的阴影
    el_gc.style.textShadow = "2px 2px 30px white";
    el_gc.style.color = "white";
    return;
  }
  // 渐变降低声音
  VolumeUp_down();
  // 清理背景
  el_gc.style.backgroundColor = "";
  setTimeout(() => {
    // el_gc.style.top = "";
    // 还原大小 默认盒子撑开
    el_gc.style.height = "";
    el_gc.style.width = "";
    // 透明度返回
    el_gc.style.opacity = "0.2";
    // 返回文字字体大小
    el_gc.style.fontSize = "";
    el_gc.style.color = "blue";
  }, 5000);
}

const volumeInfo = {
  max: 1,
  min: 0.3,
};
// 声音渐变
function VolumeUp_down(isUp) {
  //   获取当前音量
  let volume = sound.volume(),
    limit;
  if (isUp) {
    limit = volumeInfo.max;
  } else {
    limit = volumeInfo.min;
  }
  //   渐变修量
  const t = setInterval(() => {
    // 当前量大于极限量 那就停止并且就是极限量
    if (isUp ? volume >= limit : volume <= limit) {
      sound.volume(limit);
      clearInterval(t);
      return;
    }
    // 未到极限那就叠加
    isUp ? (volume += 0.1) : (volume -= 0.1);
    sound.volume(volume);
  }, 300);
}

console.log("isRenderMode", isRenderMode);
console.log("VolumeUp_down", VolumeUp_down);
