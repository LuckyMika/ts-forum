-- CreateTable
CREATE TABLE "Rank" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "permissions" INTEGER NOT NULL,
    "power" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "RankRelation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expires_at" DATETIME NOT NULL,
    "rankId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "RankRelation_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RankRelation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
