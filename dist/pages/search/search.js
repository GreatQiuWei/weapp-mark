// pages/search/search.js
import { Douban } from './../../utils/apis.js';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    paragraph: '&emsp;人生就是一列开往坟墓的列车，路途上会有很多站，很难有人可以自始至终陪着走完。当陪你的人下车时，即使不舍也该心存感激，然后挥手道别。',
    result: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      quote: app.globalData.config.quote
    })
  },

  clearInput: function () {
    this.setData({
      inputVal: "",
      result: null
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**
   * 搜索
   */
  searchMovie: function(e) {
    const that = this;
    const { inputVal } = this.data;
    wx.showLoading({
      title: 'loading...',
    })
    Douban.get(Douban.SEARCH, {q: inputVal})
      .then(res => {
        that.setData({
          result: res.subjects
        })
      })
  },

  /**
   * 取消返回
   */
  goBack: function() {
    wx.navigateBack()
  }

})