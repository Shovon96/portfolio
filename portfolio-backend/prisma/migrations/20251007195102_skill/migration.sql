-- CreateTable
CREATE TABLE "public"."Skill" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);
