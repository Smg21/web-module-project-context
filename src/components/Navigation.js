import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{props.cart && props.cart.length}</span> {/* Check if props.cart is defined */}
      </NavLink>
    </div>
  );
};

export default Navigation;
