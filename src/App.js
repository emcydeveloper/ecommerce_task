import { createContext, useReducer, useState } from "react";
import { CartItems } from "./CartItems";
import { DisplayItems } from "./DisplayItems";
import { Header } from "./Header";
import "./style.css";
import { Routes , Route } from "react-router-dom";
import products from "./products.json";

console.log(products)
export let context = createContext();

// let dataManage = {productList:[
//   {
//     "id": 1,
//     "tag": "Headphone",
//     "productName": "Sony Headset",
//     "image": "",
//     "productPrice": 10,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 2,
//     "tag": "Speakers",
//     "productName": "Sony Speaker",
//     "image": "",
//     "productPrice": 20,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 3,
//     "tag": "Computer",
//     "productName": "Sony Computer",
//     "image": "",
//     "productPrice": 20,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 4,
//     "tag": "Speakers",
//     "productName": "Sony Speaker S-22",
//     "image": "",
//     "productPrice": 20,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 5,
//     "tag": "Speakers",
//     "productName": "Sony Speaker Zabvc",
//     "image": "",
//     "productPrice": 200,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   }
//   ,
//   {
//     "id": 6,
//     "tag": "Speakers",
//     "productName": "Sony Speaker hello world",
//     "image": "",
//     "productPrice": 20,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 7,
//     "tag": "Speakers",
//     "productName": "Sony Speaker",
//     "image": "",
//     "productPrice": 220,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 8,
//     "tag": "Speakers",
//     "productName": "Sony Speaker",
//     "image": "",
//     "productPrice": 320,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 9,
//     "tag": "Speakers",
//     "productName": "Sony Speaker",
//     "image": "",
//     "productPrice": 280,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   },
//   {
//     "id": 10,
//     "tag": "Speakers",
//     "productName": "Sony Speaker",
//     "image": "",
//     "productPrice": 120,
//     "cartStatus": false,
//     "quanty": 1,
//     "total": 0
//   }

// ],
// cartItems:[],
// cartCount:0,
// };

let dataManage = {productList:products,
cartItems:[],
cartCount:0,
};

function reducer(state,action){
  
  switch(action.type){
    case "addedToCart":
      dataManage.productList.map((item)=> {if(item.id===action.productId) {item.cartStatus=true;item.total=item.productPrice*item.quanty}});
      dataManage.cartItems = dataManage.productList.filter((items)=>{return items.cartStatus===true})
      dataManage.cartCount=dataManage.cartItems.length;
      return {...state,  cartCount: dataManage.cartItems.length, cartItems:dataManage.cartItems,productList:dataManage.productList};

      case "removeFromCart":
      dataManage.productList.map((item)=> {if(item.id===action.productId) {item.quanty=1 ; item.cartStatus=false;item.total=item.productPrice*item.quanty}});
      dataManage.cartItems = dataManage.productList.filter((items)=>{return items.cartStatus===true})
      dataManage.cartCount=dataManage.cartItems.length;
      return {...state,  cartCount: dataManage.cartItems.length, cartItems:dataManage.cartItems,productList:dataManage.productList};

      case "handleAddQuanty":
      // dataManage.productList.map((item)=> {if(item.id===action.productId) { item.quanty += 1 ; item.total=item.productPrice*item.quanty}});
      dataManage.cartItems.map((item)=> {if(item.id===action.productId) { item.quanty += 1 ; item.total=item.productPrice*item.quanty;}});
      // dataManage.cartItems = dataManage.productList.filter((items)=>{return items.cartStatus===true})
      return {...state,  cartCount: dataManage.cartItems.length, cartItems:dataManage.cartItems};

      case "handlereduceQuanty":
        // dataManage.productList.map((item)=> {if(item.id===action.productId) { item.quanty -= 1 ;item.total=item.productPrice*item.quanty}});
        dataManage.cartItems.map((item)=> {if(item.id===action.productId) { item.quanty -= 1 ;item.total=item.productPrice*item.quanty}});
        dataManage.cartItems = dataManage.productList.filter((items)=>{return items.cartStatus===true})
        return {...state,  cartCount: dataManage.cartItems.length, cartItems:dataManage.cartItems};
  }
}

export default function App() {

  let [product, dispatch] = useReducer(reducer, dataManage);


  return (
    <context.Provider value={{product,dispatch}}>
    <div className="App">

      <Routes>
      <Route path='/cartitems' element={<CartItems/>} />
      <Route path='/home' element={  <Home /> } />
      <Route path='/' element={  <Home /> } />
      </Routes>
    </div>
    </context.Provider>
  );
}

function Home(){
  return(
    <>
          <Header />
      <DisplayItems />
    </>
  )
}