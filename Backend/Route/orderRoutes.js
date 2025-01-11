
import express from 'express'
import Order from '../Model/order.js';

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { tableNumber, items } = req.body;

   
    let totalAmount = 0;
    items.forEach(item => {
      totalAmount += item.price * item.quantity;
    });

    const order = new Order({ tableNumber, items, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("items.itemId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router
