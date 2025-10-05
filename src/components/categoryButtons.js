import React from 'react';
import { categories } from '../data/menuData';
import './categoryButtons.css';

// 🏷️ 카테고리 선택 버튼들을 관리하는 컴포넌트
function CategoryButtons({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-buttons">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
          aria-pressed={selectedCategory === category.id}
        >
          <span className="category-emoji">{category.emoji}</span>
          <span className="category-name">{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;