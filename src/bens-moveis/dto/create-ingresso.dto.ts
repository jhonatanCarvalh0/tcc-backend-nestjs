export class CreateIngressoDto {
  tipoIngresso: string;
  bensMoveis: BemMovelDto[];
  arquivosAnexados: FileDto[];
}

export class BemMovelDto {
  nome: string;
  descricao: string;
  valor: number;
}

export class FileDto {
  filename: string;
  mimetype: string;
  buffer: Buffer;
}
