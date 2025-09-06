// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       `${process.env.DATABASE_CONNECTION_URL}/superio-job-portal`
//     );

//     console.log("✅ Database connected successfully");
//   } catch (error) {
//     console.log(error);
//     console.log("❎ Database connection failed");
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❎ Database connection error:", error);
    console.log("❎ Database connection failed");
  }
};

export default connectDB;
