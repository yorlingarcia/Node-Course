-- CreateTable
CREATE TABLE "toDo" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR NOT NULL,
    "completedAt" TIMESTAMP,

    CONSTRAINT "toDo_pkey" PRIMARY KEY ("id")
);
