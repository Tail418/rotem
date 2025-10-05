import React, { useState } from 'react';
import { getMenuByCategory } from './data/menuData';
import useCart from './hooks/useCart';
import MenuItem from './components/menuItem';
import CartItem from './components/cartItem';
import CategoryButtons from './components/categoryButtons';
import './App.css';

// 🏪 메인 카페 키오스크 컴포넌트 - 이제 훨씬 깔끔해졌어요!
function App() {
  // 상태 관리
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderComplete, setOrderComplete] = useState(false);
  
  // 커스텀 훅으로 장바구니 로직 분리
  const {
    cart,
    totalPrice,
    totalItems,
    isEmpty,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  // 선택된 카테고리에 따른 메뉴 필터링
  const filteredMenu = getMenuByCategory(selectedCategory);

  // 주문하기 처리
  const handleOrder = () => {
    if (!isEmpty) {
      setOrderComplete(true);
      // 3초 후 초기화
      setTimeout(() => {
        clearCart();
        setOrderComplete(false);
        setSelectedCategory('all');
      }, 3000);
    }
  };

  // 주문 완료 화면
  if (orderComplete) {
    const orderNumber = Math.floor(Math.random() * 1000) + 1;
    
    return (
      <div className="app">
        <div className="order-complete">
          <div className="success-animation">🎉</div>
          <h1>주문 완료!</h1>
          <div className="order-number">
            주문번호: <span>#{orderNumber}</span>
          </div>
          <p>총 {totalItems}개 상품</p>
          <p className="total-amount">{totalPrice.toLocaleString()}원</p>
          <div className="loading-text">
            잠시 후 처음 화면으로 돌아갑니다...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* 헤더 */}
      <header className="header">
        <h1>☕ 로템 카페</h1>
        <p>맛있는 커피와 디저트를 주문하세요!</p>
      </header>

      <div className="main-content">
        {/* 왼쪽: 메뉴 영역 */}
        <div className="menu-section">
          {/* 카테고리 선택 버튼들 */}
          <CategoryButtons 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* 메뉴 그리드 */}
          <div className="menu-grid">
            {filteredMenu.map(item => (
              <MenuItem 
                key={item.id} 
                item={item} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
          
          {/* 선택된 카테고리에 메뉴가 없을 때 */}
          {filteredMenu.length === 0 && (
            <div className="no-menu">
              <p>해당 카테고리에 메뉴가 없습니다.</p>
            </div>
          )}
        </div>

        {/* 오른쪽: 장바구니 영역 */}
        <div className="cart-section">
          <h2>
            🛒 장바구니 
            {!isEmpty && <span className="cart-count">({totalItems})</span>}
          </h2>
          
          {isEmpty ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <p>장바구니가 비어있습니다</p>
              <p className="empty-cart-sub">메뉴를 선택해주세요! 😊</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="total-info">
                  <div className="total-items">
                    총 {totalItems}개 상품
                  </div>
                  <div className="total-price">
                    {totalPrice.toLocaleString()}원
                  </div>
                </div>
                
                <button 
                  className="order-btn" 
                  onClick={handleOrder}
                >
                  주문하기 💳
                </button>
                
                <button 
                  className="clear-btn" 
                  onClick={clearCart}
                >
                  전체 삭제
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;