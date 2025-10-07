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

const getAllSkills=async(req:Request,res:Response)=>{
    try {
        const verifiedUser=req.user
          const getAllSkills=await skillService.getAllSkills(verifiedUser)
           res.status(201).json(getAllSkills);
        } catch (error:any) {
           res.status(400).json(error.message);
        }
}

const updateSkill=async(req:Request,res:Response)=>{
    try {
           const id=Number(req.params.id)
          const updatedSkill=await skillService.updateSkill(id,req.body)
           res.status(201).json(updatedSkill);
        } catch (error:any) {
           res.status(400).json(error.message);
        }
}

export const skillController={
    createSkill,
    getAllSkills,
    updateSkill
}