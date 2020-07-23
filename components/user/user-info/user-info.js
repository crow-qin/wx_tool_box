const app = getApp()
const Pageu = app.require('utils/PageUtils.js')

Component({
  data: {},
  properties: {
    userInfo: {
      type: [Function, Object]
    },
    hasInfo: {
      type: Boolean
    },
    canIUse: {
      type: Boolean
    }
  },
  onLoad() {
    console.log(this.userInfo)
  },
  methods: {
    getUserInfo(e) {
      this.triggerEvent('getUserInfo',e)
    },
    openPage() {
      this.triggerEvent('openPage',Pageu.LOG)

    }
  }
  
})