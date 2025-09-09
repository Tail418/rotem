
// 메뉴 데이터를 별도 파일로 분리
// 나중에 서버에서 받아올 수도 있고, 새로운 메뉴 추가도 쉬워져요!

export const menuData = [
  // 커피류
  { id: 1, name: '아메리카노', price: 4500, category: 'coffee', emoji: '☕' },
  { id: 2, name: '카페라떼', price: 5000, category: 'coffee', emoji: '🥛' },
  { id: 3, name: '카푸치노', price: 5500, category: 'coffee', emoji: '☕' },
  { id: 4, name: '바닐라라떼', price: 5800, category: 'coffee', emoji: '🥛' },
  { id: 5, name: '카라멜마키아토', price: 6000, category: 'coffee', emoji: '☕' },
  
  // 차류
  { id: 6, name: '녹차라떼', price: 5500, category: 'tea', emoji: '🍵' },
  { id: 7, name: '초콜릿라떼', price: 6000, category: 'tea', emoji: '🍫' },
  { id: 8, name: '얼그레이', price: 4800, category: 'tea', emoji: '🫖' },
  { id: 9, name: '캐모마일', price: 5200, category: 'tea', emoji: '🌼' },
  
  // 디저트류
  { id: 10, name: '크로와상', price: 3500, category: 'dessert', emoji: '🥐' },
  { id: 11, name: '치즈케이크', price: 6500, category: 'dessert', emoji: '🍰' },
  { id: 12, name: '마카롱', price: 2500, category: 'dessert', emoji: '🧁' },
  { id: 13, name: '티라미수', price: 7000, category: 'dessert', emoji: '🍮' },
  { id: 14, name: '브라우니', price: 4200, category: 'dessert', emoji: '🍫' }
];

// 카테고리 정보도 함께 관리
export const categories = [
  { id: 'all', name: '전체', emoji: '🏪' },
  { id: 'coffee', name: '커피', emoji: '☕' },
  { id: 'tea', name: '차', emoji: '🍵' },
  { id: 'dessert', name: '디저트', emoji: '🍰' }
];

// 카테고리별 메뉴 필터링 함수
export const getMenuByCategory = (category) => {
  if (category === 'all') {
    return menuData;
  }
  return menuData.filter(item => item.category === category);
};