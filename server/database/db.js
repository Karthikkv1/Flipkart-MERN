import mongoose from "mongoose"; // 04-01-2024

export const Connection = async () => {
  const URL =
    "mongodb+srv://dbm135338:<zy25AaqyIQ8vBvzm>@ecommerce.5fmujji.mongodb.net/?retryWrites=false&w=majority";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
