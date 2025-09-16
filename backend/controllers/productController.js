import ProductModel from "../models/productModel.js";




export const addProduct = async( req, res ) =>{
    try{
        const {name,description,price,image,category,subCategory,sizes} = req.body;
        const image1 = req.files.image1[0];
        const image2 = req.files.image2[0];
        const image3 = req.files.image3[0];
        const image4 = req.files.image4[0];
        
         

    }
    catch(error){
    }
}





export const ListProducts = async( req, res ) =>{

}




export const removeProduct = async( req, res ) =>{

}




export const singleProduct = async( req, res ) =>{

}
