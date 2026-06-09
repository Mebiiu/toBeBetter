Page({
  data: {
    weeklyStats: {
      totalCalories: 12580,
      exerciseCalories: 2450,
      balance: -1820
    },
    dailyCalories: [
      { day: '周一', calories: 1800, percent: 72 },
      { day: '周二', calories: 2100, percent: 84 },
      { day: '周三', calories: 1650, percent: 66 },
      { day: '周四', calories: 1980, percent: 79 },
      { day: '周五', calories: 2250, percent: 90 },
      { day: '周六', calories: 1800, percent: 72 },
      { day: '周日', calories: 2000, percent: 80 }
    ],
    exerciseDistribution: [
      { name: '跑步', time: 90, percent: 45, color: '#ff6b6b' },
      { name: '瑜伽', time: 60, percent: 30, color: '#00b894' },
      { name: '游泳', time: 50, percent: 25, color: '#667eea' }
    ],
    totalExerciseTime: 200,
    healthGoals: {
      completed: 7,
      streak: 15,
      water: '8杯',
      sleep: '7.5小时'
    }
  }
});