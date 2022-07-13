import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetBook, InsertBook } from './book.dto';

const books: Books[] = [];
let bookId = 1;
@Injectable()
export class AppService {
  insert(_body: InsertBook) {
    const book: Books = {
      bookId,
      name: _body.name,
      genre: _body.genre,
      author: _body.author,
    };
    books.push(book);
    bookId++;
    return book;
  }

  getAll(): Books[] {
    return books;
  }

  get(_params: GetBook): Books {
    const book = books.filter((item) => {
      return item.bookId == _params.bookId;
    })[0];
    if (!book) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    return book;
  }

  update(_bookId: number, _body: InsertBook): Books {
    const book = books.filter((item) => {
      return item.bookId == _bookId;
    })[0];
    book.name = _body.name;
    book.genre = _body.genre;
    book.author = _body.author;
    return book;
  }

  delete(_params: GetBook) {
    const book = books.filter((item) => {
      return item.bookId == _params.bookId;
    })[0];
    if (!book) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
    books.splice(books.indexOf(book), 1);
  }
}
