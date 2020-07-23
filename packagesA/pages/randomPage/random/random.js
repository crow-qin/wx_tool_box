Page({
  data: {
    tabList: [
      '摇一次',
      '统计'
    ],
    curTab: 0,
    // 骰子
    billList: [
      {
        val: 1,
        enable: true
      },
      {
        val: 1,
        enable: false
      },
      {
        val: 1,
        enable: false
      }
    ],
    sum: 0,
    timer: null,
    totalBill: 1
  },
  // watch(data,)
  switchTab(i) {
    this.setData({
      curTab: i
    })
  },
  startRandom() {
    this.setTimeouts(0)
  },
  // 
  setTimeouts(num,end=25,delay=100) {
    num++
    let time
    let that = this
    if (num >= end) {
      clearTimeout(time);
    }
    else {
      time = setTimeout(function () {
        // console.log(num);
        let arr = that.billList.map(v=>{
          if(v.enable) {

            let val = that.randomNum()
            return {...v,val}
          }
          return v

        })
        this.setData({
          billList: arr
        })
        that.setTimeouts(num)
      }, delay);
    }
  },
  randomNum(range=7, start=1) {
    return parseInt(Math.random()*range)+start
  }

})