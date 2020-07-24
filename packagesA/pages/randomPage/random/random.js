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
  switchTab(e) {
    console.log(e)
    this.setData({
      curTab: e.target.dataset.index
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
      let sum = 0
      that.data.billList.forEach(v=>{
        if(v.enable) {
          sum += v.val
        }
      })
      that.setData({
        sum 
      })
    }
    else {
      time = setTimeout(function () {
        // console.log(num);
        let arr = that.data.billList.map(v=>{
          if(v.enable) {
            let val = that.randomNum()
            return {...v,val}
          }
          return v

        })
        that.setData({
          billList: arr
        })
        that.setTimeouts(num)
      }, delay);
    }
  },
  randomNum(range=6, start=1) {
    return parseInt(Math.random()*range)+start
  },
  calcVal(e) {
    console.log(e)
    let value = e.detail
    let arr = this.data.billList.map((v,i)=>{
      return i<value ? {...v,enable: true} : {...v,enable: false}
    })
    console.log(value)
    this.setData({
      totalBill: value,
      billList: arr
    })
    console.log(this.data)
  }

})