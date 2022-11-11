// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    //获取手机屏幕尺寸和显示尺寸
    const res = wx.getSystemInfoSync()
    console.log("windowWidth="+res.windowWidth+",windowHeight="+res.windowHeight)
    this.globalData.windowWidth = res.windowWidth
    this.globalData.windowHeight = res.windowHeight

  },
  onShow(options) {
    console.log("onShow");
    console.log(options.query)
  },
  onHide(){
    console.log("onHide")
  },
  onError(msg){
    console.log(msg)
  },
  globalData: {
    windowHeight:0,
    windowWidth:0,
  }
})
