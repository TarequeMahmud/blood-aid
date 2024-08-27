import mongoose from "mongoose";

const donorSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    district: { type: String, required: true },
    upzilla: { type: String, required: true },
  },
  { timestamps: true }
);

export const Donor = mongoose.model("Donor", bookSchema);
