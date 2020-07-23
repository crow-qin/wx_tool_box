const self = {
  // 主页
  HOME: '/pages/homePage/home/home',
  RANDOM: '/packagesA/pages/randomPage/random/random',

  navTo(url,data={}) {
    if(data) {
      url = url + "?" + KEY_DATA + "=" + encodeURIComponent(JSON.stringify(data))
    }
    wx.wx.navigateTo({
      url: url
    })
  },
  navBack(i=1) {
    wx.wx.navigateBack({
      delta: i
    })
  }
}
module.exports = self