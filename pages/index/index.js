Page({
  data: {
    currentDate: '',
    dailyStats: {
      totalCalories: 1850,
      targetCalories: 2000,
      foodCalories: 2200,
      exerciseCalories: 350,
      balance: -200
    },
    progressPercent: 92,
    todayRecords: [
      { id: 1, type: 'food', name: '早餐', desc: '牛奶+面包+鸡蛋', calories: 450 },
      { id: 2, type: 'food', name: '午餐', desc: '米饭+鸡胸肉+蔬菜', calories: 680 },
      { id: 3, type: 'exercise', name: '跑步', desc: '30分钟，5公里', calories: 350 },
      { id: 4, type: 'food', name: '晚餐', desc: '沙拉+鸡胸肉', calories: 420 },
      { id: 5, type: 'food', name: '加餐', desc: '苹果+酸奶', calories: 250 }
    ]
  },

  onLoad() {
    this.setCurrentDate();
    this.calculateProgress();
  },

  setCurrentDate() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekDay = weekDays[now.getDay()];
    this.setData({
      currentDate: `${month}月${day}日 周${weekDay}`
    });
  },

  calculateProgress() {
    const { totalCalories, targetCalories } = this.data.dailyStats;
    const progress = Math.min(Math.round((totalCalories / targetCalories) * 100), 100);
    this.setData({
      progressPercent: progress
    });
  },

  goToFood() {
    wx.switchTab({
      url: '/pages/food/food'
    });
  },

  goToExercise() {
    wx.switchTab({
      url: '/pages/exercise/exercise'
    });
  }
});