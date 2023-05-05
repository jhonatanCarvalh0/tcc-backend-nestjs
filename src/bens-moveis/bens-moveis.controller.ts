import { Controller, Post, Body, Get } from '@nestjs/common';
import { BensMoveisService } from './bens-moveis.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';

@Controller('bens-moveis')
export class BensMoveisController {
  constructor(private readonly bensMoveisService: BensMoveisService) {}

  @Post('ingresso')
  create(@Body() createIngressoDto: CreateIngressoDto) {
    return this.bensMoveisService.create(createIngressoDto);
  }

  @Get('list')
  findAll() {
    return this.bensMoveisService.findAll();
  }
}
