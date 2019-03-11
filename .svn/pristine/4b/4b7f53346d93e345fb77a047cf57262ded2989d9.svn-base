//index.js
//获取应用实例
const app = getApp();
const PromotAdvaceUtil = require("../../utils/PromotAdvaceUtil.js");
 const ShareUtil = require("../../utils/ShareUtil.js");
Page({
  
  
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    });
    PromotAdvaceUtil.loadPromotAdvance(res => {
      console.log(res);
      if (res.data.sellAdvaceObj) {
        var sellAdvaceObj = res.data.sellAdvaceObj;
        this.setData({
          sellAdvaceObj:sellAdvaceObj
        });
      }
    });
  },

  //进入页面
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.navigateTo({
      url: '../result/result',
    })
  },

  onShareAppMessage: function (){
    return ShareUtil.shareCard();
  }
})
