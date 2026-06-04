Page({
  data: {
    mealList: [],
    showModal: false,
    newMeal: {
      type: 'breakfast',
      name: '',
      calories: '',
      protein: '',
      carbs: '',
      fat: ''
    }
  },

  onLoad() {
    this.loadMeals();
  },

  onShow() {
    this.loadMeals();
  },

  loadMeals() {
    try {
      const meals = wx.getStorageSync('meals') || [];
      this.setData({ mealList: meals });
    } catch (e) {
      console.error('加载餐食记录失败', e);
    }
  },

  showAddModal() {
    this.setData({
      showModal: true,
      newMeal: {
        type: 'breakfast',
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: ''
      }
    });
  },

  hideModal() {
    this.setData({ showModal: false });
  },

  onModalMaskTap(e) {
    this.setData({ showModal: false });
  },

  selectMealType(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ 'newMeal.type': type });
  },

  onNameInput(e) {
    this.setData({ 'newMeal.name': e.detail.value });
  },

  onCaloriesInput(e) {
    this.setData({ 'newMeal.calories': e.detail.value });
  },

  onProteinInput(e) {
    this.setData({ 'newMeal.protein': e.detail.value });
  },

  onCarbsInput(e) {
    this.setData({ 'newMeal.carbs': e.detail.value });
  },

  onFatInput(e) {
    this.setData({ 'newMeal.fat': e.detail.value });
  },

  saveMeal() {
    const { newMeal, mealList } = this.data;
    
    if (!newMeal.name.trim()) {
      wx.showToast({
        title: '请输入餐食名称',
        icon: 'none'
      });
      return;
    }

    const typeMap = {
      breakfast: '早餐',
      lunch: '午餐',
      dinner: '晚餐',
      snack: '加餐'
    };

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    const newRecord = {
      id: Date.now(),
      type: newMeal.type,
      typeText: typeMap[newMeal.type],
      name: newMeal.name,
      calories: parseInt(newMeal.calories) || 0,
      protein: parseInt(newMeal.protein) || 0,
      carbs: parseInt(newMeal.carbs) || 0,
      fat: parseInt(newMeal.fat) || 0,
      datetime: datetime,
      timestamp: now.getTime()
    };

    const updatedList = [newRecord, ...mealList];
    
    try {
      wx.setStorageSync('meals', updatedList);
      this.setData({ 
        mealList: updatedList,
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

  deleteMeal(e) {
    const id = e.currentTarget.dataset.id;
    const { mealList } = this.data;
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这条记录吗？',
      success: (res) => {
        if (res.confirm) {
          const updatedList = mealList.filter(item => item.id !== id);
          try {
            wx.setStorageSync('meals', updatedList);
            this.setData({ mealList: updatedList });
            wx.showToast({
              title: '删除成功',
              icon: 'success'
            });
          } catch (e) {
            wx.showToast({
              title: '删除失败',
              icon: 'none'
            });
          }
        }
      }
    });
  },

  onShareAppMessage() {
    return {
      title: 'To Be Better - 减脂餐记录',
      desc: '记录饮食，健康减脂',
      path: '/pages/body/body'
    };
  },

  onShareTimeline() {
    return {
      title: 'To Be Better - 记录饮食，健康减脂',
      query: '',
      imageUrl: ''
    };
  }
})