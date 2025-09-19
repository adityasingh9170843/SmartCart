import jwt from "jsonwebtoken";


export const adminAuth = async(req, res, next) =>{
    try{
        const token = req.cookies.token;
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if(err){
                    res.status(401).json({message:"Unauthorized"});
                }
                else{
                    if(user.email === process.env.ADMIN_EMAIL){
                        next();
                    }
                    else{
                        res.status(401).json({message:"Unauthorized"});
                    }
                }
            });
        }
        else{
            res.status(401).json({message:"Unauthorized"});
        }
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}