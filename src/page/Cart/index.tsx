import React from "react";
import { Drawer,notification } from 'antd';
import { ShoppingCartOutlined, CloseOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import './index.scss';
import {useSessionContext} from "@/context/sessionContext" ;

const Cart = (porps: any) => {
  const [{cartData},{setCartData}] = useSessionContext();

  // 添加购物车
  const addToCart = (item: { id: any; quantity: number; }) => {
    let changed = false;
    cartData.forEach((_item: { id: any; quantity: number; }) => {
      if (_item.id === item.id) {
        _item.quantity += 1;
        changed = true;
      }
    })
    if (changed) {
      setCartData([...cartData])
    } else {
      item.quantity = 1;
      setCartData([...cartData, item])
    }
  }
  // 减少购物车
  const subToCart = (item: { id: any; }) => {
    cartData.forEach((_item: { id: any; quantity: number; }) => {
      if (_item.id === item.id) {
        if (_item.quantity > 1) {
          _item.quantity -= 1;
        }
      }
    })
    setCartData([...cartData])
  }

  // 删除购物车
  const delToCart = (item: { id: any; }) => {
    let index = 0;
    cartData.forEach((_item: { id: any; },_index: any) => {
      if (_item.id === item.id) {
        index = _index;
      }
    })
    let _cartData = [...cartData];
    _cartData.splice(index,1);
    setCartData(_cartData)
  }
  
  const openNotification = () => {
    if(cartData.length === 0){
      notification.error({
        message: 'Shopping cart is empty',
        description:
          'The shopping cart is empty. Please add goods and pay',
      });
    }else{
      notification.success({
        message: 'Payment succeeded',
        description:
          `The total price is ${getSubTotal()}.`,
      });
    }
  };

  const getNum = () => {
    if (cartData.length === 0) {
      return 0;
    }
    let count = 0;
    cartData.forEach((item: { quantity: number; }) => {
      count = count + item.quantity;
    })
    return count;
  }

  const getSubTotal = () => {
    if (cartData.length === 0) {
      return 0;
    }
    let count = 0;
    cartData.forEach((item: { quantity: number; price: number; }) => {
      count = count + item.quantity * item.price;
    })
    return count.toFixed(2);
  }

  const renderCartData = () => {
    return cartData.map((item: any) => {
      return <div className="goods-item" >
        <CloseOutlined onClick={() => {
          delToCart(item);
        }} className="delete-icon" />
        <div className="goods-item-left" >
          <img className="left-img" src={require(`@/asset/products/${item.sku}-1-cart.webp`)} alt="sku图片"/>
          <div className="left-text" >
            <div className="left-text-title" >{item.title}</div>
            <div className="left-text-size" >X | {item.style}</div>
            <div className="left-text-num" >Quantity: {item.quantity}</div>
          </div>
        </div>
        <div className="goods-item-right" >
          <div className="price" >$ 13.25</div>
          <div className="change-button" >
            <div className="sub-button" onClick={() => {
              subToCart(item);
            }}>
              <MinusOutlined />
            </div>
            <div className="add-button" onClick={() => {
              addToCart(item);
            }} >
              <PlusOutlined />
            </div>
          </div>
        </div>
      </div>
    })
  }

  return <div className="Cart" >
    <Drawer
      visible={porps.visible}
      closable={false}
      mask={false}
      getContainer={false}
    >
      {porps.visible ? <div className="Cart-button" onClick={porps.onClose} >
        <CloseOutlined className="Cart-button-icon" />
      </div> : <div className="Cart-button" onClick={porps.onOpen} >
        <ShoppingCartOutlined className="Cart-button-icon" />
        <div className="Cart-button-num" >{getNum()}</div>
      </div>}
      <div className="cart-box" >
        <div className="top-box" >
          <div className="title" >
            <div className="title-cart" >
              <ShoppingCartOutlined className="title-cart-icon" />
              <div className="title-cart-num" >{getNum()}</div>
            </div>
            <div>Cart</div>
          </div>
          <div className="cart-goods" >
            {cartData.length ? renderCartData() : <div className="cart-goods-empty" >
              Add some products in the cart
              <br />
              :)
            </div>}
          </div>
        </div>
        <div className="check-button" >
          <div className="check-total" >
            <div>SUBTOTAL</div>
            <div className="total-num" >$ {getSubTotal()}</div>
          </div>
          <div className="checkout-button" onClick={openNotification} >CHECKOUT</div>
        </div>
      </div>
    </Drawer>
  </div>
}

export default Cart;