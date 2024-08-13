import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Rice } from '../assets/Item';


export default function Select() {
  const [cart, setCart] = useState([]);

  
  const addToCart = (item) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(cartItem => cartItem.name === item.name);
      if (itemExists) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  
  const removeFromCart = (itemName) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.name !== itemName));
  };


  const updateQuantity = (itemName, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.name === itemName
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

 
  const total = cart.reduce((sum, item) => sum + item.price.replace('Rs ', '') * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className='px-8 py-8 mt-10'>
        <h1 className='text-center font-bold text-[50px] uppercase text-slate-800'>FUSION SUBMARINE</h1>
        <p className='text-center text-[15px] font-semibold py-5 text-slate-600'>
          Dive into a culinary adventure with our fusion submarine! Stacked with the freshest ingredients and bursting with flavors, every bite takes you on a journey beneath layers of deliciousness. Get ready to submerge your cravings!
        </p>

        <div className='lg:grid grid-cols-3 mx-auto gap-4'>
          {Rice.map((rice, index) => (
            <div key={index} className='shadow uppercase font-bold cursor-pointer p-4'>
              <img src={rice.url} alt="" className='w-full' />
              <p className='text-gray-500'>__FUSION SUBMARINE</p>
              <h1>{rice.name}</h1>
              <h1 className='text-red-800 text-[20px]'>{rice.price}</h1>
              <button onClick={() => addToCart(rice)} className='bg-green-700 p-3 text-white'>
                Add To Cart
              </button>
            </div>
          ))}
        </div>

     
        {cart.length > 0 && (
          <div className='mt-10'>
            <h2 className='text-center font-bold text-[30px] uppercase text-slate-800'>Your Cart</h2>
            <table className='w-full mt-5'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td><img src={item.url} alt={item.name} className='w-16' /></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.name, Number(e.target.value))}
                        className='w-12 p-1 text-center border'
                      />
                    </td>
                    <td>
                      <button onClick={() => removeFromCart(item.name)} className='text-red-500'>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='text-right mt-4'>
              <h2 className='text-2xl font-bold'>Total: Rs {total.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
