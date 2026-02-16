// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// const app = express();
// const port = process.env.PORT || 4000;


// connectDB();
// connectCloudinary();


// app.use(express.json());


// app.use(cors({
//     origin: true,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "token", "Authorization", "Accept"]
// }));


// app.use((req, res, next) => {
//     res.setHeader('Accept', 'application/json');
//     next();
// });

// app.get('/api/ping', (req, res) => {
//   res.status(200).json({ message: "I am awake!" });
// });

// // API Routes
// app.use("/api/user", userRouter);
// app.use("/api/product", productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);

// // Root Route
// app.get("/", (req, res) => {
//     res.json({ message: "API is running..." });
// });

// app.options('*', cors());


// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
// });

// app.listen(port, () =>
//     console.log(`Server is running at port: ${port}`)
// );

// export default app; 


import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database & Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "token", "Authorization", "Accept"]
}));

app.use((req, res, next) => {
    res.setHeader('Accept', 'application/json');
    next();
});


app.get('/api/ping', (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: "I am awake!",
        timestamp: new Date().toISOString()
    });
});

// 2. ROOT ROUTE
app.get("/", (req, res) => {
    res.json({ message: "API is running..." });
});

// 3. API ROUTES
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Pre-flight Requests
app.options('*', cors());

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start Server
app.listen(port, () =>
    console.log(`Server is running at port: ${port}`)
);

export default app;