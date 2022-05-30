import React, { useEffect, useState } from "react";
import { Row, Col, Spin,notification } from "antd"
import axios from 'axios'
import { intersection } from 'lodash';
import {useSessionContext} from "@/context/sessionContext" ;
import Cart from '@/page/Cart'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import './index.scss';

const OrderType = ["ORD","H2L","L2H"];

const HomePage = () => {
  const [news, setNews] = useState([]);// 商品数据
  const [showNews, setShowNews] = useState([]);// 商品数据
  const [select, setSelect] = useState([]);// 筛选数据
  const [visible, setVisible] = useState(false);// 展开购物车
  // const [cartData, setCartData] = useState(JSON.parse(sessionStorage.getItem("cartData"))?JSON.parse(sessionStorage.getItem("cartData")):[]);// 购物车数据
  const [{cartData},{setCartData}] = useSessionContext();
  const [orderType,setOrderType] = useState(OrderType[0]);// 排序数据
  const [activeId,setActiveId] = useState('');// 排序数据

  useEffect(() => {
    getNews();
  }, [])

  useEffect(() => {
    const filterNews = () => {
      let newList = [...news];
      if (select.length === 0) {
        switch (orderType){
          case OrderType[0]:
            setShowNews(newList);
            break;
          case OrderType[1]:
            setShowNews(newList.sort((n,p)=>p.price-n.price));
            break;
          case OrderType[2]:
            setShowNews(newList.sort((n,p)=>n.price-p.price));
            break;
          default:
            setShowNews(newList);
            break;
        }
      } else {
        let _showNews = [];
        news && news.forEach((item) => {
          if (intersection(item.availableSizes, select).length !== 0) {
            _showNews.push(item);
          }
        });
        switch (orderType){
          case OrderType[0]:
            setShowNews(_showNews);
            break;
          case OrderType[1]:
            setShowNews(_showNews.sort((n,p)=>p.price-n.price));
            break;
          case OrderType[2]:
            setShowNews(_showNews.sort((n,p)=>n.price-p.price));
            break;
          default:
            setShowNews(_showNews);
            break;
        }
      }
    }
    filterNews();
  }, [news, select,orderType])


  // useEffect(() => {
  //   saveData();
  // }, [cartData])

  // const saveData = () => {
  //   sessionStorage.setItem("cartData", JSON.stringify(cartData));
  // }

  // 添加购物车
  const addToCart = (item) => {
    let changed = false;
    cartData.forEach((_item) => {
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

  //改变排序
  const changeOrder = () => {
    let index = OrderType.indexOf(orderType);
    if(index + 1 === OrderType.length){
      setOrderType(OrderType[0]);
    }else{
      setOrderType(OrderType[index+1]);
    }
  }

  //获取接口数据
  const getNews = async function () {
    try{
      const reason = await axios({
        method: 'get',
        url: 'https://react-shopping-cart-67954.firebaseio.com/products.json',
      });
      setNews(reason.data.products);
      setShowNews(reason.data.products);
    }catch{
      notification.error({
        message: 'Error',
        description:
          'The api is fail.Please try again later.',
      })
    }
  }

  //渲染商品卡片
  const returnCard = () => {
    return showNews && showNews.map((item) => {
      const priceString = item.price.toString();
      const id = require(`@/asset/products/${item.sku}-1-product.webp`);
      const hover = require(`@/asset/products/${item.sku}-2-product.webp`);
      return <Col key={item.id} xl={6} lg={8} md={12} span={12}>
        <div className="goods-card"
          onMouseOver={()=>{
            setActiveId(item.id);
          }}
          onMouseLeave={()=>{
            setActiveId('');
          }}
        >
          <div className="goods-img" 
            style={activeId === item.id?{backgroundImage:`url(${hover})`}:{backgroundImage:`url(${id})`}}
            >
            {item.isFreeShipping && <span className="img-tip" >Free shipping</span>}
          </div>
          <div className="goods-name" >{item.title}</div>
          <div className="line" ></div>
          <div className="price" >
            <div  >
              <span className="dollar" >$</span><span className="yuan" >{Math.floor(item.price)}</span><span className="fen" >{priceString.substring(priceString.indexOf("."))}</span>
            </div>
            <div className="tips" >or {item.installments} x<b>${(item.price / item.installments).toFixed(2)}</b></div>
          </div>
          <div className="button" onClick={() => {
            addToCart(item)
          }} >Add to cart</div>
        </div>
      </Col>
    })
  }

  // 筛选size
  const onSelect = (selectSize) => {
    if (select.indexOf(selectSize) !== -1) {
      let _select = [...select];
      _select.splice(select.indexOf(selectSize), 1);
      setSelect(_select);
    } else {
      let _select = [...select];
      _select.push(selectSize);
      setSelect(_select);
    }
  }

  // 渲染筛选菜单
  const sizeSelect = () => {
    const sizeSelectList = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
    return sizeSelectList.map((item) => {
      return <div key={item} onClick={() => onSelect(item)} className={`size-select-button ${select.includes(item) && 'select-active'}`} >{item}</div>
    })
  }

  return <div className="home" >
    <div className="menu" >
      <div className="size-title" >
        Sizes:
      </div>
      <div className="size-select" >
        {sizeSelect()}
      </div>
    </div>
    <div className="content" >
      <div className="content-head" >
        <div className="content-total" >{showNews && showNews.length} Product(s) found</div>
        <div className="content-order" >
          <div>Order by</div>
          <div className="content-order-select" onClick={changeOrder} >
            {orderType===OrderType[0]&&<div className="select-item" >Ordinary<div className="select-icon" ><CaretUpOutlined /><CaretDownOutlined /></div></div>}
            {orderType===OrderType[1]&&<div className="select-item" >Highest to lowest<div className="select-icon" ><CaretUpOutlined /><CaretDownOutlined /></div></div>}
            {orderType===OrderType[2]&&<div className="select-item" >Lowest to highest<div className="select-icon" ><CaretUpOutlined /><CaretDownOutlined /></div></div>}
          </div>
        </div>
      </div>
      <Row gutter={16} >
        {showNews ? returnCard() :
          <Col span={24} >
            <Spin size="large" >
              <div className="spin-box" ></div>
            </Spin>
          </Col>}
      </Row>
    </div>
    <Cart
      visible={visible}
      onClose={() => setVisible(!visible)}
      onOpen={() => setVisible(!visible)}
    />
  </div>
}
export default HomePage;