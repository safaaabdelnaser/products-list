import React, { useState } from "react";
import Total from "../total/total";

const Items = (props) => {
  const { items, del,updateTotal  } = props;
  const [updatedItems, setUpdatedItems] = useState(items);
  const increaseQuantity=(productID) => {
    const updatedProducts =updatedItems.map((item) => {
        if (item.id === productID) {
          return { ...item, quantity: +item.quantity + 1 };
        }
        return item;
      });
  
      setUpdatedItems(updatedProducts);
      updateTotal(updatedProducts)
    };
    const decreaseQuantity=(productID) => {
        const updatedProducts =updatedItems.map((item) => {
            if (item.id === productID) {
              return { ...item, quantity: +item.quantity - 1 };
            }
            return item;
          });
      
          setUpdatedItems(updatedProducts);
          updateTotal(updatedProducts)
        };
  const ListItem = updatedItems.length ? (
    updatedItems.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price *item.quantity}</p>
          <p>
            <button className="quantity" onClick={() => increaseQuantity(item.id)}>+</button>
            {item.quantity}
            <button className="quantity" onClick={() => decreaseQuantity(item.id)} >-</button>
          </p>

          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Edit</p>
      </div>
      {ListItem}
    
    </div>
  );
};

export default Items;
