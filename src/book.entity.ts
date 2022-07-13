interface Books {
  bookId: number;
  name: string;
  genre: string;
  author: Author;
}

interface Author {
  name: string;
  gender: string;
}
