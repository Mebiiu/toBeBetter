Page({
  data: {
    
  },

  onLoad() {
    
  },

  navigateTo(e) {
    const type = e.currentTarget.dataset.type;
    if (type === 'diary') {
      wx.navigateTo({
        url: '/pages/diary/diary'
      });
    }
  }
})