import React from 'react'
import image from '../assets/ave-calvar-oJnIxxSpCCE-unsplash.jpg'
import Button from './Button'
import BlueText from './BlueText'
const Main = () => {
  return (
  <div className='flex m-4 mt-10 gap-5'>
    <img src={image} className='w-1/2 rounded-lg '></img>
    <div className='m-2'>
      <h1 className='font-bold text-2xl mb-2'>Apple iPhone 16 Pro (Desert Titanium, 128 GB)₹1,19,900</h1>
      <p className='my-2 font-bold'>₹1,19,900</p>
      <p><BlueText content={`Available offers`}/></p>
      <p><b>Bank Offer5%</b> Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
      <p><b>Bank Offer5%</b> ₹4000 Off On ICICI Bank Credit Non EMI, Credit and Debit Card EMI Transactions</p>
      <p><b>Bank Offer5%</b> ₹4000 Off On Kotak Bank Credit Card Transactions</p>
      <p><b>Partner Offer</b> Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</p>
    <div className='w-1/2 h-1/4 border border-gray-400 flex flex-col justify-between  p-4 text-left'>
    <div >
    <input type='radio' name='Exchangeoffer' id='radio1'></input>
    <label for='radio1'>Buy without Exchange ₹119,900</label>
    </div>
  <div className='bg-gray-400 h-[1px] relative left-0 top-0'></div>
    <div>
    <input type='radio'name='Exchangeoffer' id='radio2'></input>
    <label for='radio2'>Buy with Exchange up to ₹46,800 off</label>
    </div>
    </div>

    <div className='flex gap-4 w-full '>
    <Button 
    buttonContent={`Add to Cart`}
    buttonColor={`orange-500`} 
    buttonTextColor={`white`}
    />

<Button 
    buttonContent={`Buy Now`}
    buttonColor={`orange-500`} 
    buttonTextColor={`white`}
    />
    </div>

    </div>
  </div>
  )
}

export default Main
