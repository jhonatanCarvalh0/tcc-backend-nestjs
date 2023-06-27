import { FileDto } from '../dto/file.dto';

export class BemMovel {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  arquivosAnexados: FileDto[];
  tipoIngresso: string;
  ingressoId: string;
}
