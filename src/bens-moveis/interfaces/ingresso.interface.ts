import { BemMovel } from './bem-movel.interface';

export interface Ingresso {
  tipoIngresso: string;
  bensMoveis: BemMovel[];
}

interface Arquivo {
  filename: string;
  mimetype: string;
  buffer: Buffer;
}
