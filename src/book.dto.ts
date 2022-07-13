import { IsNumberString, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
class Author {
  @IsString()
  name: string;

  @IsString()
  gender: string;
}

export class InsertBook {
  @IsString()
  name: string;

  @IsString()
  genre: string;

  @Type(() => Author)
  @ValidateNested()
  author: Author;
}

export class GetBook {
  @IsNumberString()
  bookId: number;
}
