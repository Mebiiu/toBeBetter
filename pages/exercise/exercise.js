Page({
  data: {
    dailyExercise: 350,
    exerciseTime: 45,
    exerciseCount: 2,
    showModal: false,
    selectedExercise: {},
    duration: 30,
    estimatedCalories: 0,
    exerciseList: [
      { id: 1, name: '跑步', icon: '🏃', calories: 300 },
      { id: 2, name: '游泳', icon: '🏊', calories: 400 },
      { id: 3, name: '骑行', icon: '🚴', calories: 250 },
      { id: 4, name: '跳绳', icon: '🏋️', calories: 350 },
      { id: 5, name: '瑜伽', icon: '🧘', calories: 150 },
      { id: 6, name: '健身', icon: '💪', calories: 380 }
    ],
    myRecords: [
      { id: 1, name: '跑步', icon: '🏃', time: 30, calories: 300, date: '今天' },
      { id: 2, name: '瑜伽', icon: '🧘', time: 15, calories: 75, date: '今天' },
      { id: 3, name: '游泳', icon: '🏊', time: 45, calories: 600, date: '昨天' }
    ]
  },

  startExercise(e) {
    const exercise = e.currentTarget.dataset.exercise;
    const calories = Math.round((exercise.calories / 30) * 30);
    this.setData({
      showModal: true,
      selectedExercise: exercise,
      duration: 30,
      estimatedCalories: calories
    });
  },

  selectDuration(e) {
    const duration = parseInt(e.currentTarget.dataset.duration);
    const calories = Math.round((this.data.selectedExercise.calories / 30) * duration);
    this.setData({
      duration: duration,
      estimatedCalories: calories
    });
  },

  confirmExercise() {
    wx.showToast({
      title: `已记录${this.data.selectedExercise.name}${this.data.duration}分钟`,
      icon: 'success'
    });
    this.hideModal();
  },

  hideModal() {
    this.setData({
      showModal: false,
      selectedExercise: {},
      duration: 30,
      estimatedCalories: 0
    });
  }
});