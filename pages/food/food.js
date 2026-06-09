const foodDatabase = require('../../utils/foodDatabase.js');

Page({
  data: {
    searchText: '',
    currentCategory: 'vegetables',
    showModal: false,
    isCustom: false,
    selectedFood: {},
    portion: 1,
    totalCalories: 0,
    customFoodName: '',
    customCalories: '',
    nutritionGuide: [
      { icon: '🍗', description: '蛋白质 每10g ≈ 40 kcal' },
      { icon: '🥑', description: '脂肪 每10g ≈ 90 kcal' },
      { icon: '🍚', description: '碳水 每10g ≈ 40 kcal' },
      { icon: '🥦', description: '蔬菜 每10g ≈ 3 kcal' }
    ],
    vegetables: [],
    protein: [],
    fat: [],
    carbs: [],
    currentFoodList: []
  },

  onLoad() {
    this.setData({
      vegetables: foodDatabase.vegetables,
      protein: foodDatabase.protein,
      fat: foodDatabase.fat,
      carbs: foodDatabase.carbs,
      currentFoodList: foodDatabase.vegetables
    });
  },

  onSearchInput(e) {
    this.setData({
      searchText: e.detail.value
    });
  },

  selectCategory(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category,
      currentFoodList: this.data[category] || []
    });
  },

  addFood(e) {
    const food = e.currentTarget.dataset.food;
    
    if (food.isOther) {
      this.setData({
        showModal: true,
        isCustom: true,
        customFoodName: '',
        customCalories: '',
        totalCalories: 0
      });
    } else {
      this.setData({
        showModal: true,
        isCustom: false,
        selectedFood: food,
        portion: 1,
        totalCalories: food.calories
      });
    }
  },

  onCustomFoodNameInput(e) {
    this.setData({
      customFoodName: e.detail.value
    });
    this.updateTotalCalories();
  },

  onCustomCaloriesInput(e) {
    this.setData({
      customCalories: e.detail.value
    });
    this.updateTotalCalories();
  },

  updateTotalCalories() {
    if (this.data.isCustom) {
      const calories = parseInt(this.data.customCalories) || 0;
      this.setData({
        totalCalories: calories
      });
    }
  },

  increasePortion() {
    const newPortion = this.data.portion + 1;
    this.setData({
      portion: newPortion,
      totalCalories: this.data.selectedFood.calories * newPortion
    });
  },

  decreasePortion() {
    if (this.data.portion > 1) {
      const newPortion = this.data.portion - 1;
      this.setData({
        portion: newPortion,
        totalCalories: this.data.selectedFood.calories * newPortion
      });
    }
  },

  confirmAdd() {
    const categoryNames = {
      vegetables: '蔬菜',
      protein: '蛋白质',
      fat: '脂肪',
      carbs: '碳水'
    };
    
    let title = '';
    
    if (this.data.isCustom) {
      if (!this.data.customFoodName || !this.data.customCalories) {
        wx.showToast({
          title: '请填写完整信息',
          icon: 'none'
        });
        return;
      }
      title = `已添加${categoryNames[this.data.currentCategory]}: ${this.data.customFoodName}`;
    } else {
      title = `已添加${categoryNames[this.data.currentCategory]}: ${this.data.selectedFood.name}`;
    }
    
    wx.showToast({
      title: title,
      icon: 'success'
    });
    
    this.hideModal();
  },

  hideModal() {
    this.setData({
      showModal: false,
      isCustom: false,
      selectedFood: {},
      portion: 1,
      totalCalories: 0,
      customFoodName: '',
      customCalories: ''
    });
  }
});