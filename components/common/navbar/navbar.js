Component({
  data: {
    placeholderStyle:"",
    navBarStyle:"",
    statusNavBarStyle:"",
  },
  properties: {
    title: {
      type: [String],
      default: '',
    },
    back: {
      type: [Boolean],
      default: true,
    },
    
    background: {
      type: [String],
      default: '#fff',
    },
    
    placeholder: {
      type: [Boolean],
      default: true,
    },
    fontColor: {
      type:String,
      default: 'color-3'
    },
    // 为返回键增加额外功能
    addBack: {
      type: Boolean,
      default: false
    }
  },
  onLoad() {
    this.statusNavBarStyle = this.styleObjToStr({
      background:this.background
    })
    try {
				
      //调整状态栏和导航栏的高度
      var style={}
        const res = uni.getSystemInfoSync();
        console.log(res);
      
      //设置状态栏高度，导航栏高度默认44px
      style["margin-top"]=res.statusBarHeight+"px"
       this.navBarStyle=this.styleObjToStr(style)
        
      
      //若不在微信小程序，则下面代码不会执行
      const wxHeader = wx.getMenuButtonBoundingClientRect();
      console.log(wxHeader)
            
      //小程序中，导航栏高度由小程序右上角的菜单键位置计算得出
      style["height"]=(wxHeader.bottom+wxHeader.top-res.statusBarHeight-res.statusBarHeight)+"px"
      //导航栏右侧按钮需增加右边距，跟小程序菜单错开
      // style["margin-right"]=(wxHeader.width+10)+"px"
      
      this.navBarStyle=this.styleObjToStr(style)
      
      this.placeholderStyle = this.styleObjToStr({"height":wxHeader.bottom+3+"px"})
      
    } catch (e) {
        // error
    }
  },
  methods: {
    goBack:function(){
      if(this.addBack) {
        this.triggerEvent('backFunc')
        return 
      }
      wx.navigateBack()
    },

    
    styleObjToStr:function(style){
      var styleStr=""
      let keys = Object.keys(style)
      for(let i=0;i<keys.length;i++){
        styleStr+=keys[i]+":"+style[keys[i]]+";"
      }
      return styleStr
    }
  }
})