import { BemMovel } from '@prisma/client';

export class Ingresso {
  id: any;
  tipoIngresso: string;
  orgaoId: number;
  orgao: string;
  bensMoveis: BemMovel[];
}
