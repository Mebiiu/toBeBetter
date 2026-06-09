const foodDatabase = {
  vegetables: [
    { id: 1, name: '西兰花', icon: '🥦', calories: 34, protein: 2.8, fat: 0.4, carbs: 6, unit: '100g' },
    { id: 2, name: '菠菜', icon: '🥬', calories: 23, protein: 2.9, fat: 0.4, carbs: 4, unit: '100g' },
    { id: 3, name: '西红柿', icon: '🍅', calories: 18, protein: 1.1, fat: 0.2, carbs: 4, unit: '100g' },
    { id: 4, name: '黄瓜', icon: '🥒', calories: 15, protein: 0.8, fat: 0.2, carbs: 3, unit: '100g' },
    { id: 5, name: '胡萝卜', icon: '🥕', calories: 41, protein: 1, fat: 0.2, carbs: 10, unit: '100g' },
    { id: 6, name: '南瓜', icon: '🎃', calories: 26, protein: 1, fat: 0.3, carbs: 7, unit: '100g' },
    { id: 7, name: '蘑菇', icon: '🍄', calories: 26, protein: 2.9, fat: 0.3, carbs: 5, unit: '100g' },
    { id: 8, name: '生菜', icon: '🥬', calories: 16, protein: 1.4, fat: 0.2, carbs: 3, unit: '100g' },
    { id: 9, name: '芹菜', icon: '🥬', calories: 16, protein: 0.6, fat: 0.1, carbs: 4, unit: '100g' },
    { id: 10, name: '青椒', icon: '🫑', calories: 26, protein: 1.3, fat: 0.3, carbs: 6, unit: '100g' },
    { id: 11, name: '茄子', icon: '🍆', calories: 25, protein: 1.1, fat: 0.2, carbs: 6, unit: '100g' },
    { id: 12, name: '冬瓜', icon: '🥒', calories: 12, protein: 0.4, fat: 0.2, carbs: 2, unit: '100g' },
    { id: 13, name: '苦瓜', icon: '🥒', calories: 18, protein: 1, fat: 0.1, carbs: 4, unit: '100g' },
    { id: 14, name: '洋葱', icon: '🧅', calories: 40, protein: 1.1, fat: 0.1, carbs: 10, unit: '100g' },
    { id: 15, name: '蒜', icon: '🧄', calories: 149, protein: 6.4, fat: 0.5, carbs: 33, unit: '100g' },
    { id: 16, name: '姜', icon: '🧈', calories: 41, protein: 1, fat: 0.6, carbs: 10, unit: '100g' },
    { id: 991, name: '其他', icon: '➕', calories: 0, protein: 0, fat: 0, carbs: 0, unit: '自定义', isOther: true }
  ],
  protein: [
    { id: 17, name: '鸡胸肉', icon: '🍗', calories: 165, protein: 27, fat: 3.6, carbs: 0, unit: '100g' },
    { id: 18, name: '瘦牛肉', icon: '🥩', calories: 125, protein: 26, fat: 2.4, carbs: 0, unit: '100g' },
    { id: 19, name: '鱼肉', icon: '🐟', calories: 100, protein: 22, fat: 1.5, carbs: 0, unit: '100g' },
    { id: 20, name: '水煮蛋', icon: '🥚', calories: 78, protein: 6.3, fat: 5.3, carbs: 0.6, unit: '1个' },
    { id: 21, name: '豆腐', icon: '🧈', calories: 70, protein: 6.6, fat: 3.5, carbs: 2, unit: '100g' },
    { id: 22, name: '虾', icon: '🦐', calories: 80, protein: 18, fat: 0.8, carbs: 0, unit: '100g' },
    { id: 23, name: '鸡蛋羹', icon: '🥣', calories: 100, protein: 8, fat: 6, carbs: 1, unit: '1碗' },
    { id: 24, name: '牛奶', icon: '🥛', calories: 150, protein: 7.5, fat: 8, carbs: 11, unit: '250ml' },
    { id: 25, name: '酸奶', icon: '🥤', calories: 70, protein: 2.5, fat: 1.5, carbs: 10, unit: '100g' },
    { id: 26, name: '瘦猪肉', icon: '🥩', calories: 143, protein: 20, fat: 6.2, carbs: 0, unit: '100g' },
    { id: 27, name: '猪肝', icon: '🥩', calories: 120, protein: 20, fat: 3.5, carbs: 2, unit: '100g' },
    { id: 28, name: '鸡蛋白', icon: '🥚', calories: 17, protein: 3.6, fat: 0.1, carbs: 0.7, unit: '1个' },
    { id: 29, name: '鹌鹑蛋', icon: '🥚', calories: 16, protein: 1.5, fat: 1.1, carbs: 0.4, unit: '1个' },
    { id: 30, name: '三文鱼', icon: '🐟', calories: 208, protein: 20, fat: 13, carbs: 0, unit: '100g' },
    { id: 992, name: '其他', icon: '➕', calories: 0, protein: 0, fat: 0, carbs: 0, unit: '自定义', isOther: true }
  ],
  fat: [
    { id: 31, name: '牛油果', icon: '🥑', calories: 160, protein: 2, fat: 15, carbs: 9, unit: '1个' },
    { id: 32, name: '坚果', icon: '🌰', calories: 575, protein: 15, fat: 50, carbs: 20, unit: '50g' },
    { id: 33, name: '橄榄油', icon: '🫒', calories: 884, protein: 0, fat: 100, carbs: 0, unit: '100ml' },
    { id: 34, name: '黑巧克力', icon: '🍫', calories: 200, protein: 2, fat: 12, carbs: 20, unit: '30g' },
    { id: 35, name: '芝士', icon: '🧀', calories: 380, protein: 28, fat: 30, carbs: 1, unit: '100g' },
    { id: 36, name: '黄油', icon: '🧈', calories: 717, protein: 0.9, fat: 81, carbs: 0.1, unit: '100g' },
    { id: 37, name: '花生', icon: '🥜', calories: 567, protein: 25, fat: 49, carbs: 16, unit: '100g' },
    { id: 38, name: '杏仁', icon: '🥜', calories: 575, protein: 20, fat: 49, carbs: 12, unit: '100g' },
    { id: 39, name: '核桃', icon: '🫘', calories: 654, protein: 15, fat: 65, carbs: 14, unit: '100g' },
    { id: 40, name: '椰子油', icon: '🥥', calories: 884, protein: 0, fat: 100, carbs: 0, unit: '100ml' },
    { id: 41, name: '芝麻酱', icon: '🥜', calories: 618, protein: 17, fat: 52, carbs: 22, unit: '100g' },
    { id: 42, name: '沙拉酱', icon: '🥗', calories: 490, protein: 1, fat: 50, carbs: 8, unit: '100g' },
    { id: 993, name: '其他', icon: '➕', calories: 0, protein: 0, fat: 0, carbs: 0, unit: '自定义', isOther: true }
  ],
  carbs: [
    { id: 43, name: '白米饭', icon: '🍚', calories: 130, protein: 2.7, fat: 0.3, carbs: 28, unit: '100g' },
    { id: 44, name: '全麦面包', icon: '🍞', calories: 80, protein: 3, fat: 1, carbs: 15, unit: '1片' },
    { id: 45, name: '红薯', icon: '🍠', calories: 86, protein: 1.6, fat: 0.1, carbs: 20, unit: '100g' },
    { id: 46, name: '玉米', icon: '🌽', calories: 116, protein: 3.4, fat: 1.2, carbs: 27, unit: '1根' },
    { id: 47, name: '燕麦片', icon: '🌾', calories: 150, protein: 5, fat: 3, carbs: 25, unit: '30g' },
    { id: 48, name: '小米粥', icon: '🥣', calories: 100, protein: 2, fat: 0.5, carbs: 22, unit: '1碗' },
    { id: 49, name: '香蕉', icon: '🍌', calories: 91, protein: 1.1, fat: 0.3, carbs: 23, unit: '1根' },
    { id: 50, name: '苹果', icon: '🍎', calories: 52, protein: 0.3, fat: 0.2, carbs: 14, unit: '1个' },
    { id: 51, name: '橙子', icon: '🍊', calories: 47, protein: 1.2, fat: 0.2, carbs: 12, unit: '1个' },
    { id: 52, name: '葡萄', icon: '🍇', calories: 69, protein: 0.7, fat: 0.2, carbs: 18, unit: '100g' },
    { id: 53, name: '米饭', icon: '🍚', calories: 116, protein: 2.7, fat: 0.3, carbs: 25, unit: '100g' },
    { id: 54, name: '面条', icon: '🍜', calories: 110, protein: 2.7, fat: 0.5, carbs: 24, unit: '100g' },
    { id: 55, name: '馒头', icon: '🥖', calories: 286, protein: 7, fat: 1, carbs: 48, unit: '1个' },
    { id: 56, name: '油条', icon: '🍩', calories: 386, protein: 6.9, fat: 17, carbs: 51, unit: '1根' },
    { id: 57, name: '蛋糕', icon: '🍰', calories: 340, protein: 7, fat: 13, carbs: 53, unit: '100g' },
    { id: 58, name: '饼干', icon: '🍪', calories: 435, protein: 7, fat: 17, carbs: 69, unit: '100g' },
    { id: 994, name: '其他', icon: '➕', calories: 0, protein: 0, fat: 0, carbs: 0, unit: '自定义', isOther: true }
  ],
  nutritionGuide: {
    protein: { per10g: 40, description: '蛋白质每10g约40卡路里', color: '#ff6b6b' },
    fat: { per10g: 90, description: '脂肪每10g约90卡路里', color: '#00b894' },
    carbs: { per10g: 40, description: '碳水每10g约40卡路里', color: '#667eea' },
    vegetables: { per10g: 3, description: '蔬菜每10g约3卡路里', color: '#fd79a8' }
  },
  searchFood: function(keyword) {
    const allFoods = [
      ...this.vegetables,
      ...this.protein,
      ...this.fat,
      ...this.carbs
    ];
    return allFoods.filter(food => 
      food.name.includes(keyword)
    );
  },
  getFoodById: function(id) {
    const allFoods = [
      ...this.vegetables,
      ...this.protein,
      ...this.fat,
      ...this.carbs
    ];
    return allFoods.find(food => food.id === id);
  },
  getCategoryName: function(category) {
    const names = {
      vegetables: '蔬菜',
      protein: '蛋白质',
      fat: '脂肪',
      carbs: '碳水'
    };
    return names[category] || category;
  },
  getCategoryIcon: function(category) {
    const icons = {
      vegetables: '🥦',
      protein: '🍗',
      fat: '🥑',
      carbs: '🍚'
    };
    return icons[category] || '📦';
  }
};

module.exports = foodDatabase;