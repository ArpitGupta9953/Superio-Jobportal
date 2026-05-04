// import express from "express";
// import "dotenv/config";
// import bodyParser from "body-parser";
// import cors from "cors";

// import connectDB from "./src/db/connectDB.js";
// import userRoutes from "./src/routes/userRoutes.js";
// import companyRoutes from "./src/routes/companyRoutes.js";
// import jobRoutes from "./src/routes/jobRoutes.js";
// import Cloudinary from "./src/utils/Cloudinary.js";

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// connectDB();
// Cloudinary();

// app.get("/", (req, res) => res.send("api is working"));

// app.use("/user", userRoutes);
// app.use("/company", companyRoutes);
// app.use("/job", jobRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDB from "./src/db/connectDB.js";
import userRoutes from "./src/routes/userRoutes.js";
import companyRoutes from "./src/routes/companyRoutes.js";
import jobRoutes from "./src/routes/jobRoutes.js";
import Cloudinary from "./src/utils/Cloudinary.js";

const app = express();


// ✅ MIDDLEWARES
app.use(express.json()); // bodyParser ki jagah yeh use kar

// ✅ CORS FIX (LOCAL + PRODUCTION DONO)
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (origin.includes("localhost")) return callback(null, true);
    if (origin.endsWith(".vercel.app")) return callback(null, true);
    return callback(new Error("CORS blocked: " + origin));
  },
  credentials: true
}));

// ✅ DB + CLOUDINARY
connectDB();
Cloudinary();


// ✅ ROUTES
app.get("/", (req, res) => res.send("API is working"));

app.use("/user", userRoutes);
app.use("/company", companyRoutes);
app.use("/job", jobRoutes);


// ✅ SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});