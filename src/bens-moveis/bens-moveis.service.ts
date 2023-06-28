import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateBemMovelDto } from './dto/update-bem-movel.dto';
import { BemMovel } from './interfaces/bem-movel.interface';
import { CreateIngressoDto, IngressoBemMovel } from './dto/create-ingresso.dto';

@Injectable()
export class BensMoveisService {
  private bensMoveis: BemMovel[] = [];
  private ingressos: IngressoBemMovel[] = [];

  createIngresso(createIngressoDto: CreateIngressoDto) {
    const ingresso = {
      id: uuidv4(),
      tipoIngresso: createIngressoDto.tipoIngresso,
      bensMoveis: [],
    };

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
      //add each bemMovel to BensMoveis array
      this.bensMoveis.push(bemMovel);
      //add each bemMovel to Ingresso {BensMoveis[]}
      ingresso.bensMoveis.push(bemMovel);
    });

    // add ingresso to ingressos array
    this.ingressos.push(ingresso);

    return ingresso;
  }

  findBensByIngresso(ingressoId: string) {
    // filter bemMovel by bemMovel.id
    return this.bensMoveis.filter(
      (bemMovel) => bemMovel.ingressoId === ingressoId,
    );
  }

  // list all bens moveis at array list
  readAll() {
    return this.bensMoveis;
  }

  // return bem movel finded by id
  readOnly(bemMovelId: string) {
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
  update(bemMovelId: string, updateBemMovelDto: UpdateBemMovelDto) {
    // Procura pelo índice do bem móvel no array
    const index = this.bensMoveis.findIndex((item) => item.id === bemMovelId);

    // Verifica se o índice é válido
    if (index !== -1) {
      // Atualiza os campos do bem móvel com os valores fornecidos
      this.bensMoveis[index].nome = updateBemMovelDto.nome;
      this.bensMoveis[index].descricao = updateBemMovelDto.descricao;
      this.bensMoveis[index].valor = updateBemMovelDto.valor;

      // Retorna o bem móvel atualizado
      return this.bensMoveis[index];
    }

    // Retorna null caso o bem móvel não seja encontrado
    return null;
  }

  // delete bem movel
  delete(bemMovelId: string) {
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
