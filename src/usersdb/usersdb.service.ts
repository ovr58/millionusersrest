import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersdbService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUsersdbDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({ data: createUsersdbDto });
  }

  async findAll(problemata?: boolean) {
    if (problemata !== undefined) {
      const users = await this.databaseService.user.findMany({
        where: { problemata },
      });
      return `Кол-во пользователей ${problemata ? 'с проблемами' : 'без проблем'}: ${users.length}`;
    }
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUsersdbDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUsersdbDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
