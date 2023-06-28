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
  readAll() {
    return this.bensMoveisService.readAll();
  }
  @Get('read-one-bem-movel/:id')
  readOnly(@Param('id') bemMovelId: string) {
    return this.bensMoveisService.readOnly(bemMovelId);
  }

  //UPDATE
  @Put('update-atualizar-bem-movel/:id')
  update(
    @Param('id') bemMovelId: string,
    @Body() updateBemMovelDto: UpdateBemMovelDto,
  ) {
    return this.bensMoveisService.update(bemMovelId, updateBemMovelDto);
  }
  //DELETE
  @Delete('delete-baixa-bem-movel/:id')
  delete(@Param('id') bemMovelId: string) {
    return this.bensMoveisService.delete(bemMovelId);
  }
}
