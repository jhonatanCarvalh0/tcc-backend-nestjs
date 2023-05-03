import { Test, TestingModule } from '@nestjs/testing';
import { BensMoveisService } from './bens-moveis.service';

describe('BensMoveisService', () => {
  let service: BensMoveisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BensMoveisService],
    }).compile();

    service = module.get<BensMoveisService>(BensMoveisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
