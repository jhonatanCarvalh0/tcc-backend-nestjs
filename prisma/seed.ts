import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Inserir exemplos de dados na tabela UnidadeGestora
    const unidadeGestora1 = await prisma.unidadeGestora.create({
      data: {
        nome: 'Unidade Gestora 1',
      },
    });

    const unidadeGestora2 = await prisma.unidadeGestora.create({
      data: {
        nome: 'Unidade Gestora 2',
      },
    });

    // Inserir exemplos de dados na tabela Orgao
    const orgao1 = await prisma.orgao.create({
      data: {
        nome: 'FAPERO',
        unidadeGestoraId: unidadeGestora1.id,
      },
    });

    const orgao2 = await prisma.orgao.create({
      data: {
        nome: 'Orgao 2',
        unidadeGestoraId: unidadeGestora2.id,
      },
    });

    // Inserir exemplos de dados na tabela UnidadeAdministrativa
    const unidadeAdmin1 = await prisma.unidadeAdministrativa.create({
      data: {
        nome: 'Unidade Administrativa 1',
        orgaoId: orgao1.id,
      },
    });

    const unidadeAdmin2 = await prisma.unidadeAdministrativa.create({
      data: {
        nome: 'Unidade Administrativa 2',
        orgaoId: orgao2.id,
      },
    });

    // Inserir exemplos de dados na tabela Setor
    const setor1 = await prisma.setor.create({
      data: {
        nome: 'NCAPT',
        unidadeId: unidadeAdmin1.id,
      },
    });

    const setor2 = await prisma.setor.create({
      data: {
        nome: 'Setor 2',
        unidadeId: unidadeAdmin2.id,
      },
    });

    // Inserir exemplos de dados na tabela Usuario
    await prisma.usuario.createMany({
      data: [
        {
          nome: 'Jhonatan',
          email: 'jhoantan@email.com',
          senha: '12345678',
          cpf: '11122233344',
          setorId: 1,
          orgaoId: 1,
        },
      ],
    });

    // Inserir exemplos de dados na tabela BemMovel
    await prisma.bemMovel.createMany({
      data: [
        {
          nome: 'Bem Móvel 1',
          descricao: 'Descrição do Bem Móvel 1',
          valor: 100.0,
          setorId: 1,
          orgaoId: 1,
        },
        {
          nome: 'Bem Móvel 2',
          descricao: 'Descrição do Bem Móvel 2',
          valor: 200.0,
          setorId: 1,
          orgaoId: 1,
        },
      ],
    });

    // Inserir exemplos de dados na tabela Ingresso
    await prisma.ingresso.createMany({
      data: [
        {
          tipoIngresso: 'Ingresso 1',
          orgaoId: 1,
        },
        {
          tipoIngresso: 'Ingresso 2',
          orgaoId: 1,
        },
      ],
    });

    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro ao inserir os dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch((error) => {
  console.error('Ocorreu um erro no script de preenchimento:', error);
});
