-- CreateTable
CREATE TABLE "Cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cursos_id_key" ON "Cursos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cursos_nome_key" ON "Cursos"("nome");
