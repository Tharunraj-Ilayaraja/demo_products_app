export const logger = (req,res,next)=>{
    req.username = "John"
    console.log(new Date().toLocaleString()," ",req.method," ",req.url);
    next();
}

