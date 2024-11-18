import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name must not be empty' })
  name: string;

  @IsBoolean({ message: 'problemata must be a boolean' })
  problemata: boolean;
}
