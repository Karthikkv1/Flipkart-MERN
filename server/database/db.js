import mongoose from "mongoose"; // 04-01-2024

export const Connection = async () => {
  const URL =
    "mongodb://Karthik:<Karthikswebsite>@ac-yvtti9e-shard-00-00.kxv1o8i.mongodb.net:27017,ac-yvtti9e-shard-00-01.kxv1o8i.mongodb.net:27017,ac-yvtti9e-shard-00-02.kxv1o8i.mongodb.net:27017/FLIPKART CLONE?ssl=true&replicaSet=atlas-2454tz-shard-0&authSource=admin&retryWrites=true&w=majority";
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
