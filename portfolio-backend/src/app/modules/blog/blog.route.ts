import express  from "express"
import { blogController } from "./blog.controller"
import { checkAuth } from "../../middlewares/checkAuth"
import { Role } from "@prisma/client"


const router=express.Router()

router.post("/create-blog", checkAuth(...Object.values(Role)), blogController.creatBlog)
router.get("/blogs" , blogController.getAllblogs)
router.get("/blog/:id", blogController.getSingleblog)
router.patch("/blog/:id", checkAuth(...Object.values(Role)), blogController.updateSingleBlog)
router.delete("/blog/:id", checkAuth(...Object.values(Role)), blogController.deleteSingleBlog)

export const blogRouter=router