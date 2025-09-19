import express from "express";
import { addProduct, ListProducts, removeProduct, singleProduct } from "../controllers/productController";
import upload from "../middleware/multer";
import { adminAuth } from "../controllers/adminAuth";
const app = express.Router();


app.post("/add",adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addProduct);
app.get("/list", ListProducts);
app.post("/remove",adminAuth, removeProduct);
app.post("/single", singleProduct);

export default app;