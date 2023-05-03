import { Module } from '@nestjs/common';
import { BensMoveisService } from './bens-moveis.service';
import { BensMoveisController } from './bens-moveis.controller';

@Module({
  controllers: [BensMoveisController],
  providers: [BensMoveisService],
})
export class BensMoveisModule {}
