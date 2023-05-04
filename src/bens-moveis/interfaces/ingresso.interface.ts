export interface Ingresso {
  tipoIngresso: string;
  bensMoveis: BemMovel[];
}

interface BemMovel {
  nome: string;
  descricao: string;
  valor: number;
  arquivosAnexados: Arquivo[];
}

interface Arquivo {
  filename: string;
  mimetype: string;
  buffer: Buffer;
}
