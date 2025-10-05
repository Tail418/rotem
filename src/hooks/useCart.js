import { useState } from 'react';

// 🛒 장바구니 관련 로직을 모아놓은 커스텀 훅
// 여러 컴포넌트에서 재사용 가능!
function useCart() {
  const [cart, setCart] = useState([]);

  // 장바구니에 상품 추가
  const addToCart = (item) => {
    setCart(prevCart => {
      // 이미 장바구니에 있는 상품인지 찾기
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // 이미 있으면 수량만 1 증가
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // 새로운 상품이면 수량 1로 추가
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // 수량 증가
  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // 수량 감소 (1개보다 적어지면 상품 제거)
  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  // 상품 완전 제거
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // 장바구니 완전 비우기
  const clearCart = () => {
    setCart([]);
  };

  // 총 금액 계산
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  // 총 상품 개수 계산
  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  // 장바구니가 비어있는지 확인
  const isEmpty = cart.length === 0;

  return {
    // 상태
    cart,
    totalPrice,
    totalItems,
    isEmpty,
    
    // 액션 함수들
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  };
}

export default useCart;