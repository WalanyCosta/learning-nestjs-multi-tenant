-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createAt" DATETIME NOT NULL,
    "updateAt" DATETIME NOT NULL,
    "partnerId" INTEGER NOT NULL,
    CONSTRAINT "Event_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
