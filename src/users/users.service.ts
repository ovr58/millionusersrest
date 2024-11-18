import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', problemata: false },
    { id: 2, name: 'Jane Williams', problemata: true },
    { id: 3, name: 'John Smith', problemata: false },
    { id: 4, name: 'Jane Doe', problemata: true },
    { id: 5, name: 'John Williams', problemata: false },
  ];

  findAll(problemata?: boolean) {
    if (problemata) {
      const problemataArray = this.users.filter(
        (user) => user.problemata === problemata,
      );
      if (problemataArray.length === 0) {
        throw new NotFoundException(`No users with problemata ${problemata}`);
      }
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  create(user: CreateUserDto) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, userUpdate: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      this.users[userIndex] = { ...this.users[userIndex], ...userUpdate };
      return this.users[userIndex];
    }
    return null;
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      const user = this.users[userIndex];
      this.users = this.users.filter((user) => user.id !== id);
      return user;
    }
    return null;
  }
}
