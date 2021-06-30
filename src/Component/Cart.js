import React from 'react';

function Cart(props) {
  let { value, color } = props;
  return (
    <div>
      <p style={{ color: `${color}` }}>{value}</p>
    </div>
  );
}

export default Cart;
