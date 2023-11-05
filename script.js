let books = {};

function addBook() {
    let bookName = document.getElementById('bookName').value;
    let bookDesc = document.getElementById('bookDesc').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookIsbn = document.getElementById('bookIsbn').value;

    if (bookName !== '' && bookIsbn !== '' && !books[bookIsbn]) {
        books[bookIsbn] = {
            name: bookName,
            description: bookDesc,
            author: bookAuthor,
            isbn: bookIsbn
        };

        document.getElementById('bookName').value = '';
        document.getElementById('bookDesc').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('bookIsbn').value = '';

        displayBooks();
    } else {
        alert('Fill all fields and avoid duplicate items!');
    }
}

function displayBooks() {
    let booksList = document.getElementById('booksList');
    bookList.innerHTML = `<li>Book <br> ISBN: 848h-2382-3 </li>
                    <li>Book <br> ISBN: 848h-2382-3 </li>
                    <li>Book<br> ISBN: 848h-2382-3</li>`;

    for (let isbn in books) {
        let book = books[isbn];
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(
            `${book.name}: ${book.description} by ${book.author} ISBN: ${book.isbn}`
        ));
        bookList.appendChild(listItem);
    }
}

function searchBookByName() {
    let searchName = document.getElementById('searchName').value;
    let foundBooksList = document.getElementById('foundBooksList');
    foundBooksList.innerHTML = '';

    if (searchName !== '') {
        let foundBooks = Object.values(books).filter(book => book.name.toLowerCase().includes(searchName.toLowerCase()));
        if (foundBooks.length > 0) {
            foundBooks.forEach(book => {
                let listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(`${book.name} by ${book.author} ISBN: ${book.isbn}`));
                foundBooksList.appendChild(listItem);
            });
        } else {
            let listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode('No books found with that name!'));
            foundBooksList.appendChild(listItem);
        }
    }
}