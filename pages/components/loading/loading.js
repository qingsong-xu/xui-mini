Page({
  data:{
    isloading:false,
    colorList:[],
    query:{}
  },

  onLoad(option){
    this.getColorList();
    this.setData({
      query:option
    })
  },

  onReady(){
    wx.setNavigationBarTitle({
      title: this.data.option.title,
    })
  },

  onReachBottom(){
    if(!this.data.isloading){
      this.getColorList();
    }else{
      console.log("正在加载中，进行节流")
    }
  },

  onPullDownRefresh(){
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method:'get',
      success:({data:res})=>{
        this.setData({colorList:[...res.data]});
      },
      complete:()=>{
        wx.stopPullDownRefresh({
          success: (res) => {console.log("下拉刷新，停止！")
        }
        })
      }
    })
  },

  getColorList(){
    this.data.isloading = true,

    wx.showLoading({
      title: '加载中...',
    })

    wx.request({
      url: 'https://www.escook.cn/api/color',
      method:'GET',
      success:({data:result})=>{
        console.log(result.data)
        this.setData({
          colorList:[...this.data.colorList,...result.data]
        })
      },
      complete:()=>{
        wx.hideLoading({
          success: (res) => {
            console.log("加载结束")
            this.data.isloading = false;
          },
        })
      }
    })
  }
})