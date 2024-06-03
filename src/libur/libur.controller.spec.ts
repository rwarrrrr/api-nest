import { Test, TestingModule } from '@nestjs/testing';
import { LiburController } from './libur.controller';
import { LiburService } from './libur.service';

describe('LiburController', () => {
  let controller: LiburController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiburController],
      providers: [LiburService],
    }).compile();

    controller = module.get<LiburController>(LiburController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
