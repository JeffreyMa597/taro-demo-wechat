export default {
  pages: [
    "pages/index/index",
    "pages/mine/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    "selectedColor": "#33a3dc",
    "borderStyle": 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/hook.png',
        selectedIconPath: 'images/hook.png',
        // text: '档期',
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'images/hook.png',
        selectedIconPath: 'images/hook.png',
        // text: '我的',
      },
    ],
  },
};
