import express  from "express"
import { checkAuth } from "../../middlewares/checkAuth"
import { Role } from "@prisma/client"
import { skillController } from "./skills.controller"


const router=express.Router()

router.post("/add-skill",checkAuth(...Object.values(Role)), skillController.createSkill)
router.get("/skills",checkAuth(...Object.values(Role)), skillController.getAllSkills)
router.patch("/skill/:id",checkAuth(...Object.values(Role)), skillController.updateSkill)

export const skillsRouter=router