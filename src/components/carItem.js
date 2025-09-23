import React from 'react';
import './CartItem.css';

// 🛒 장바구니에 담긴 개별 상품을 보여주는 컴포넌트
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  // 각 버튼 클릭 핸들러들
  const handleIncrease = () => {
    onIncrease(item.id);
  };

  const handleDecrease = () => {
    onDecrease(item.id);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  // 상품 총 가격 (개당 가격 × 수량)
  const totalPrice = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-info">
        <span className="cart-emoji">{item.emoji}</span>
        <div className="cart-details">
          <span className="cart-name">{item.name}</span>
          <span className="cart-unit-price">
            개당 {item.price.toLocaleString()}원
          </span>
        </div>
      </div>

      <div className="cart-controls">
        <button 
          className="quantity-btn decrease" 
          onClick={handleDecrease}
          disabled={item.quantity <= 1}
          aria-label="수량 감소"
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          className="quantity-btn increase" 
          onClick={handleIncrease}
          aria-label="수량 증가"
        >
          +
        </button>
      </div>

      <div className="cart-price">
        {totalPrice.toLocaleString()}원
      </div>

      <button 
        className="remove-btn" 
        onClick={handleRemove}
        aria-label={`${item.name} 삭제`}
      >
        🗑️
      </button>
    </div>
  );
}

export default CartItem;