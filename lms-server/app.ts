import express, { NextFunction, Request, Response } from "express";
require('dotenv').config()
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";

// body parser
app.use(express.json({limit: "50mb"}))

//  cookies parser
app.use(cookieParser());


app.use(cors({
    origin: process.env.ORIGIN
}))


app.get("/test", (req:Request,res:Response, next: NextFunction) => {
    res.status(200).json({
        sucess: true,
        message: "API is working properly"
    })
})

// unknown route
app.all("*", (req:Request, res:Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
})



app.use(ErrorMiddleware)