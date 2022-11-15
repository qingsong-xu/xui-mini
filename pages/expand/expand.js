// pages/expand/expand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 自定义方法，用于子组件向父组件传递的示例
  syncCount(result){
    console.log(result)
    this.setData({count:result.detail.re})
  },

  // 这里的方法名有讲究，不能取selectComponent，否则会出现一直回到导致steck溢出;其次注意selectComponent(".countComponent")参数是class或id的名字，别忘了.或#
  myF(){
      const child = this.selectComponent(".countComponent")
      child.addCount()
  }
})