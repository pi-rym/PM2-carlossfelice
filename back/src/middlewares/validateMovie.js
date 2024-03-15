const validateMovie=(req,res,next)=>{

    const {title,description,year}=req.body;

    if(![title,description,year].every(Boolean))
    return res.status(400).json(
        {message:"Faltan datos por completar"});
    else{
        next();
    }
}
module.exports=validateMovie;