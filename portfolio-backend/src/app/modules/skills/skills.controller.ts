import { Request, Response } from "express";
import { skillService } from "./skills.service";

const createSkill=async(req:Request,res:Response)=>{
    try {
        const verifiedUser=req.user
          const createSkill=await skillService.createSkill(req.body,verifiedUser)
           res.status(201).json(createSkill);
        } catch (error:any) {
           res.status(400).json(error.message);
        }
}

export const skillController={
    createSkill
}