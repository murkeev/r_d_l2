const library = {
    _name: "Central City Library",
    _foundedYear: 1995,

    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value.trim();
    },

    get age() {
        return new Date().getFullYear() - this._foundedYear;
    },

    catalog: {
        _books: [
            {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
            {title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281},
            {title: "1984", author: "George Orwell", pages: 328},
        ],

        get books() {
            return [...this._books];
        },

        set books(newBooks) {
            this._books = newBooks;
        },

        get totalPages() {
            return this._books.reduce((sum, book) => sum + book.pages, 0);
        },

        get count() {
            return this._books.length;
        },

        getSummary() {
            const list = this._books
                .map((book, i) => `  ${i + 1}. "${book.title}" - ${book.author} (${book.pages} pages)`)
                .join("\n");

            return (
                `Catalog contains ${this.count} book(s):\n` +
                `${list}\n`
            );
        },

        addBook(book) {
            this._books.push(book);
        },
    },
    getInfo() {
        return (
            `${this.name} (founded: ${this._foundedYear}, age: ${this.age} yr.)\n` +
            this.catalog.getSummary()
        );
    },
};

console.log("Name:", library.name);

library.name = "National Public Library";
console.log("Updated name:", library.name);

console.log("Library age:", library.age, "yr.");

console.log("Book count:", library.catalog.count);
console.log("Total pages:", library.catalog.totalPages);

console.log("\nCatalog summary");
console.log(library.catalog.getSummary());

library.catalog.addBook({title: "Brave New World", author: "Aldous Huxley", pages: 311});

console.log("\nFull info after adding a book");
console.log(library.getInfo());

library.catalog.books = [
    {title: "The Catcher in the Rye", author: "J. D. Salinger", pages: 214},
];
console.log("\nCatalog after replacement via setter");
console.log(library.catalog.getSummary());
