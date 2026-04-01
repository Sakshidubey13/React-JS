import express from "express";
import FormData from "../models/FormData.js";

const router = express.Router();

router.post("/save-form", async (req, res) => {
  try {
    const newForm = new FormData(req.body);
    await newForm.save();

    res.status(201).json({
      message: "Data Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/all-records", async (req, res) => {
  try {
    const records = await FormData.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
