const { foodCategories, getFoodByCategory, calculateNutrition } = require('../../utils/foodDatabase.js');

Page({
  data: {
    mealList: [],
    showModal: false,
    mealType: 'breakfast',
    selectedCategory: '',
    selectedFood: '',
    foodWeight: '',
    currentCategoryFoods: [],
    foodNames: [],
    foodItems: [],
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
    tempTotalCalories: 0,
    tempTotalProtein: 0,
    tempTotalCarbs: 0,
    tempTotalFat: 0
  },

  onLoad() {
    this.loadMeals();
    const defaultFoods = getFoodByCategory('vegetables') || [];
    this.setData({
      currentCategoryFoods: defaultFoods,
      foodNames: defaultFoods.map(f => f.name)
    });
  },

  onShow() {
    this.loadMeals();
  },

  loadMeals() {
    try {
      const meals = wx.getStorageSync('meals') || [];
      this.setData({ mealList: meals });
      this.calculateTodayTotal();
    } catch (e) {
      console.error('加载餐食记录失败', e);
    }
  },

  calculateTodayTotal() {
    const today = new Date().toLocaleDateString('zh-CN');
    const todayMeals = this.data.mealList.filter(item => {
      const itemDate = new Date(item.timestamp).toLocaleDateString('zh-CN');
      return itemDate === today;
    });
    
    const totalCalories = todayMeals.reduce((sum, item) => sum + (item.calories || 0), 0);
    const totalProtein = todayMeals.reduce((sum, item) => sum + (item.protein || 0), 0);
    const totalCarbs = todayMeals.reduce((sum, item) => sum + (item.carbs || 0), 0);
    const totalFat = todayMeals.reduce((sum, item) => sum + (item.fat || 0), 0);
    
    this.setData({
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFat
    });
  },

  showAddModal() {
    const defaultFoods = getFoodByCategory('vegetables') || [];
    this.setData({
      showModal: true,
      mealType: 'breakfast',
      selectedCategory: '',
      selectedFood: '',
      foodWeight: '',
      currentCategoryFoods: defaultFoods,
      foodNames: defaultFoods.map(f => f.name),
      foodItems: [],
      tempTotalCalories: 0,
      tempTotalProtein: 0,
      tempTotalCarbs: 0,
      tempTotalFat: 0
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
    this.setData({ mealType: type });
  },

  selectCategory(e) {
    const category = e.currentTarget.dataset.category;
    const foods = getFoodByCategory(category) || [];
    this.setData({
      selectedCategory: category,
      selectedFood: '',
      currentCategoryFoods: foods
    });
  },

  selectFood(e) {
    const foodName = e.currentTarget.dataset.food;
    this.setData({ selectedFood: foodName });
  },

  onWeightInput(e) {
    this.setData({ foodWeight: e.detail.value });
  },

  addFoodItem() {
    const { selectedCategory, selectedFood, foodWeight, foodItems } = this.data;
    
    if (!selectedCategory) {
      wx.showToast({
        title: '请选择食物类别',
        icon: 'none'
      });
      return;
    }
    
    if (!selectedFood) {
      wx.showToast({
        title: '请选择食物',
        icon: 'none'
      });
      return;
    }
    
    if (!foodWeight || parseFloat(foodWeight) <= 0) {
      wx.showToast({
        title: '请输入有效重量',
        icon: 'none'
      });
      return;
    }
    
    const weight = parseFloat(foodWeight);
    const nutrition = calculateNutrition(selectedFood, weight, selectedCategory);
    
    const categoryInfo = foodCategories.find(c => c.key === selectedCategory);
    
    const newItem = {
      id: Date.now(),
      name: selectedFood,
      category: selectedCategory,
      categoryName: categoryInfo ? categoryInfo.name : '',
      weight: weight,
      calories: nutrition.calories,
      protein: nutrition.protein,
      carbs: nutrition.carbs,
      fat: nutrition.fat
    };
    
    const updatedFoodItems = [...foodItems, newItem];
    const tempTotalCalories = parseFloat(updatedFoodItems.reduce((sum, item) => sum + item.calories, 0).toFixed(2));
    const tempTotalProtein = parseFloat(updatedFoodItems.reduce((sum, item) => sum + item.protein, 0).toFixed(2));
    const tempTotalCarbs = parseFloat(updatedFoodItems.reduce((sum, item) => sum + item.carbs, 0).toFixed(2));
    const tempTotalFat = parseFloat(updatedFoodItems.reduce((sum, item) => sum + item.fat, 0).toFixed(2));
    
    this.setData({
      foodItems: updatedFoodItems,
      tempTotalCalories,
      tempTotalProtein,
      tempTotalCarbs,
      tempTotalFat,
      selectedFood: '',
      foodWeight: ''
    });
  },

  deleteFoodItem(e) {
    const id = e.currentTarget.dataset.id;
    const foodItems = this.data.foodItems.filter(item => item.id !== id);
    const tempTotalCalories = parseFloat(foodItems.reduce((sum, item) => sum + item.calories, 0).toFixed(2));
    const tempTotalProtein = parseFloat(foodItems.reduce((sum, item) => sum + item.protein, 0).toFixed(2));
    const tempTotalCarbs = parseFloat(foodItems.reduce((sum, item) => sum + item.carbs, 0).toFixed(2));
    const tempTotalFat = parseFloat(foodItems.reduce((sum, item) => sum + item.fat, 0).toFixed(2));
    
    this.setData({ 
      foodItems,
      tempTotalCalories,
      tempTotalProtein,
      tempTotalCarbs,
      tempTotalFat
    });
  },

  saveMeal() {
    const { mealType, mealList, foodItems } = this.data;
    
    if (foodItems.length === 0) {
      wx.showToast({
        title: '请至少添加一种食物',
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
    
    const totalCalories = foodItems.reduce((sum, item) => sum + item.calories, 0);
    const totalProtein = foodItems.reduce((sum, item) => sum + item.protein, 0);
    const totalCarbs = foodItems.reduce((sum, item) => sum + item.carbs, 0);
    const totalFat = foodItems.reduce((sum, item) => sum + item.fat, 0);
    
    const newRecord = {
      id: Date.now(),
      type: mealType,
      typeText: typeMap[mealType],
      foodItems: foodItems,
      name: foodItems.map(item => `${item.name}(${item.weight}g)`).join('、'),
      calories: totalCalories,
      protein: totalProtein,
      carbs: totalCarbs,
      fat: totalFat,
      datetime: datetime,
      timestamp: now.getTime()
    };

    const updatedList = [newRecord, ...mealList];
    
    try {
      wx.setStorageSync('meals', updatedList);
      this.setData({ 
        mealList: updatedList,
        showModal: false,
        foodItems: []
      });
      this.calculateTodayTotal();
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
            this.calculateTodayTotal();
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