import { Prisma } from "@prisma/client"
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


export const skillService = {
    createSkill
}