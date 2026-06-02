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
    } else {
      wx.showToast({
        title: '功能开发中',
        icon: 'none'
      });
    }
  }
})
