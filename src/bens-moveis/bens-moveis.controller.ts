import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { BensMoveisService } from './bens-moveis.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateBemMovelDto } from './dto/update-bem-movel.dto';

@Controller('bens-moveis')
export class BensMoveisController {
  constructor(private readonly bensMoveisService: BensMoveisService) {}
  //CREATE
  @Post('create-ingresso')
  create(@Body() createIngressoDto: CreateIngressoDto) {
    return this.bensMoveisService.createIngresso(createIngressoDto);
  }

  //READE
  @Get('read-all-bem-movel')
  findAll() {
    return this.bensMoveisService.findAll();
  }
  @Get('read-one-bem-movel')
  findOne(bemMovelId: string) {
    return this.bensMoveisService.findOne(bemMovelId);
  }

  //UPDATE
  @Put('update-atualizar-bem-movel')
  update(bemMovelId: string, updateBemMovelDto: UpdateBemMovelDto) {
    return this.bensMoveisService.updateBemMovel(bemMovelId, updateBemMovelDto);
  }
  //DELETE
  @Delete('delete-baixa-bem-movel')
  delete(bemMovelId: string) {
    return this.bensMoveisService.deleteBemMovel(bemMovelId);
  }
}
