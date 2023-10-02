import { CustomAPIError } from "../errors/custom-error.js"

const errorHandleMiddleware = (err,req,res,next)=>{
    return res.status(err.status).json({msg:err.message})
}

export {errorHandleMiddleware}