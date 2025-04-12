import {
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsNotEmpty,
  MinLength,
  IsEnum,
} from "class-validator";
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsStrongPassword()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
  @IsEnum(["admin", "user"])
  @IsNotEmpty()
  role: string;
}

