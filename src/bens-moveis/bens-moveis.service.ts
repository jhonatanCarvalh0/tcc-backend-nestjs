import { Injectable } from '@nestjs/common';
import { BemMovel, CreateIngressoDto } from './dto/create-ingresso.dto';

@Injectable()
export class BensMoveisService {
  private bensMoveis: BemMovel[] = [];
  private ingressos: any[] = [];

  create(createIngressoDto: CreateIngressoDto) {
    const ingresso = {
      tipoIngresso: createIngressoDto.tipoIngresso,
      bensMoveis: [],
    };

    createIngressoDto.bensMoveis.forEach((createBemMovelDto) => {
      const bemMovel = {
        id: this.bensMoveis.length + 1, //trocar por um gerador de id
        nome: createBemMovelDto.nome,
        descricao: createBemMovelDto.descricao,
        valor: createBemMovelDto.valor,
        arquivosAnexados: createBemMovelDto.arquivosAnexados,
        ingressoId: this.ingressos.length + 1, //trocar por um gerador de id
      };
      this.bensMoveis.push(bemMovel);
      ingresso.bensMoveis.push(bemMovel);
    });

    this.ingressos.push(ingresso);

    return ingresso;
  }

  findAll() {
    return this.ingressos;
  }

  findBensByIngresso(ingressoId: number) {
    return this.bensMoveis.filter(
      (bemMovel) => bemMovel.ingressoId === ingressoId,
    );
  }
}
