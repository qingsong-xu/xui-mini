// index.js
// 获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: '萌宠转发内容',
      path: '/pages/index/index'
    }
  },
  data: {
    latitude: "",
    longitude: "",
    controls:[{
      id:1,
      iconPath:'/resources/location.png',
      position:{
        left:100,
        top:100,
        width:17,
        height:17
      }
    }]
  },
  onShow(){
    this.getLocation();
  },
  getLocation(){
    var self = this
    wx.getLocation({
      type:"gcj02",
      altitude: 'false',
      success:function(res){
        self.setData({
          latitude:res.latitude,
          longitude:res.longitude
        });
        console.log("latitude="+latitude+",longitude="+longitude)
      },
      fail:function(){
        console.log("失败原因是啥啊")
      }
    })
  }

})
