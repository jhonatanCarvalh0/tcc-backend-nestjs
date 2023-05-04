export class CreateIngressoDto {
  tipoIngresso: string;
  bensMoveis: BemMovelDto[];
}

export class BemMovelDto {
  nome: string;
  descricao: string;
  valor: number;
  arquivosAnexados: FileDto[];
}

export class FileDto {
  filename: string;
  mimetype: string;
  buffer: Buffer;
}

export class BemMovel {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  arquivosAnexados: FileDto[];
  ingressoId: number;
}
