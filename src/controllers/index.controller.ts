import {Request,Response} from "express";

export async function getHomeData(req:Request,res:Response){
    res.json({message:"hi :D"})
} 