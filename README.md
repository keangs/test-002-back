## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# REST API

## insert book

`POST /book/`

##### BODY

```bash
{
  "name": "Harry Potte",
  "genre": "Fantasy",
  "author": {
    "name": "J. K. Rowling",
    "gender": "female"
  }
}
```

## get all book

`GET /book/`

## get book by book id

`GET /book/:bookId`

## update book

`PUT /book/:bookId`

##### BODY

```bash
{
  "name": "Harry Potte",
  "genre": "Fantasy",
  "author": {
    "name": "J. K. Rowling",
    "gender": "female"
  }
}
```

## delete book

`DELTE /book/:bookId`
