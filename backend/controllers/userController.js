import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



export const loginUser = async(req, res) =>{

}




export const registerUser = async(req, res) =>{
    const {name, email, password} = req.body

    try{
        const existUser = await UserModel.findOne({email});
        if(existUser){
            return res.status(400).json({message: "User already exist"});
        }
    }
    catch(error){
        console.log(error);
    }
}



//admin route


export const adminLogin = async(req, res) =>{

}