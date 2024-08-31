"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = new Map();
    }
    addBook(isbn, title, author, publicationYear) {
        if (this.books.has(isbn)) {
            throw new Error("Book with this ISBN already exists.");
        }
        const newBook = {
            isbn,
            title,
            author,
            publicationYear,
            isAvailable: true,
        };
        this.books.set(isbn, newBook);
    }
    borrowBook(isbn) {
        const book = this.books.get(isbn);
        if (!book) {
            throw new Error("Book not found.");
        }
        if (!book.isAvailable) {
            throw new Error("Book is currently not available.");
        }
        book.isAvailable = false;
    }
    returnBook(isbn) {
        const book = this.books.get(isbn);
        if (!book) {
            throw new Error("Book not found.");
        }
        if (book.isAvailable) {
            throw new Error("Book is not borrowed.");
        }
        book.isAvailable = true;
    }
    viewAvailableBooks() {
        return Array.from(this.books.values()).filter((book) => book.isAvailable);
    }
}
exports.Library = Library;
//# sourceMappingURL=library.js.map