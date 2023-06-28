import { BemMovel } from '@prisma/client';
import { BemMovelInterface } from '../interfaces/bem-movel.interface';

export class CreateIngressoDto {
  tipoIngresso: string;
  orgaoId: any;
  bensMoveis: BemMovelInterface[];
}
