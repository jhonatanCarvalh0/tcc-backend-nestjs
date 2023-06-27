import { Injectable } from '@nestjs/common';
import { CreateIngressoDto, IngressoBemMovel } from './dto/create-ingresso.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateBemMovelDto } from './dto/update-bem-movel.dto';
import { BemMovel } from './interfaces/bem-movel.interface';
import { BemMovelDto } from './dto/bem-movel.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BensMoveisService {
  // array for test purpouses
  private bensMoveis: BemMovel[] = [
    {
      id: '00000000',
      nome: 'nome-bem-movel',
      descricao: 'descricao-bem-movel',
      valor: 200,
      arquivosAnexados: [],
      tipoIngresso: 'compra',
      ingressoId: '1',
    },
  ];
  private ingressos: IngressoBemMovel[] = [];
  //
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  createIngresso_OUTDATED(createIngressoDto: CreateIngressoDto) {
    const ingresso = {
      id: uuidv4(),
      tipoIngresso: createIngressoDto.tipoIngresso,
      bensMoveis: [],
    };

    if (Array.isArray(createIngressoDto.bensMoveis)) {
      console.log('entrou array');

      createIngressoDto.bensMoveis.forEach((createBemMovelDto) => {
        const bemMovel = {
          id: uuidv4(),
          nome: createBemMovelDto.nome,
          descricao: createBemMovelDto.descricao,
          valor: createBemMovelDto.valor,
          arquivosAnexados: createBemMovelDto.arquivosAnexados,
          tipoIngresso: ingresso.tipoIngresso,
          ingressoId: ingresso.id,
        };
        // add each bemMovel to BensMoveis array
        this.bensMoveis.push(bemMovel);
        // add each bemMovel to Ingresso {BensMoveis[]}
        ingresso.bensMoveis.push(bemMovel);
      });
    }
    console.log('nao entrou array');

    // add ingresso to ingressos array
    this.ingressos.push(ingresso);

    return ingresso;
  }

  async createIngresso(createIngressoDto: CreateIngressoDto) {
    const ingresso = await this.createIngressoInDatabase(createIngressoDto);
    await this.adicionarBensMoveis(ingresso.id, createIngressoDto.bensMoveis);
    return ingresso;
  }

  private async createIngressoInDatabase(createIngressoDto: CreateIngressoDto) {
    return {
      id: uuidv4(),
      tipoIngresso: createIngressoDto.tipoIngresso,
      bensMoveis: [],
    };
  }

  private adicionarBensMoveis(ingresso: any, bensMoveisDto: BemMovelDto[]) {
    if (Array.isArray(bensMoveisDto)) {
      bensMoveisDto.forEach((createBemMovelDto) => {
        const bemMovel = {
          id: uuidv4(),
          nome: createBemMovelDto.nome,
          descricao: createBemMovelDto.descricao,
          valor: createBemMovelDto.valor,
          arquivosAnexados: createBemMovelDto.arquivosAnexados,
          tipoIngresso: ingresso.tipoIngresso,
          ingressoId: ingresso.id,
        };
        this.bensMoveis.push(bemMovel);
        ingresso.bensMoveis.push(bemMovel);
      });
    }
  }

  findBensByIngresso(ingressoId: string) {
    // filter bemMovel by bemMovel.id
    return this.bensMoveis.filter(
      (bemMovel) => bemMovel.ingressoId === ingressoId,
    );
  }

  // list all bens moveis at array list
  findAll() {
    return this.bensMoveis;
  }

  // return bem movel finded by id
  findOne(bemMovelId: string) {
    // Search for index of bem movel ar array
    const index = this.bensMoveis.findIndex((item) => item.id === bemMovelId);

    //verify if index is valid
    if (index !== -1) {
      //return bem movel encontrado
      return this.bensMoveis[index];
    }

    // return null if bem movel was not found
    return null;
  }

  // update bem-movel
  updateBemMovel(bemMovelId: string, updateBemMovelDto: UpdateBemMovelDto) {
    // Procura pelo índice do bem móvel no array
    console.log(updateBemMovelDto);

    const index = this.bensMoveis.findIndex((item) => item.id === bemMovelId);
    const { nome, descricao, valor } = updateBemMovelDto;
    // Verifica se o índice é válido
    if (index !== -1) {
      // Atualiza os campos do bem móvel com os valores fornecidos
      this.bensMoveis[index].nome = nome;
      this.bensMoveis[index].descricao = descricao;
      this.bensMoveis[index].valor = valor;

      // Retorna o bem móvel atualizado
      return this.bensMoveis[index];
    }

    // Retorna null caso o bem móvel não seja encontrado
    return null;
  }

  // delete bem movel
  deleteBemMovel(bemMovelId: string) {
    // Procura pelo índice do bem móvel no array
    const index = this.bensMoveis.findIndex((item) => item.id === bemMovelId);

    // Verifica se o índice é válido
    if (index !== -1) {
      // Remove o bem móvel do array
      const deletedBemMovel = this.bensMoveis.splice(index, 1)[0];

      // Retorna o bem móvel removido
      return deletedBemMovel;
    }

    // Retorna null caso o bem móvel não seja encontrado
    return null;
  }
}
