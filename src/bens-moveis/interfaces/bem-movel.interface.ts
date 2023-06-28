import { Arquivo } from '@prisma/client';

export class BemMovelInterface {
  nome: string;
  descricao?: string;
  valor?: number;
  arquivosAnexados: any[];
  orgaoId: any;
  setorId: any;
  ingressoId: any;
  id: string;
}
