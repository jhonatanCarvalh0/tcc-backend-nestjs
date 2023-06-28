-- CreateTable
CREATE TABLE "Setor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "unidadeId" INTEGER NOT NULL,

    CONSTRAINT "Setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "setorId" INTEGER NOT NULL,
    "orgaoId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnidadeAdministrativa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "orgaoId" INTEGER NOT NULL,

    CONSTRAINT "UnidadeAdministrativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnidadeGestora" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "UnidadeGestora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orgao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "unidadeGestoraId" INTEGER NOT NULL,

    CONSTRAINT "Orgao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BemMovel" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DOUBLE PRECISION,
    "tipoIngresso" TEXT,
    "orgaoId" INTEGER NOT NULL,
    "ingressoId" INTEGER,

    CONSTRAINT "BemMovel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingresso" (
    "id" SERIAL NOT NULL,
    "tipoIngresso" TEXT NOT NULL,
    "orgaoId" INTEGER NOT NULL,

    CONSTRAINT "Ingresso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileDto" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "bemMovelId" INTEGER NOT NULL,

    CONSTRAINT "FileDto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- AddForeignKey
ALTER TABLE "Setor" ADD CONSTRAINT "Setor_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "UnidadeAdministrativa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "Setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES "Orgao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnidadeAdministrativa" ADD CONSTRAINT "UnidadeAdministrativa_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES "Orgao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orgao" ADD CONSTRAINT "Orgao_unidadeGestoraId_fkey" FOREIGN KEY ("unidadeGestoraId") REFERENCES "UnidadeGestora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BemMovel" ADD CONSTRAINT "BemMovel_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES "Orgao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BemMovel" ADD CONSTRAINT "BemMovel_ingressoId_fkey" FOREIGN KEY ("ingressoId") REFERENCES "Ingresso"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingresso" ADD CONSTRAINT "Ingresso_orgaoId_fkey" FOREIGN KEY ("orgaoId") REFERENCES "Orgao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileDto" ADD CONSTRAINT "FileDto_bemMovelId_fkey" FOREIGN KEY ("bemMovelId") REFERENCES "BemMovel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
