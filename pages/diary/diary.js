Page({
  data: {
    diaryList: [],
    showModal: false,
    newTitle: '',
    newMood: 'happy',
    newObjective: '',
    newEmotion: '',
    newAwareness: '',
    newAction: ''
  },

  onLoad() {
    this.loadDiaries();
  },

  onShow() {
    this.loadDiaries();
  },

  loadDiaries() {
    try {
      const diaries = wx.getStorageSync('diaries') || [];
      this.setData({ diaryList: diaries });
    } catch (e) {
      console.error('加载日记失败', e);
    }
  },

  showAddModal() {
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

  hideModal() {
    this.setData({ showModal: false });
  },

  onModalMaskTap(e) {
    this.setData({ showModal: false });
  },

  onTitleInput(e) {
    this.setData({ newTitle: e.detail.value });
  },

  onObjectiveInput(e) {
    this.setData({ newObjective: e.detail.value });
  },

  onEmotionInput(e) {
    this.setData({ newEmotion: e.detail.value });
  },

  onAwarenessInput(e) {
    this.setData({ newAwareness: e.detail.value });
  },

  onActionInput(e) {
    this.setData({ newAction: e.detail.value });
  },

  selectMood(e) {
    this.setData({ newMood: e.currentTarget.dataset.mood });
  },

  saveDiary() {
    const { newTitle, newMood, newObjective, newEmotion, newAwareness, newAction, diaryList } = this.data;
    
    if (!newObjective.trim() && !newEmotion.trim() && !newAwareness.trim() && !newAction.trim()) {
      wx.showToast({
        title: '请至少填写一项内容',
        icon: 'none'
      });
      return;
    }

    const now = new Date();
    const moodMap = {
      happy: '开心',
      calm: '平静',
      sad: '难过',
      anxious: '焦虑'
    };

    const newDiary = {
      id: Date.now(),
      title: newTitle,
      mood: newMood,
      moodText: moodMap[newMood],
      objective: newObjective,
      emotion: newEmotion,
      awareness: newAwareness,
      action: newAction,
      day: now.getDate(),
      month: (now.getMonth() + 1) + '月',
      date: now.toLocaleDateString('zh-CN'),
      time: now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      timestamp: now.getTime()
    };

    const updatedList = [newDiary, ...diaryList];
    
    try {
      wx.setStorageSync('diaries', updatedList);
      this.setData({ 
        diaryList: updatedList,
        showModal: false 
      });
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      });
    } catch (e) {
      wx.showToast({
        title: '保存失败',
        icon: 'none'
      });
    }
  },

  viewDiary(e) {
    wx.showToast({
      title: '查看详情功能开发中',
      icon: 'none'
    });
  }
})