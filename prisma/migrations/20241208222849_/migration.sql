-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "partnerId" INTEGER NOT NULL,
    CONSTRAINT "Event_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("createAt", "date", "description", "id", "name", "partnerId", "updateAt") SELECT "createAt", "date", "description", "id", "name", "partnerId", "updateAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
