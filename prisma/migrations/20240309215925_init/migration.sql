-- CreateTable
CREATE TABLE "Jet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "wingspan" REAL NOT NULL,
    "engines" INTEGER NOT NULL,
    "year" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Jet_name_key" ON "Jet"("name");
