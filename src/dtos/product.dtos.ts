import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
