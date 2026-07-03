-- CreateEnum
CREATE TYPE "status" AS ENUM ('Uninitialized', 'InProgress', 'Completed');

-- CreateTable
CREATE TABLE "entry" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "status" NOT NULL DEFAULT 'Uninitialized',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "entry_url_key" ON "entry"("url");
