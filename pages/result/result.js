// pages/result/result.js
var app = getApp();
const ShareUtil = require("../../utils/ShareUtil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      [3,4,8,10,18,19,20,25],
      [4,3,16,19,5,10,27,26],
      [0, 5,11 ,13, 34,23,32, 38],
      [1, 15, 3, 4, 8, 20, 25, 19],
      [9, 11, 13, 12, 15, 21, 30, 17],
      [10, 24, 27, 29, 31, 25, 30,33]
    ],
    arr: [],
    hello:"你好！",
    showAvatar:true,
    currentNum:0,
    items:[
      { tittle: "冒充男朋友",bgc:"#fff",id:"0"},
      { tittle: "冒充女朋友", bgc: "#fff", id: 1},
      { tittle: "陪过夜(倒贴)", bgc: "#fff", id: 2},
      { tittle: "牵牵小手", bgc: "#fff", id: 3},
      { tittle: "亲亲小嘴", bgc: "#fff", id:4},
      { tittle: "哄你睡觉觉", bgc: "#fff", id: 5},
      { tittle: "一起蹦迪", bgc: "#fff", id: 6},
      { tittle: "当你小弟", bgc: "#fff", id: 7},
      { tittle: "抱抱你", bgc: "#fff", id: 8},
      { tittle: "陪打麻将", bgc: "#fff", id: 9},
      { tittle: "陪看电影", bgc: "#fff", id: 10},
      { tittle: "代打前任", bgc: "#fff", id: 11},
      { tittle: "叫你起床", bgc: "#fff", id: 12}, 
      { tittle: "向你告白", bgc: "#fff", id: 13}, 
      { tittle: "带你吃鸡", bgc: "#fff", id: 14}, 
      { tittle: "给你做饭", bgc: "#fff", id: 15}, 
      { tittle: "一起吃火锅", bgc: "#fff", id: 16}, 
      { tittle: "拜见父母", bgc: "#fff", id: 17}, 
      { tittle: "假装情侣", bgc: "#fff", id: 18}, 
      { tittle: "共进晚餐", bgc: "#fff", id: 19}, 
      { tittle: "说情话撩你", bgc: "#fff", id: 20}, 
      { tittle: "陪你唱歌", bgc: "#fff", id: 21}, 
      { tittle: "假装情侣", bgc: "#fff", id: 22}, 
      { tittle: "唱歌给你听", bgc: "#fff", id: 23}, 
      { tittle: "打扫卫生", bgc: "#fff", id: 24}, 
      { tittle: "跟你撒娇", bgc: "#fff", id: 25}, 
      { tittle: "陪你喝酒", bgc: "#fff", id: 26}, 
      { tittle: "逗你开心", bgc: "#fff", id: 27}, 
      { tittle: "一起开黑", bgc: "#fff", id: 28}, 
      { tittle: "帮你洗衣服", bgc: "#fff", id: 29}, 
      { tittle: "抓娃娃", bgc: "#fff", id: 30}, 
      { tittle: "吃好吃的", bgc: "#fff", id: 31}, 
      { tittle: "一起运动", bgc: "#fff", id: 32}, 
      { tittle: "陪你下午茶", bgc: "#fff", id: 33}, 
      { tittle: "一起开黑", bgc: "#fff", id: 34}, 
      { tittle: "说情话暖你", bgc: "#fff", id: 35}, 
      { tittle: "一起跑步", bgc: "#fff", id: 36}, 
      { tittle: "一起游泳", bgc: "#fff", id: 37}, 
      { tittle: "穿情侣装", bgc: "#fff", id: 38}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.changehuan(this.data.currentNum)
    wx.showShareMenu({
      withShareTicket: true
    });
  },
  // /**
  //  * 点击随机选中8个选项
  //  */
  // cilckRandom:function(e){
  //   var array = this.randomNumber(0, this.data.items.length - 1, 8)
  //   this.data.arr.splice(0, this.data.arr.length); 
  //   for (var i = 0; i < array.length;i++){
  //     this.data.items[array[i]].bgc = "#FF808B";
  //     this.data.arr.push(this.data.items[array[i]].tittle);
  //   }
  //   this.setData({
  //     items: this.data.items
  //   })
  // },
  // /**
  //  * 随机在指定范围内生成8个不同的数
  //  */
  // randomNumber: function (first, last,num) {
  //   var arr = [];
  //   for (var i = first; i <= last; i++) {
  //     arr.push(i);
  //   }
  //   arr.sort(
  //     function () {
  //       return 0.5 - Math.random();
  //     }
  //   );
  //   arr.length = num;
  //   return arr;
  // },
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
   * 选择选项或取消选项
   */
  chageBgc:function(e){
    
    var index=e.target.dataset.d;
    var text ="items["+index+"].bgc";
    var bg = this.data.items[index].bgc == "#fff" ? "#FF808B" :"#fff";
    if (this.data.arr.length < 8) {
      if (bg =="#FF808B"){
      var txt = e.target.dataset.t;
      this.data.arr.push(txt);
    }else{
      var txt=e.target.dataset.t;
      var fg = this.data.arr.indexOf(txt);
      this.data.arr.splice(fg,1)
    }
    this.setData({
      [text]: bg
    })
    }else{
      var txt = e.target.dataset.t;
      var fg = this.data.arr.indexOf(txt);
      if(fg!=-1){
      this.data.arr.splice(fg, 1)
       this.setData({
      [text]: bg
    })
      }
    }
  },
  /**
   * 生成海报按钮，跳转sharePhoto页面
   */
  toSharePage:function(){
    var tempFilePaths = this.data.tempFilePaths;
    var textArr=this.data.arr;
    if(textArr.length>0){
    app.globalData.textArr = textArr;

    wx.navigateTo({
      url: '../sharePhoto/sharePhoto?touxiang='+tempFilePaths
    })
    }else{
      wx.showToast({
        title: '请至少选择一个你的经营项目',
        icon: "none"
        
      })
    }
  },
  /**
   * 更换头像
   */
  dianji:function(){
    wx.chooseImage({
      count: 1,
      success: res => {
        this.setData({
          tempFilePaths:res.tempFilePaths,
          showAvatar:false
        })
       
      }
    })
  },
  huanyipi:function(e){
    var num = this.data.currentNum + 1 == 5 ? 0 : this.data.currentNum + 1
    this.data.currentNum=num
    this.changehuan(num)
  }
,
  changehuan:function(num){
    for (var i = 0; i < this.data.items.length; i++) {
      this.data.items[i].bgc = "#fff";
    }
      var sarr = this.data.array[num];
    console.log(sarr)
    for (var i = 0; i < sarr.length;i++){
      this.data.arr[i] = this.data.items[sarr[i]].tittle 
      console.log(this.data.arr[i] )
      this.data.items[sarr[i]].bgc ="#FF808B";
      }

      this.setData({
        items: this.data.items
      })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return ShareUtil.shareCard();
  }
})