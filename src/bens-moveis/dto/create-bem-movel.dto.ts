import { ArquivoDto } from './arquivo.dto';

export class CreateBemMovelDto {
  nome: string;
  descricao?: string;
  valor?: number;
  arquivosAnexados: any[];
  orgaoId: any;
  setorId: any;
  ingressoId: any;
}
