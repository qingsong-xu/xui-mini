// pages/components/component/component.js
Component({

  options:{
    pureDataPattern:/^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //属性定义有另种方式，简化和完整定义方式，简化方式只定义类型type，没有默认值。完整方式有类型type还有默认值
    myColor:{
      type:String,
      value:'0,0,0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor:''
  },

  //这是新的组件生命周期管理方式：有新的管理方式时，旧方式不会执行
  lifetimes:{
    created(){
      console.log("created")
    },
    attached(){
      console.log("attached")
    },
    ready(){
      console.log("ready")
    },
    moved(){
      console.log("moved")
    },
    detached(){
      console.log("detached")
    },
    error(){
      console.log("error")
    }
  },

  pageLifetimes:{
    show(){
      console.log("show")
      this._randomColor()
    },
    hide(){
      console.log("hide")
    },
    resize(){
      console.log("resize")
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR(){
      this.setData({
        '_rgb.r':this.data._rgb.r+5 > 255?0:this.data._rgb.r+5
      })
      console.log(this.data._rgb)
    },
    changeG(){
      this.setData({
        '_rgb.g':this.data._rgb.g+5>255?0:this.data._rgb.g+5
      })
      console.log(this.data._rgb)
    },
    changeB(){
      this.setData({
        '_rgb.b':this.data._rgb.b+5>255?0:this.data._rgb.b+5
      })
      console.log(this.data._rgb)
    },
    // 非事件处理方法，建议使用_开头
    _randomColor(){
      this.setData({
        _rgb:{
          r:Math.floor(Math.random() * 256),
          g:Math.floor(Math.random() * 256),
          b:Math.floor(Math.random() * 256)
        },
      })
      console.log(this.data.fullColor)
    }
  },
  observers:{
      '_rgb.r,_rgb.g,_rgb.b':function(r,g,b){
        this.setData({
          fullColor:`${r},${g},${b}`
        })
      }
      // '_rgb.**':function(obj){
      //   this.setData({fullColor:`${obj.r},${obj.g},${obj.b}`})
      // }
  }
})
