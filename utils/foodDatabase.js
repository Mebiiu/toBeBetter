const foodDatabase = {
  vegetables: [
    { name: '西兰花', calories: 34, protein: 2.8, carbs: 7.3, fat: 0.4 },
    { name: '菠菜', calories: 23, protein: 2.9, carbs: 4.5, fat: 0.4 },
    { name: '胡萝卜', calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2 },
    { name: '黄瓜', calories: 16, protein: 0.8, carbs: 3.6, fat: 0.2 },
    { name: '番茄', calories: 18, protein: 0.9, carbs: 4.2, fat: 0.2 },
    { name: '生菜', calories: 16, protein: 1.1, carbs: 2.8, fat: 0.2 },
    { name: '芹菜', calories: 16, protein: 0.7, carbs: 3.3, fat: 0.2 },
    { name: '青椒', calories: 26, protein: 1.3, carbs: 6.4, fat: 0.3 },
    { name: '西兰花', calories: 34, protein: 2.8, carbs: 7.3, fat: 0.4 },
    { name: '蘑菇', calories: 26, protein: 2.5, carbs: 4.1, fat: 0.3 },
    { name: '洋葱', calories: 40, protein: 1.1, carbs: 9.1, fat: 0.1 },
    { name: '南瓜', calories: 26, protein: 0.8, carbs: 6.5, fat: 0.1 }
  ],
  protein: [
    { name: '鸡胸肉', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    { name: '鸡腿肉', calories: 205, protein: 27, carbs: 0, fat: 10.6 },
    { name: '瘦牛肉', calories: 125, protein: 26, carbs: 0, fat: 2.4 },
    { name: '瘦猪肉', calories: 143, protein: 20, carbs: 0, fat: 6.2 },
    { name: '三文鱼', calories: 208, protein: 20, carbs: 0, fat: 13.4 },
    { name: '鳕鱼', calories: 105, protein: 22, carbs: 0, fat: 1.2 },
    { name: '虾仁', calories: 81, protein: 18, carbs: 1.5, fat: 0.6 },
    { name: '鸡蛋', calories: 143, protein: 13, carbs: 1.1, fat: 10.1 },
    { name: '鸭蛋', calories: 180, protein: 12, carbs: 1.7, fat: 14.7 },
    { name: '豆腐', calories: 70, protein: 6.9, carbs: 2.7, fat: 4.6 },
    { name: '豆浆', calories: 30, protein: 2.8, carbs: 1.8, fat: 1.6 },
    { name: '希腊酸奶', calories: 100, protein: 10, carbs: 3, fat: 5 }
  ],
  carbs: [
    { name: '白米饭', calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { name: '糙米饭', calories: 111, protein: 2.6, carbs: 23, fat: 1.6 },
    { name: '燕麦', calories: 389, protein: 17, carbs: 66, fat: 7 },
    { name: '全麦面包', calories: 240, protein: 9, carbs: 43, fat: 3.2 },
    { name: '红薯', calories: 86, protein: 1.6, carbs: 20.1, fat: 0.2 },
    { name: '玉米', calories: 116, protein: 2.9, carbs: 25.7, fat: 1.2 },
    { name: '土豆', calories: 77, protein: 2.5, carbs: 17.4, fat: 0.1 },
    { name: '紫薯', calories: 77, protein: 2.3, carbs: 17.6, fat: 0.3 },
    { name: '小米粥', calories: 46, protein: 1.1, carbs: 9.6, fat: 0.3 },
    { name: '荞麦面', calories: 340, protein: 12, carbs: 70, fat: 3 },
    { name: '全麦意面', calories: 350, protein: 13, carbs: 72, fat: 2 },
    { name: '藜麦', calories: 340, protein: 14, carbs: 64, fat: 4 }
  ],
  fruits: [
    { name: '苹果', calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    { name: '香蕉', calories: 91, protein: 1.1, carbs: 23, fat: 0.3 },
    { name: '橙子', calories: 47, protein: 0.9, carbs: 12, fat: 0.1 },
    { name: '草莓', calories: 32, protein: 0.7, carbs: 8, fat: 0.3 },
    { name: '蓝莓', calories: 57, protein: 0.7, carbs: 14, fat: 0.3 },
    { name: '猕猴桃', calories: 61, protein: 1.1, carbs: 15, fat: 0.4 },
    { name: '芒果', calories: 60, protein: 0.8, carbs: 15, fat: 0.4 },
    { name: '葡萄', calories: 69, protein: 0.7, carbs: 18, fat: 0.2 }
  ],
  fats: [
    { name: '橄榄油', calories: 884, protein: 0, carbs: 0, fat: 100 },
    { name: '牛油果', calories: 160, protein: 2, carbs: 8.5, fat: 14.7 },
    { name: '坚果', calories: 567, protein: 15, carbs: 21, fat: 49 },
    { name: '花生', calories: 567, protein: 25, carbs: 20, fat: 45 },
    { name: '杏仁', calories: 575, protein: 20, carbs: 20, fat: 49 }
  ]
};

const foodCategories = [
  { key: 'vegetables', name: '蔬菜', icon: '🥬' },
  { key: 'protein', name: '蛋白质', icon: '🍗' },
  { key: 'carbs', name: '碳水', icon: '🍞' },
  { key: 'fruits', name: '水果', icon: '🍎' },
  { key: 'fats', name: '脂肪', icon: '🥑' }
];

function getFoodByCategory(category) {
  return foodDatabase[category] || [];
}

function calculateNutrition(foodName, weight, category) {
  const foods = getFoodByCategory(category);
  const food = foods.find(f => f.name === foodName);
  
  if (!food) {
    return { calories: 0, protein: 0, carbs: 0, fat: 0 };
  }
  
  const ratio = weight / 100;
  return {
    calories: Math.round(food.calories * ratio),
    protein: Math.round(food.protein * ratio * 10) / 10,
    carbs: Math.round(food.carbs * ratio * 10) / 10,
    fat: Math.round(food.fat * ratio * 10) / 10
  };
}

module.exports = {
  foodDatabase,
  foodCategories,
  getFoodByCategory,
  calculateNutrition
};