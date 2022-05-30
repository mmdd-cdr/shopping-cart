(self.webpackChunkshopping_cart=self.webpackChunkshopping_cart||[]).push([[408],{2408:function(t,e,c){"use strict";c.r(e),c.d(e,{default:function(){return O}});var s=c(5861),i=c(3433),a=c(9439),r=c(7757),n=c.n(r),d=c(2791),o=c(96),p=c(9603),u=c(605),l=c(1776),f=c(4569),b=c.n(f),x=c(763),m=c(7211),h=c(1954),w=c(732),v=c(2143),j=c(9286),N=c(6533),g=c(184),Z=function(t){var e=(0,m.T)(),s=(0,a.Z)(e,2),r=s[0].cartData,n=s[1].setCartData,d=function(){if(0===r.length)return 0;var t=0;return r.forEach((function(e){t+=e.quantity})),t},p=function(){if(0===r.length)return 0;var t=0;return r.forEach((function(e){t+=e.quantity*e.price})),t.toFixed(2)};return(0,g.jsx)("div",{className:"Cart",children:(0,g.jsxs)(h.Z,{visible:t.visible,closable:!1,mask:!1,getContainer:!1,children:[t.visible?(0,g.jsx)("div",{className:"Cart-button",onClick:t.onClose,children:(0,g.jsx)(w.Z,{className:"Cart-button-icon"})}):(0,g.jsxs)("div",{className:"Cart-button",onClick:t.onOpen,children:[(0,g.jsx)(N.Z,{className:"Cart-button-icon"}),(0,g.jsx)("div",{className:"Cart-button-num",children:d()})]}),(0,g.jsxs)("div",{className:"cart-box",children:[(0,g.jsxs)("div",{className:"top-box",children:[(0,g.jsxs)("div",{className:"title",children:[(0,g.jsxs)("div",{className:"title-cart",children:[(0,g.jsx)(N.Z,{className:"title-cart-icon"}),(0,g.jsx)("div",{className:"title-cart-num",children:d()})]}),(0,g.jsx)("div",{children:"Cart"})]}),(0,g.jsx)("div",{className:"cart-goods",children:r.length?r.map((function(t){return(0,g.jsxs)("div",{className:"goods-item",children:[(0,g.jsx)(w.Z,{onClick:function(){!function(t){var e=0;r.forEach((function(c,s){c.id===t.id&&(e=s)}));var c=(0,i.Z)(r);c.splice(e,1),n(c)}(t)},className:"delete-icon"}),(0,g.jsxs)("div",{className:"goods-item-left",children:[(0,g.jsx)("img",{className:"left-img",src:c(5727)("./".concat(t.sku,"-1-cart.webp")),alt:"sku\u56fe\u7247"}),(0,g.jsxs)("div",{className:"left-text",children:[(0,g.jsx)("div",{className:"left-text-title",children:t.title}),(0,g.jsxs)("div",{className:"left-text-size",children:["X | ",t.style]}),(0,g.jsxs)("div",{className:"left-text-num",children:["Quantity: ",t.quantity]})]})]}),(0,g.jsxs)("div",{className:"goods-item-right",children:[(0,g.jsx)("div",{className:"price",children:"$ 13.25"}),(0,g.jsxs)("div",{className:"change-button",children:[(0,g.jsx)("div",{className:"sub-button",onClick:function(){!function(t){r.forEach((function(e){e.id===t.id&&e.quantity>1&&(e.quantity-=1)})),n((0,i.Z)(r))}(t)},children:(0,g.jsx)(v.Z,{})}),(0,g.jsx)("div",{className:"add-button",onClick:function(){!function(t){var e=!1;r.forEach((function(c){c.id===t.id&&(c.quantity+=1,e=!0)})),e?n((0,i.Z)(r)):(t.quantity=1,n([].concat((0,i.Z)(r),[t])))}(t)},children:(0,g.jsx)(j.Z,{})})]})]})]})})):(0,g.jsxs)("div",{className:"cart-goods-empty",children:["Add some products in the cart",(0,g.jsx)("br",{}),":)"]})})]}),(0,g.jsxs)("div",{className:"check-button",children:[(0,g.jsxs)("div",{className:"check-total",children:[(0,g.jsx)("div",{children:"SUBTOTAL"}),(0,g.jsxs)("div",{className:"total-num",children:["$ ",p()]})]}),(0,g.jsx)("div",{className:"checkout-button",onClick:function(){0===r.length?o.Z.error({message:"Shopping cart is empty",description:"The shopping cart is empty. Please add goods and pay"}):o.Z.success({message:"Payment succeeded",description:"The total price is ".concat(p(),".")})},children:"CHECKOUT"})]})]})]})})},k=c(2234),y=c(1753),C=["ORD","H2L","L2H"],O=function(){var t=(0,d.useState)([]),e=(0,a.Z)(t,2),r=e[0],f=e[1],h=(0,d.useState)([]),w=(0,a.Z)(h,2),v=w[0],j=w[1],N=(0,d.useState)([]),O=(0,a.Z)(N,2),E=O[0],S=O[1],L=(0,d.useState)(!1),D=(0,a.Z)(L,2),T=D[0],q=D[1],M=(0,m.T)(),U=(0,a.Z)(M,2),_=U[0].cartData,z=U[1].setCartData,F=(0,d.useState)(C[0]),X=(0,a.Z)(F,2),H=X[0],P=X[1],$=(0,d.useState)(""),A=(0,a.Z)($,2),I=A[0],B=A[1];(0,d.useEffect)((function(){K()}),[]),(0,d.useEffect)((function(){!function(){var t=(0,i.Z)(r);if(0===E.length)switch(H){case C[0]:j(t);break;case C[1]:j(t.sort((function(t,e){return e.price-t.price})));break;case C[2]:j(t.sort((function(t,e){return t.price-e.price})));break;default:j(t)}else{var e=[];switch(r&&r.forEach((function(t){0!==(0,x.intersection)(t.availableSizes,E).length&&e.push(t)})),H){case C[0]:j(e);break;case C[1]:j(e.sort((function(t,e){return e.price-t.price})));break;case C[2]:j(e.sort((function(t,e){return t.price-e.price})));break;default:j(e)}}}()}),[r,E,H]);var K=function(){var t=(0,s.Z)(n().mark((function t(){var e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b()({method:"get",url:"https://react-shopping-cart-67954.firebaseio.com/products.json"});case 3:e=t.sent,f(e.data.products),j(e.data.products),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o.Z.error({message:"Error",description:"The api is fail.Please try again later."});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"home",children:[(0,g.jsxs)("div",{className:"menu",children:[(0,g.jsx)("div",{className:"size-title",children:"Sizes:"}),(0,g.jsx)("div",{className:"size-select",children:["XS","S","M","ML","L","XL","XXL"].map((function(t){return(0,g.jsx)("div",{onClick:function(){return function(t){if(-1!==E.indexOf(t)){var e=(0,i.Z)(E);e.splice(E.indexOf(t),1),S(e)}else{var c=(0,i.Z)(E);c.push(t),S(c)}}(t)},className:"size-select-button ".concat(E.includes(t)&&"select-active"),children:t},t)}))})]}),(0,g.jsxs)("div",{className:"content",children:[(0,g.jsxs)("div",{className:"content-head",children:[(0,g.jsxs)("div",{className:"content-total",children:[v&&v.length," Product(s) found"]}),(0,g.jsxs)("div",{className:"content-order",children:[(0,g.jsx)("div",{children:"Order by"}),(0,g.jsxs)("div",{className:"content-order-select",onClick:function(){var t=C.indexOf(H);t+1===C.length?P(C[0]):P(C[t+1])},children:[H===C[0]&&(0,g.jsxs)("div",{className:"select-item",children:["Ordinary",(0,g.jsxs)("div",{className:"select-icon",children:[(0,g.jsx)(k.Z,{}),(0,g.jsx)(y.Z,{})]})]}),H===C[1]&&(0,g.jsxs)("div",{className:"select-item",children:["Highest to lowest",(0,g.jsxs)("div",{className:"select-icon",children:[(0,g.jsx)(k.Z,{}),(0,g.jsx)(y.Z,{})]})]}),H===C[2]&&(0,g.jsxs)("div",{className:"select-item",children:["Lowest to highest",(0,g.jsxs)("div",{className:"select-icon",children:[(0,g.jsx)(k.Z,{}),(0,g.jsx)(y.Z,{})]})]})]})]})]}),(0,g.jsx)(u.Z,{gutter:16,children:v?v&&v.map((function(t){var e=t.price.toString(),s=c(4918)("./".concat(t.sku,"-1-product.webp")),a=c(1979)("./".concat(t.sku,"-2-product.webp"));return(0,g.jsx)(p.Z,{xl:6,lg:8,md:12,span:12,children:(0,g.jsxs)("div",{className:"goods-card",onMouseOver:function(){B(t.id)},onMouseLeave:function(){B("")},children:[(0,g.jsx)("div",{className:"goods-img",style:I===t.id?{backgroundImage:"url(".concat(a,")")}:{backgroundImage:"url(".concat(s,")")},children:t.isFreeShipping&&(0,g.jsx)("span",{className:"img-tip",children:"Free shipping"})}),(0,g.jsx)("div",{className:"goods-name",children:t.title}),(0,g.jsx)("div",{className:"line"}),(0,g.jsxs)("div",{className:"price",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{className:"dollar",children:"$"}),(0,g.jsx)("span",{className:"yuan",children:Math.floor(t.price)}),(0,g.jsx)("span",{className:"fen",children:e.substring(e.indexOf("."))})]}),(0,g.jsxs)("div",{className:"tips",children:["or ",t.installments," x",(0,g.jsxs)("b",{children:["$",(t.price/t.installments).toFixed(2)]})]})]}),(0,g.jsx)("div",{className:"button",onClick:function(){!function(t){var e=!1;_.forEach((function(c){c.id===t.id&&(c.quantity+=1,e=!0)})),e?z((0,i.Z)(_)):(t.quantity=1,z([].concat((0,i.Z)(_),[t])))}(t)},children:"Add to cart"})]})},t.id)})):(0,g.jsx)(p.Z,{span:24,children:(0,g.jsx)(l.Z,{size:"large",children:(0,g.jsx)("div",{className:"spin-box"})})})})]}),(0,g.jsx)(Z,{visible:T,onClose:function(){return q(!T)},onOpen:function(){return q(!T)}})]})}},5727:function(t,e,c){var s={"./10547961582846888-1-cart.webp":8484,"./10686354557628304-1-cart.webp":5711,"./11033926921508488-1-cart.webp":830,"./11600983276356164-1-cart.webp":3521,"./11854078013954528-1-cart.webp":4667,"./12064273040195392-1-cart.webp":6791,"./18532669286405344-1-cart.webp":4534,"./18644119330491310-1-cart.webp":9391,"./27250082398145996-1-cart.webp":7183,"./39876704341265610-1-cart.webp":9249,"./51498472915966370-1-cart.webp":758,"./5619496040738316-1-cart.webp":237,"./6090484789343891-1-cart.webp":6781,"./8552515751438644-1-cart.webp":8995,"./876661122392077-1-cart.webp":1390,"./9197907543445676-1-cart.webp":6688};function i(t){var e=a(t);return c(e)}function a(t){if(!c.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id=5727},4918:function(t,e,c){var s={"./10547961582846888-1-product.webp":4960,"./10686354557628304-1-product.webp":7733,"./11033926921508488-1-product.webp":9112,"./11600983276356164-1-product.webp":3924,"./11854078013954528-1-product.webp":1819,"./12064273040195392-1-product.webp":7926,"./18532669286405344-1-product.webp":6447,"./18644119330491310-1-product.webp":7136,"./27250082398145996-1-product.webp":1313,"./39876704341265610-1-product.webp":3584,"./51498472915966370-1-product.webp":4212,"./5619496040738316-1-product.webp":4605,"./6090484789343891-1-product.webp":2603,"./8552515751438644-1-product.webp":7742,"./876661122392077-1-product.webp":6215,"./9197907543445676-1-product.webp":8457};function i(t){var e=a(t);return c(e)}function a(t){if(!c.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id=4918},1979:function(t,e,c){var s={"./10547961582846888-2-product.webp":166,"./10686354557628304-2-product.webp":8241,"./11033926921508488-2-product.webp":8872,"./11600983276356164-2-product.webp":1982,"./11854078013954528-2-product.webp":119,"./12064273040195392-2-product.webp":7555,"./18532669286405344-2-product.webp":7355,"./18644119330491310-2-product.webp":1739,"./27250082398145996-2-product.webp":9347,"./39876704341265610-2-product.webp":9855,"./51498472915966370-2-product.webp":6977,"./5619496040738316-2-product.webp":6635,"./6090484789343891-2-product.webp":2928,"./8552515751438644-2-product.webp":8646,"./876661122392077-2-product.webp":1198,"./9197907543445676-2-product.webp":1817};function i(t){var e=a(t);return c(e)}function a(t){if(!c.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id=1979},8484:function(t,e,c){"use strict";t.exports=c.p+"static/media/10547961582846888-1-cart.664ac19f7a63e4cc71c4.webp"},4960:function(t,e,c){"use strict";t.exports=c.p+"static/media/10547961582846888-1-product.76c02f8ee37e439fad3b.webp"},166:function(t,e,c){"use strict";t.exports=c.p+"static/media/10547961582846888-2-product.e13582db1e9abd8e34b5.webp"},5711:function(t,e,c){"use strict";t.exports=c.p+"static/media/10686354557628304-1-cart.db808de9790b1faa0c7b.webp"},7733:function(t,e,c){"use strict";t.exports=c.p+"static/media/10686354557628304-1-product.00bf8ca2603352e0cfad.webp"},8241:function(t,e,c){"use strict";t.exports=c.p+"static/media/10686354557628304-2-product.fea1f2b89e7733b96b38.webp"},830:function(t,e,c){"use strict";t.exports=c.p+"static/media/11033926921508488-1-cart.06cf28a4bfad914de8dc.webp"},9112:function(t,e,c){"use strict";t.exports=c.p+"static/media/11033926921508488-1-product.e80b2a0ba8e1d1c30095.webp"},8872:function(t,e,c){"use strict";t.exports=c.p+"static/media/11033926921508488-2-product.708970a88ed8cbf1921e.webp"},3521:function(t,e,c){"use strict";t.exports=c.p+"static/media/11600983276356164-1-cart.9edc99212cf0cdb5df56.webp"},3924:function(t,e,c){"use strict";t.exports=c.p+"static/media/11600983276356164-1-product.e4dadda2c10e5e458cce.webp"},1982:function(t,e,c){"use strict";t.exports=c.p+"static/media/11600983276356164-2-product.5c2a80784aba6e84c493.webp"},4667:function(t,e,c){"use strict";t.exports=c.p+"static/media/11854078013954528-1-cart.e812cb67caa885a5474a.webp"},1819:function(t,e,c){"use strict";t.exports=c.p+"static/media/11854078013954528-1-product.e540be53e59461e648c8.webp"},119:function(t,e,c){"use strict";t.exports=c.p+"static/media/11854078013954528-2-product.11fc624a0057dbbafcdb.webp"},6791:function(t,e,c){"use strict";t.exports=c.p+"static/media/12064273040195392-1-cart.f25c143c92f2c2cf1052.webp"},7926:function(t,e,c){"use strict";t.exports=c.p+"static/media/12064273040195392-1-product.85191f0d6e809687fe4a.webp"},7555:function(t,e,c){"use strict";t.exports=c.p+"static/media/12064273040195392-2-product.71724fe50e92c9279519.webp"},4534:function(t,e,c){"use strict";t.exports=c.p+"static/media/18532669286405344-1-cart.4e4dfc89e261eb04b182.webp"},6447:function(t,e,c){"use strict";t.exports=c.p+"static/media/18532669286405344-1-product.7cde472a672f1f3412aa.webp"},7355:function(t,e,c){"use strict";t.exports=c.p+"static/media/18532669286405344-2-product.783be0ba5d624b65b697.webp"},9391:function(t,e,c){"use strict";t.exports=c.p+"static/media/18644119330491310-1-cart.f874f0a4fae9e3a8d147.webp"},7136:function(t,e,c){"use strict";t.exports=c.p+"static/media/18644119330491310-1-product.3ab8c5301302c1f8add4.webp"},1739:function(t,e,c){"use strict";t.exports=c.p+"static/media/18644119330491310-2-product.0407433696869d3a2dbf.webp"},7183:function(t,e,c){"use strict";t.exports=c.p+"static/media/27250082398145996-1-cart.b22e53c114b6ae9100c8.webp"},1313:function(t,e,c){"use strict";t.exports=c.p+"static/media/27250082398145996-1-product.1dd6d87d61bfdb92f787.webp"},9347:function(t,e,c){"use strict";t.exports=c.p+"static/media/27250082398145996-2-product.f5b4fed52ecbfa0f4234.webp"},9249:function(t,e,c){"use strict";t.exports=c.p+"static/media/39876704341265610-1-cart.004ab14f683844198e97.webp"},3584:function(t,e,c){"use strict";t.exports=c.p+"static/media/39876704341265610-1-product.1f07d5fa94ed8584c756.webp"},9855:function(t,e,c){"use strict";t.exports=c.p+"static/media/39876704341265610-2-product.3235f492c13172fce85d.webp"},758:function(t,e,c){"use strict";t.exports=c.p+"static/media/51498472915966370-1-cart.d53b5b1e58a84e19b7b0.webp"},4212:function(t,e,c){"use strict";t.exports=c.p+"static/media/51498472915966370-1-product.e53dc0babb7b44f7e40e.webp"},6977:function(t,e,c){"use strict";t.exports=c.p+"static/media/51498472915966370-2-product.e0df7a2ffcefb9cb78dc.webp"},237:function(t,e,c){"use strict";t.exports=c.p+"static/media/5619496040738316-1-cart.2f49803d72efc8b68aa1.webp"},4605:function(t,e,c){"use strict";t.exports=c.p+"static/media/5619496040738316-1-product.f8e172dd538635d22ef8.webp"},6635:function(t,e,c){"use strict";t.exports=c.p+"static/media/5619496040738316-2-product.eacb81485e73d2239281.webp"},6781:function(t,e,c){"use strict";t.exports=c.p+"static/media/6090484789343891-1-cart.7b5622dedf127331fc97.webp"},2603:function(t,e,c){"use strict";t.exports=c.p+"static/media/6090484789343891-1-product.71fc50c019740fbf7e8e.webp"},2928:function(t,e,c){"use strict";t.exports=c.p+"static/media/6090484789343891-2-product.561147fd95b56af83742.webp"},8995:function(t,e,c){"use strict";t.exports=c.p+"static/media/8552515751438644-1-cart.50b97093ba17b5aea490.webp"},7742:function(t,e,c){"use strict";t.exports=c.p+"static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp"},8646:function(t,e,c){"use strict";t.exports=c.p+"static/media/8552515751438644-2-product.6df01508d4cdad361b39.webp"},1390:function(t,e,c){"use strict";t.exports=c.p+"static/media/876661122392077-1-cart.f8dd87bd515537dd31d6.webp"},6215:function(t,e,c){"use strict";t.exports=c.p+"static/media/876661122392077-1-product.8c566b01d48c7b6964f0.webp"},1198:function(t,e,c){"use strict";t.exports=c.p+"static/media/876661122392077-2-product.fdcfc2361538ab8da20a.webp"},6688:function(t,e,c){"use strict";t.exports=c.p+"static/media/9197907543445676-1-cart.06382e6e916ca43f0304.webp"},8457:function(t,e,c){"use strict";t.exports=c.p+"static/media/9197907543445676-1-product.25f42b6c504af11cc71c.webp"},1817:function(t,e,c){"use strict";t.exports=c.p+"static/media/9197907543445676-2-product.10edcb56f4de9c30cdc9.webp"}}]);
//# sourceMappingURL=408.f3def101.chunk.js.map