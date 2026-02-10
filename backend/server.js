// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // INFO: Create express app mern stack
// const app = express();
// const port = process.env.PORT;
// connectDB();
// connectCloudinary();

// // INFO: Middleware
// app.use(express.json());
// app.use(cors({
//   origin: "https://my-ecommerce-admin-ruby.vercel.app", 
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "token"], 
//   credentials: true
// }));


// // INFO: API endpoints
// app.use("/api/user", userRouter);
// app.use("/api/product", productRouter);
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)
// // INFO: Default route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // INFO: Start server
// app.listen(port, () =>
//   console.log(`Server is running on at http://localhost:${port}`)
// );


import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Database aur Cloudinary connections
connectDB();
connectCloudinary();

// [SMART CORS CONFIG]
const allowedOrigins = [
  "https://my-ecommerce-front-end.vercel.app",
  "https://my-ecommerce-admin-ruby.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(express.json());

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin);
      callback(new Error("CORS policy block: This origin is not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "token", "Authorization"],
  credentials: true
}));

app.options('*', cors());

// API Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () =>
  console.log(`Server is running at port: ${port}`)
);