Page({
  data: {
    
  },

  onLoad() {
    
  },

  navigateTo(e) {
    const type = e.currentTarget.dataset.type;
    if (type === 'mind') {
      wx.navigateTo({
        url: '/pages/mind/mind'
      });
    } else if (type === 'body') {
      wx.navigateTo({
        url: '/pages/body/body'
      });
    } else {
      wx.showToast({
        title: '功能开发中',
        icon: 'none'
      });
    }
  },

  onShareAppMessage() {
    return {
      title: 'To Be Better - 成为更好的自己',
      desc: '关注身心健康，记录美好生活',
      path: '/pages/index/index'
    };
  },

  onShareTimeline() {
    return {
      title: 'To Be Better - 成为更好的自己',
      query: '',
      imageUrl: ''
    };
  }
})
