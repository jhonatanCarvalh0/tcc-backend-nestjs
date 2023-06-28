import { Arquivo } from './arquivo.entity';

export class BemMovel {
  id: any;
  nome: string;
  orgao: string;
  setor: string;
  descricao?: string;
  valor?: number;
  tipoIngresso?: string;
  arquivosAnexados: any[];
  orgaoId: any;
  setorId: any;
  ingressoId: any;
}
