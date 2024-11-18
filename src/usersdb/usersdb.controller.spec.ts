import { Test, TestingModule } from '@nestjs/testing';
import { UsersdbController } from './usersdb.controller';
import { UsersdbService } from './usersdb.service';

describe('UsersdbController', () => {
  let controller: UsersdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersdbController],
      providers: [UsersdbService],
    }).compile();

    controller = module.get<UsersdbController>(UsersdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
