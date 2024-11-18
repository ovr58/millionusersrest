import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { UsersdbService } from './usersdb.service';
import { Prisma } from '@prisma/client';

@Controller('usersdb')
export class UsersdbController {
  constructor(private readonly usersdbService: UsersdbService) {}

  @Post()
  create(@Body() createUsersdbDto: Prisma.UserCreateInput) {
    return this.usersdbService.create(createUsersdbDto);
  }

  @Get()
  findAll(@Query('problemata') problemata?: string) {
    let problemataBoolean: boolean | undefined;
    if (problemata === 'true') {
      problemataBoolean = true;
    } else if (problemata === 'false') {
      problemataBoolean = false;
    }
    return this.usersdbService.findAll(problemataBoolean);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersdbService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersdbDto: Prisma.UserUpdateInput,
  ) {
    return this.usersdbService.update(+id, updateUsersdbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersdbService.remove(+id);
  }
}
