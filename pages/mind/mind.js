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
  },

  onShareAppMessage() {
    return {
      title: 'To Be Better - 心理',
      desc: '关注内心，健康成长',
      path: '/pages/mind/mind'
    };
  },

  onShareTimeline() {
    return {
      title: 'To Be Better - 关注内心，健康成长',
      query: '',
      imageUrl: ''
    };
  }
})