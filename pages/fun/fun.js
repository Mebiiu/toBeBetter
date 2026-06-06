Page({
  data: {
    
  },

  onLoad() {
    
  },

  navigateTo(e) {
    const type = e.currentTarget.dataset.type;
    if (type === 'talkShow') {
      wx.navigateTo({
        url: '/pages/fun/talkshow'
      });
    }
  },

  onShareAppMessage() {
    return {
      title: '轻松一刻',
      desc: '放松心情，快乐生活',
      path: '/pages/fun/fun'
    };
  },

  onShareTimeline() {
    return {
      title: '轻松一刻 - 放松心情，快乐生活',
      query: '',
      imageUrl: ''
    };
  }
});