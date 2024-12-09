-- CreateTable
CREATE TABLE "Partner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PartnerUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "partnerId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "PartnerUser_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PartnerUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PartnerUser_userId_key" ON "PartnerUser"("userId");
