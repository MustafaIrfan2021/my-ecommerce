import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// INFO: Route for adding a product (Vercel & MemoryStorage Compatible)
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    // Files ko memory se pakarna
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const productImages = [image1, image2, image3, image4].filter(
      (image) => image !== undefined
    );

    // [IMPORTANT] Cloudinary Buffer Upload Logic
    let imageUrls = await Promise.all(
      productImages.map(async (image) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { 
                resource_type: "image",
                folder: "products" // Optional: Cloudinary mein folder ka naam
            },
            (error, result) => {
              if (error) {
                console.log("Cloudinary Error:", error);
                reject(error);
              } else {
                resolve(result.secure_url);
              }
            }
          );
          // Memory buffer ko stream mein bhej dena
          stream.end(image.buffer);
        });
      })
    );


  const productData = {
  name,
  description,
  price: Number(price),
  category,
  subCategory,
  sizes: JSON.parse(sizes),
  bestSeller: bestSeller === "true" || bestSeller === true,
  bestseller: bestSeller === "true" || bestSeller === true,
  image: imageUrls,
  date: Date.now(),
};

    const product = new productModel(productData);
    await product.save();

    res.status(201).json({ success: true, message: "Product added" });
  } catch (error) {
    console.log("Error while adding product: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// INFO: Route for fetching all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log("Error while fetching all products: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// INFO: Route for removing a product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log("Error while removing product: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// INFO: Route for fetching a single product
const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log("Error while fetching single product: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, getSingleProduct };