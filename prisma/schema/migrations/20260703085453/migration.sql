-- CreateEnum
CREATE TYPE "completed" AS ENUM ('Completed', 'Uncompleted');

-- CreateEnum
CREATE TYPE "type" AS ENUM ('Text', 'Image', 'Video');

-- CreateTable
CREATE TABLE "demo" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "status" NOT NULL DEFAULT 'Uninitialized',
    "completed" "completed" NOT NULL DEFAULT 'Uncompleted',
    "type" "type" NOT NULL DEFAULT 'Text',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "demo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "demo_url_key" ON "demo"("url");
