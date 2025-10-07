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


const getAllSkills=async()=>{
      const getAllSkills=await prisma.skill.findMany()

      return getAllSkills
}

const updateSkill=async(id:number,payload:Partial<Skill>)=>{
      const updatedSkill=await prisma.skill.update({
        where:{id},
        data:payload
      })

      return updatedSkill
}

const deleteSingleSkill=async(id:number)=>{
      const deletedSkill=await prisma.skill.delete({
        where:{id}
      })

      return deletedSkill
}

export const skillService = {
    createSkill,
    getAllSkills,
    updateSkill,
    deleteSingleSkill
}