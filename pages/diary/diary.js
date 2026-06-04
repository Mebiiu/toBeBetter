Page({
  data: {
    diaryList: [],
    showModal: false,
    newTitle: '',
    newMood: 'happy',
    newObjective: '',
    newEmotion: '',
    newAwareness: '',
    newAction: '',
    progressPercent: 0
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
    this.calculateProgress();
  },

  onObjectiveInput(e) {
    this.setData({ newObjective: e.detail.value });
    this.calculateProgress();
  },

  onEmotionInput(e) {
    this.setData({ newEmotion: e.detail.value });
    this.calculateProgress();
  },

  onAwarenessInput(e) {
    this.setData({ newAwareness: e.detail.value });
    this.calculateProgress();
  },

  onActionInput(e) {
    this.setData({ newAction: e.detail.value });
    this.calculateProgress();
  },

  selectMood(e) {
    this.setData({ newMood: e.currentTarget.dataset.mood });
    this.calculateProgress();
  },

  calculateProgress() {
    const { newTitle, newObjective, newEmotion, newAwareness, newAction } = this.data;
    let count = 0;
    let total = 5;
    
    if (newTitle.trim()) count++;
    if (newObjective.trim()) count++;
    if (newEmotion.trim()) count++;
    if (newAwareness.trim()) count++;
    if (newAction.trim()) count++;
    
    const percent = Math.round((count / total) * 100);
    this.setData({ progressPercent: percent });
  },

  onInputConfirm() {
    wx.hideKeyboard();
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
  },

  onShareAppMessage() {
    return {
      title: 'To Be Better - 觉察日记',
      desc: '记录当下，觉察自我',
      path: '/pages/diary/diary'
    };
  },

  onShareTimeline() {
    return {
      title: 'To Be Better - 记录当下，觉察自我',
      query: '',
      imageUrl: ''
    };
  }
})