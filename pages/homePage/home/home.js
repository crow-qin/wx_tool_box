const app = getApp()
const Pageu = app.require('utils/PageUtils.js')
Page({
  data: {
    mainList: [
      {
        text: '记账本',
        url: Pageu.BILL,
        color: '#c891fc'
      },
      {
        text: '笔记',
        url: Pageu.NOTE,
        color: '#91fca8'
      },
      {
        text: '骰子',
        url: Pageu.RANDOM,
        color: '#91d1fc'
      },
    ]
  },
  openPage(e) {
    console.log(e)
    Pageu.navTo(e.detail)
  }
})