import mongoose from "mongoose";

export const connectiondb = async () => {
   try {
      const conectiondb = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Mongodb connected: ${conectiondb.connection.host}`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};
