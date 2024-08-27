import express from "express";
import { Donor } from "../models/donorModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find({});
    return res.status(200).json({
      count: donors.length,
      data: donors,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const donor = await Donor.findById(id);
    return res.status(200).json(donor);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.bloodGroup ||
      !req.body.district ||
      !req.body.upzilla
    ) {
      return res.status(400).send("Fill all the fields.");
    }

    const newDonor = {
      name: req.body.name,
      email: req.body.author,
      password: req.body.password,
      bloodGroup: req.body.bloodGroup,
      district: req.body.district,
      upzilla: req.body.upzilla,
    };
    const donor = await Donor.create(newDonor);
    return res.status(201).send(donor);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.bloodGroup ||
      !req.body.district ||
      !req.body.upzilla
    ) {
      return res.status(400).send({ message: "Fill all the fields." });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).send({ message: "Donor not found" });
    }
    return res.status(201).send({ message: "Donor is updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Donor not found" });
    }
    res.status(200).send({ message: "Donor is deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
