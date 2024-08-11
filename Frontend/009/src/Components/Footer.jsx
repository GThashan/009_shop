import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="h-[20vh] bg-yellow-400 flex items-center justify-center flex-col relative">
        <FontAwesomeIcon
          icon={faUtensils}
          className="cursor-pointer text-[40px] absolute top-[-40px] bg-yellow-400 p-8 rounded-full"
        />
        <h1 className="font-bold text-[20px] mt-8">
          How do you like to eat? We always Serve the best
        </h1>
      </div>
      <div className="grid grid-cols-4 px-8 py-8 bg-slate-900 text-white">
        <div>
          <h1 className="font-bold my-5">Contact</h1>
          <ul>
            <li>Tel: 0767617650 - Embilipitiya</li>
            <li>Mail : cafe009.lk</li>
            <li> Embilipitiya :Main Street , Embilipitiya</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold my-5">Extras</h1>

          <ul>
            <li> My Account</li>
            <li>Checkout</li>
            <li> Privacy Policy</li>
            <li>My Order</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold my-5">Information</h1>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold my-5">We Accept</h1>
          <img src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
