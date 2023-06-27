import { BemMovelDto } from './bem-movel.dto';

//DTO's
export class CreateIngressoDto {
  tipoIngresso: string;
  bensMoveis: BemMovelDto[];
}

//interfaces?

export class IngressoBemMovel {
  id: string;
  tipoIngresso: string;
  bensMoveis: BemMovelDto[];
}
