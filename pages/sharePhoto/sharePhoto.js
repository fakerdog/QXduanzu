// pages/sharePhoto/sharePhoto.js
const app = getApp();
const ShareUtil = require("../../utils/ShareUtil.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenCanvas: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在生成中',
      mask:true
    })
    this.setData({
      tempFilePaths: options.touxiang
    });

    //获取用户系统
    wx.getSystemInfo({
      success: res=> {
        var iphone = true;
        var system = res.system;
        if (system.indexOf("iOS") > -1) {
          iphone = true;
        } else {
          iphone = false;
        }
        this.setData({
          iphone: iphone
        });
      }
    });

    this.drawShareImg();
    wx.showShareMenu({
      withShareTicket: true
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

/**
 * 画图前获取资源
 */
  drawShareImg: function () {

    this.setData({
      hiddenCanvas: false
    });
      //  var avatarUrl = userInfo.avatarUrl;
    var userInfo=app.globalData.userInfo;
    var avatarUrl = userInfo.avatarUrl;

    wx.getImageInfo({
      src: app.CDN_URL+'erweima_v14.jpg',
      success: res => {
        wx.getImageInfo({
          src: app.HTTP_SERVER + "app/imageinfo/getImageByURL.htm?imgUrl="+avatarUrl,
          success: avrRes => {
            this.data.avatarUrl=avrRes.path;
            this._drawShareImg(res.path);
          },
          fail: res => {
          }
        });
      },
      complete:res=>{
        //this._drawShareImg();
      }
    });
  },

  /**
   * 画图
   */
  _drawShareImg: function(path){
    var that=this;
    var destWidth = 1050;
    var destHeight = 1770;
    this.setData({
      hiddenCanvas: false
    });
    var resultArr = app.globalData.textArr;
    var userInfo = app.globalData.userInfo;
    var nickName = userInfo.nickName;
    
    var tempFilePaths = that.data.tempFilePaths;
    const ctx = wx.createCanvasContext('shareCanvas');
    ctx.drawImage("../../images/shareimage.png",0 , 0, destWidth, destHeight);
    ctx.drawImage(path, 100, 1220, 240, 240);
    if (tempFilePaths != "" && tempFilePaths != null && tempFilePaths != undefined && tempFilePaths !="undefined"){
      ctx.drawImage(tempFilePaths, 70, 400, 300, 300);
    }else{
      ctx.drawImage(this.data.avatarUrl, 70, 400, 300, 300);
    }
    
    ctx.setFontSize(54);
    ctx.setFillStyle("#764c24");
    ctx.fillText("经营项目：",100,780);
    ctx.setFontSize(45);
    ctx.setFillStyle("#fff");
    ctx.textAlign = 'left';
    for (var i = 0; i < resultArr.length; i++) {
      if (i < 9) {
        if (i % 2 == 0) {
          ctx.fillText("■ "+resultArr[i], 100, 860 + i * 50);
        } else {
          ctx.fillText("■ "+resultArr[i], 510, 860 + (i - 1) * 50);
        }
      }
    }
    ctx.draw(true, res => {
      wx.canvasToTempFilePath({//把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。
        width: destWidth,//画布宽度
        height: destHeight,//画布高度
        destWidth: destWidth,//输出图片宽度
        destHeight: destHeight,//输出图片高度
        canvasId: 'shareCanvas',
        success:res=> {
          this.setData({
            imagePath: res.tempFilePath,
            hiddenCanvas: true 
          });
        },
        complete: function (res) {
          wx.hideLoading()
        }
      });
    });

  },

  /**
   * 保存图片
   */
  saveImg:function(){
    var that=this;
    var Iamgepath = that.data.imagePath;
    wx.saveImageToPhotosAlbum({ //保存图片到相册
      filePath: Iamgepath,
      success: res => {
        wx.showToast({
          title: '图片已保存到相册',
          icon: "success"
        })
      },
      complete: res => {
        
      }
    });
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return ShareUtil.shareCard();
  }
})