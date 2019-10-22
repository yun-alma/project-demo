//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    images: ['http://b387.photo.store.qq.com/psb?/V10TgznW0hkaL7/IguGPW74I1WHvpNkI3XRU9jjQv3pQcc.ZhvMjZOf1AI!/b/dIMBAAAAAAAA&bo=QAZdCbAPgBcRCQQ!&rf=viewer_4',
      'http://b232.photo.store.qq.com/psb?/V10TgznW0hkaL7/3cMpw1GPxyQpBlaxfTMCNK.UK1kax2Q7d0YJ3kuAcfs!/b/dOgAAAAAAAAA&bo=wAhABmET1w0RCRg!&rf=viewer_4',
      'http://b389.photo.store.qq.com/psb?/V10TgznW0hkaL7/n5DqBkHFiGiRM3fcSQJKttFjKX.fz9Xxt..dTmsYgQ8!/b/dIUBAAAAAAAA&bo=QAZdCbAPgBcRCQQ!&rf=viewer_4',
      'http://b385.photo.store.qq.com/psb?/V10TgznW0hkaL7/Maz.KzGVU.ClL4bSj*JY5DNUm4TvrxdOl2tsw98*rgU!/b/dIEBAAAAAAAA&bo=QAZdCbAPgBcRCQQ!&rf=viewer_4'
      ],
    indicatorDots: true, // 是否显示面板指示点
    vertical: false, // 滑动方向
    autoplay: true, // 是否自动切换
    circular: true, // 是否采用衔接滑动
    interval: 2000, // 自动切换时间间隔
    duration: 500, // 滑动动画时长
    previousMargin: 0, // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: 0, // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    iconImg:[
      'http://b317.photo.store.qq.com/psb?/V10TgznW0c5XMy/.wmT20OkrYmZAZy0orfTfB1JLPVj1tQsiSKx5IaYOtg!/b/dD0BAAAAAAAA&bo=AAWrBjAMQBARCfo!&rf=viewer_4',
      'http://b316.photo.store.qq.com/psb?/V10TgznW0c5XMy/MkE1yf*46kS0cq4VvdsEvG7CqkR6f7sLolLjQG0WVL4!/b/dDwBAAAAAAAA&bo=hANABoQDQAYRCT4!&rf=viewer_4',
      'http://b316.photo.store.qq.com/psb?/V10TgznW0c5XMy/zScYLJktfzewL8iDsmHE19IhCtTDn96mXFyG9hhmzso!/b/dDwBAAAAAAAA&bo=hANABoQDQAYRCT4!&rf=viewer_4',
      'http://b316.photo.store.qq.com/psb?/V10TgznW0c5XMy/2N7*CRcC.a5F6c8npsbjuFVDZqY5Iqqkll12kaLKYX4!/b/dDwBAAAAAAAA&bo=qwYABUAQMAwRCfo!&rf=viewer_4'
    ]
  },
  
})
