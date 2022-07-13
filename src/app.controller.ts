import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GetBook, InsertBook } from './book.dto';

@Controller('/book')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  public insert(@Body() _body: InsertBook) {
    return this.appService.insert(_body);
  }

  @Get()
  getAll(): Books[] {
    return this.appService.getAll();
  }

  @Get('/:bookId')
  get(@Param() _params: GetBook): Books {
    return this.appService.get(_params);
  }

  @Put('/:bookId')
  update(@Param() _params: GetBook, @Body() _body: InsertBook): Books {
    return this.appService.update(_params.bookId, _body);
  }

  @Delete('/:bookId')
  delete(@Param() _params: GetBook) {
    return this.appService.delete(_params);
  }
}
