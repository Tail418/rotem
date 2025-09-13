import React from "react";
import './MenuItem.css';

function MenuItem({ item, onAddToCart}) {
    const handlAddClick = () => {
        onAddToCart(item);
    };
    return (
        <div className="menu-item">
            <div className="menu-emoji">{item.emoji}</div>
            <h3 className="menu-name">{item.name}</h3>
            <p className="menu-price">{item.price.toLocaleString()}원</p>
            <button
                className="add-btn"
                onClick={handlAddClick}
                aria-label={'${item.name} 장바구니에 담기'}
            >
                담기
            </button>
        </div>
    );
}

export default MenuItem;