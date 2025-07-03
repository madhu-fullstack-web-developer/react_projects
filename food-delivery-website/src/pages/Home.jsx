import React, { useContext, useState } from 'react'
import Nav from "../components/Nav"
import Categories from '../category'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import {food_items} from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux'

function Home() {
    let {cate,setcate,input,showCart,setShowCart}=useContext(dataContext)

function filter(category){
    if(category==="All"){
        setcate(food_items)
    }else{
        let newList=food_items.filter((item)=>(item.food_category===category))
        setcate(newList)
    }
}

let items=useSelector(state=>state.cart)

let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryFee=20;
let taxes=subtotal*0.5/100;
let total = Math.floor(subtotal+deliveryFee+taxes)

  return (
    <div className='bg-slate-100 w-full min-h-screen'>
    <Nav/>
    {!input?<div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
        {Categories.map((item)=>{
        return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-500 rounded-lg shadow-xl hover:bg-orange-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
            {item.icon}
            {item.name}
            </div>   
        })}
    </div>:null}
    
    <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.map((item)=>(
            <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        ))}
    </div>

    <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
            <span className='text-orange-400 text-[18px] font-semibold'>Order Items</span>
            <RxCross2 className='w-[30px] h-[30px] text-orange-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
        </header>
        <div className='w-full mt-9 flex flex-col gap-8'>
            {items.map((item)=>(
                <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
            ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
            <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
                <span className='text-orange-400 font-semibold text-lg'>Rs. {subtotal}/-</span>
            </div>
            <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                <span className='text-orange-400 font-semibold text-lg'>Rs. {deliveryFee}/-</span>
            </div>
            <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                <span className='text-orange-400 font-semibold text-lg'>Rs. {taxes}/-</span>
            </div>
        </div>
        <div className='w-full flex justify-between items-center p-9'>
                <span className='text-2xl text-gray-600 font-semibold'>Total</span>
                <span className='text-orange-400 font-semibold text-2xl'>Rs. {total}/-</span>
        </div>
        <button className='w-[80%] p-3 rounded-lg bg-orange-500 text-white hover:bg-orange-400 transition-all'>Place Order</button>
    </div>

    </div>
  )
}

export default Home