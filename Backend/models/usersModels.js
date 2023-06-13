import mongoose from "mongoose";

export const usersSchemas = mongoose.Schema({
   name: { type: String, required: [true, 'Teclea tu nombre por favor'] },
   lastName: { type: String, required: [true, 'Teclea tu apellido por favor'] },
   userName: { type: String, required: [true, 'Teclea tu username por favor'] },
   email: { type: String, required: [true, 'Teclea tu email por favor'] },
   password: { type: String, required: [true, 'Teclea tu password por favor'] },
   userCreate: { timestamp: true }
});
