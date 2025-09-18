import ProductModel from "../models/productModel.js";
import { cloudinary } from "../config/cloudinary.js";
import { json } from "express";



export const addProduct = async( req, res ) =>{
    try{
        const {name,description,price,image,category,subCategory,sizes,bestSeller} = req.body;
        const image1 =req.files.image1 && req.files.image1[0];
        const image2 =req.files.image2 && req.files.image2[0];
        const image3 =req.files.image3 && req.files.image3[0];
        const image4 =req.files.image4 && req.files.image4[0];
        
        const images = [image1,image2,image3,image4].filter((item)=> item!=undefined);
        
        let imagesUrl = Promise.call(images.map(async (image) => {
            const result = await cloudinary.uploader.upload(image.path,{resource_type:"image"});
             return result.secure_url;
        })) 

        const product = await ProductModel.create({
            name,
            description,
            price,
            image:imagesUrl,
            category,
            bestSeller: bestSeller || false,
            subCategory,
            sizes:json.parse(sizes),

        });
        res.status(200).json("Product added",product);

    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}





export const ListProducts = async( req, res ) =>{
    try{
        const products = await ProductModel.find({});
        res.status(200).json(products);
    }
    catch(error){
        console.log(error); 
    }
    
}




export const removeProduct = async( req, res ) =>{
    try{
        const {id} = req.body;
        await ProductModel.findByIdAndDelete(id);
        res.status(200).json("Product removed");
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}



export const singleProduct = async( req, res ) =>{
    try{
        const {id} = req.body;
        const product = await ProductModel.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}
