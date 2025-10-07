import { Prisma, Skill } from "@prisma/client"
import { JwtPayload } from "jsonwebtoken"
import { prisma } from "../../config/db"

const createSkill = async (payload: Prisma.SkillCreateInput, decodedUser: JwtPayload) => {
    const createSkill = await prisma.skill.create({
        data: {
            userId: decodedUser.id,
            ...payload
        },
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                    Role: true
                }
            }
        }
    })

    return createSkill
}


const getAllSkills=async(decodedUser:JwtPayload)=>{
      const getAllSkills=await prisma.skill.findMany({
        where:{userId:decodedUser.id}
      })

      return getAllSkills
}

const updateSkill=async(id:number,payload:Partial<Skill>)=>{
      const updatedSkill=await prisma.skill.update({
        where:{id},
        data:payload
      })

      return updatedSkill
}

export const skillService = {
    createSkill,
    getAllSkills,
    updateSkill
}