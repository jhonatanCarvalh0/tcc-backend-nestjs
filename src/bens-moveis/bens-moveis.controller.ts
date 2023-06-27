import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
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

  //READ
  @Get('read-all-bem-movel')
  findAll() {
    return this.bensMoveisService.findAll();
  }
  @Get('read-one-bem-movel/:id')
  findOne(@Param('id') bemMovelId: string) {
    return this.bensMoveisService.findOne(bemMovelId);
  }

  //UPDATE
  @Put('update-atualizar-bem-movel/:id')
  update(
    @Param('id') bemMovelId: string,
    @Body() updateBemMovelDto: UpdateBemMovelDto,
  ) {
    return this.bensMoveisService.updateBemMovel(bemMovelId, updateBemMovelDto);
  }
  //DELETE
  @Delete('delete-baixa-bem-movel/:id')
  delete(@Param('id') bemMovelId: string) {
    return this.bensMoveisService.deleteBemMovel(bemMovelId);
  }
}
