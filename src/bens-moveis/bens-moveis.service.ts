import { Injectable } from '@nestjs/common';
import { CreateIngressoDto } from './dto/create-ingresso.dto';

@Injectable()
export class BensMoveisService {
  create(createIngressoDto: CreateIngressoDto) {
    return 'This action adds a new bensMovei';
  }
}
