import mongoose from "mongoose";

export const schemasMovies = mongoose.Schema({
   name: { type: String, required: true },
   gender: { type: String, required: true },
   duration: { type: int, required: true },
   releaseDate: { type: Date, required: true },
   description: { type: String, required: true },
   is_active: { type: Boolean, required: true },
   dateCreate: { timestamp: true },
});
