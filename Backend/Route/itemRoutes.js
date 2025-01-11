
import express from 'express'
import Item from '../Model/item.js';
const router = express.Router();


router.get("/category/:categoryId", async (req, res) => {
  try {
    const items = await Item.find({ categoryId: req.params.categoryId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name, info, price, quantity, imageUrl, categoryId } = req.body;
    const item = new Item({ name, info, price, quantity, imageUrl, categoryId });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router
