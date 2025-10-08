-- CreateEnum
CREATE TYPE "public"."SkillType" AS ENUM ('Frontend', 'Backend');

-- AlterTable
ALTER TABLE "public"."Skill" ADD COLUMN     "skillType" "public"."SkillType" NOT NULL DEFAULT 'Frontend';
