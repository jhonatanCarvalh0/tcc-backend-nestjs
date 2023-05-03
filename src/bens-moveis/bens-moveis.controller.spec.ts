import { Test, TestingModule } from '@nestjs/testing';
import { BensMoveisController } from './bens-moveis.controller';
import { BensMoveisService } from './bens-moveis.service';

describe('BensMoveisController', () => {
  let controller: BensMoveisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BensMoveisController],
      providers: [BensMoveisService],
    }).compile();

    controller = module.get<BensMoveisController>(BensMoveisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
