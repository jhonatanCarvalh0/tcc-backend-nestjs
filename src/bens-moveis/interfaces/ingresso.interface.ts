import { BemMovel } from '@prisma/client';

export class IngressoInterface {
  tipoIngresso: string;
  orgaoId: number;
  bensMoveis: any[];
}
