import { Test, TestingModule } from '@nestjs/testing';
import { LiburService } from './libur.service';

describe('LiburService', () => {
  let service: LiburService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiburService],
    }).compile();

    service = module.get<LiburService>(LiburService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
