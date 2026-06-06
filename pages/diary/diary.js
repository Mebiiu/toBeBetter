Page({
  data: {
    diaryList: [],
    showModal: false,
    showPreview: false,
    previewDiary: null,
    newTitle: '',
    newMood: 'happy',
    newObjective: '',
    newEmotion: '',
    newAwareness: '',
    newAction: '',
    keyboardHeight: 0
  },

  onLoad: function() {
    this.loadDiaries();
    this.listenKeyboard();
  },

  listenKeyboard: function() {
    wx.onKeyboardHeightChange(function(res) {
      this.setData({ keyboardHeight: res.height });
    }.bind(this));
  },

  onShow: function() {
    this.loadDiaries();
  },

  loadDiaries: function() {
    try {
      var diaries = wx.getStorageSync('diaries') || [];
      this.setData({ diaryList: diaries });
    } catch (e) {
      console.error('加载日记失败', e);
    }
  },

  showAddModal: function() {
    this.setData({
      showModal: true,
      newTitle: '',
      newMood: 'happy',
      newObjective: '',
      newEmotion: '',
      newAwareness: '',
      newAction: ''
    });
  },

  hideModal: function() {
    this.setData({ showModal: false });
  },

  onModalMaskTap: function(e) {
    if (e.target === e.currentTarget) {
      this.hideModal();
    }
  },

  selectMood: function(e) {
    var mood = e.currentTarget.dataset.mood;
    this.setData({ newMood: mood });
  },

  onTitleInput: function(e) {
    this.setData({ newTitle: e.detail.value });
  },

  onObjectiveInput: function(e) {
    this.setData({ newObjective: e.detail.value });
  },

  onEmotionInput: function(e) {
    this.setData({ newEmotion: e.detail.value });
  },

  onAwarenessInput: function(e) {
    this.setData({ newAwareness: e.detail.value });
  },

  onActionInput: function(e) {
    this.setData({ newAction: e.detail.value });
  },

  onInputConfirm: function() {
    wx.hideKeyboard();
  },

  saveDiary: function() {
    var now = new Date();
    var date = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    var time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
    
    var moodTextMap = {
      happy: '开心',
      calm: '平静',
      sad: '难过',
      anxious: '焦虑'
    };

    var newDiary = {
      id: Date.now(),
      title: this.data.newTitle,
      mood: this.data.newMood,
      moodText: moodTextMap[this.data.newMood],
      objective: this.data.newObjective,
      emotion: this.data.newEmotion,
      awareness: this.data.newAwareness,
      action: this.data.newAction,
      date: date,
      time: time,
      day: now.getDate(),
      month: (now.getMonth() + 1) + '月'
    };

    try {
      var diaries = wx.getStorageSync('diaries') || [];
      diaries.unshift(newDiary);
      wx.setStorageSync('diaries', diaries);
      this.setData({ diaryList: diaries });
      this.hideModal();
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      });
    } catch (e) {
      console.error('保存日记失败', e);
      wx.showToast({
        title: '保存失败',
        icon: 'none'
      });
    }
  },

  viewDiary: function(e) {
    wx.showToast({
      title: '查看详情功能开发中',
      icon: 'none'
    });
  },

  shareDiary: function(e) {
    var id = e.currentTarget.dataset.id;
    var diaryList = this.data.diaryList;
    var diary = null;
    
    for (var i = 0; i < diaryList.length; i++) {
      if (diaryList[i].id === id) {
        diary = diaryList[i];
        break;
      }
    }
    
    if (!diary) {
      wx.showToast({
        title: '未找到日记',
        icon: 'none'
      });
      return;
    }

    this.setData({
      previewDiary: diary,
      showPreview: true
    });
  },

  hidePreview: function() {
    this.setData({
      showPreview: false,
      previewDiary: null
    });
  },

  onShareAppMessage: function() {
    return {
      title: 'To Be Better - 觉察日记',
      desc: '记录当下，觉察自我',
      path: '/pages/diary/diary'
    };
  },

  onShareTimeline: function() {
    return {
      title: 'To Be Better - 记录当下，觉察自我',
      query: '',
      imageUrl: ''
    };
  }
});
