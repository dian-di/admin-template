-- CreateEnum
CREATE TYPE "status" AS ENUM ('Uninitialized', 'InProgress', 'Completed');

-- CreateTable
CREATE TABLE "entry" (
    "id" SERIAL NOT NULL,
    "sub_project_uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "status" NOT NULL DEFAULT 'Uninitialized',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_entry_sub_project" ON "entry"("sub_project_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "entry_sub_project_uuid_url_key" ON "entry"("sub_project_uuid", "url");
