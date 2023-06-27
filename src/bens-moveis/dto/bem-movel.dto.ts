import { FileDto } from './file.dto';

export class BemMovelDto {
  nome: string;
  descricao: string;
  valor: number;
  arquivosAnexados: FileDto[];
}
