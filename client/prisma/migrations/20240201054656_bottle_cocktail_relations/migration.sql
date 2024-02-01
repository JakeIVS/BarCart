/*
  Warnings:

  - Added the required column `categoryId` to the `Bottle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Cocktail` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "BottleCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CocktialCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "bottleCategoryId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "cocktailId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("bottleCategoryId", "cocktailId"),
    CONSTRAINT "Ingredient_bottleCategoryId_fkey" FOREIGN KEY ("bottleCategoryId") REFERENCES "BottleCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ingredient_cocktailId_fkey" FOREIGN KEY ("cocktailId") REFERENCES "Cocktail" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bottle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Bottle_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "BottleCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bottle" ("createdAt", "id", "name", "size", "updatedAt") SELECT "createdAt", "id", "name", "size", "updatedAt" FROM "Bottle";
DROP TABLE "Bottle";
ALTER TABLE "new_Bottle" RENAME TO "Bottle";
CREATE TABLE "new_Cocktail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cocktail_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CocktialCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cocktail" ("createdAt", "id", "instructions", "name", "updatedAt") SELECT "createdAt", "id", "instructions", "name", "updatedAt" FROM "Cocktail";
DROP TABLE "Cocktail";
ALTER TABLE "new_Cocktail" RENAME TO "Cocktail";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
