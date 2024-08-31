import { Library } from '../src/library';

describe('Library Management System', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  // Test for adding books
  describe('addBook', () => {
    it('should add a new book to the library', () => {
      library.addBook('1234', 'Test Book', 'Author A', 2020);
      expect(library.viewAvailableBooks()).toEqual([
        {
          isbn: '1234',
          title: 'Test Book',
          author: 'Author A',
          publicationYear: 2020,
          isAvailable: true,
        },
      ]);
    });
    it('should not allow adding a book with a duplicate ISBN', () => {
        library.addBook('1234', 'Test Book', 'Author A', 2020);
        expect(() => library.addBook('1234', 'Another Book', 'Author B', 2021)).toThrow(
          'Book with this ISBN already exists.'
        );
    });
  });

  // Test for borrowing books
  describe('borrowBook', () => {
    it('should throw an error if the book does not exist', () => {
      expect(() => library.borrowBook('5678')).toThrow('Book not found.');
    });
  });

});