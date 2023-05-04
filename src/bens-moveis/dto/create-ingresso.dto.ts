//DTO's
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

//interfaces?
export class BemMovel {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  arquivosAnexados: FileDto[];
  tipoIngresso: string;
  ingressoId: string;
}

export class IngressoBemMovel {
  id: string;
  tipoIngresso: string;
  bensMoveis: BemMovelDto[];
}
