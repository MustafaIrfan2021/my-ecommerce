// import multer from "multer";

// const storage = multer.diskStorage({
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// export default upload;


import multer from "multer";

// Vercel ke liye memoryStorage behtar hai kyunki diskStorage allow nahi hota
const storage = multer.memoryStorage();

const upload = multer({ 
    storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit (aapka frontend pehle hi compress kar raha hai)
});

export default upload;