import { Injectable } from '@nestjs/common';
import {
  BemMovel,
  CreateIngressoDto,
  IngressoBemMovel,
} from './dto/create-ingresso.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BensMoveisService {
  private bensMoveis: BemMovel[] = [];
  private ingressos: IngressoBemMovel[] = [];

  create(createIngressoDto: CreateIngressoDto) {
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
      this.bensMoveis.push(bemMovel);
      ingresso.bensMoveis.push(bemMovel);
    });

    this.ingressos.push(ingresso);

    return ingresso;
  }

  findAll() {
    return this.bensMoveis;
  }

  findBensByIngresso(ingressoId: string) {
    return this.bensMoveis.filter(
      (bemMovel) => bemMovel.ingressoId === ingressoId,
    );
  }
}
