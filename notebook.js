// let text = "sarsparella"
// let char = text.at(0);
// let length = text.length;




// let slice = text.slice(-3, 6)
// let substring = text.substring(4)


// let padded = text.padEnd(15,"0");

// let result = text.repeat(2);

// let replaceAll = text.replaceAll("s", "p")




// function Book(title, author, numberOfPages, haveRead) {
//     this.title = title;
//     this.author = author;
//     this.numberOfPages = numberOfPages;
//     this.haveRead = haveRead;

//     this.info = function() {

//         if (this.haveRead == false){
//             readMessage = "not read yet"
//         }
//         else {
//             readMessage = "Have read"
//         }

//         return(this.title + " by " + this.author +', '+ this.numberOfPages +' '+ "pages" +', '+ readMessage)
//     }

// };

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)

const Narnia = new Book('The Lion, the Witch, and the Wardrobe', 'C.S. Lewis', 208, true)

const diaryOfAWimpyKid = new Book("Diary of a Wimpy Kid", "Jeff Kinney", 224, true)

// console.log(theHobbit.info());

// console.log(Object.getPrototypeOf(theHobbit) === Book.prototype)

// Book.prototype.sayHello = function() {
//     console.log("Hello, I'm a Book!");
// };

// Book.prototype.introduction = function() {
//     console.log("Hello, my name is " + this.title + " and I am written by " + this.author + " I have " + this.numberOfPages + " pages")
// }

// Object.getPrototypeOf(Book.prototype) === Object.prototype;

// console.log(Book.valueOf());

// console.log(Object.prototype.hasOwnProperty('valueOf'));

// console.log(Object.getPrototypeOf(Object.prototype));


const myLibrary = [theHobbit, Narnia, diaryOfAWimpyKid];

function Book(title, author, numberOfPages, haveRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.haveRead = haveRead
};

function addBookToLibrary(Book) {
    myLibrary.push(Book)
    displayNewBook(Book)
    
};

function createNewBook(){

    const nav = document.getElementById('nav')

    const formContainer = document.createElement('span')
    formContainer.id = "formContainer"


    const newBookForm = document.createElement('form')
    newBookForm.id = "newBookForm"

    const title = document.createElement('input')
    title.type = 'text'
    title.name = 'title'
    title.id = 'title'
    const titleLabel = document.createElement('label')
    titleLabel.htmlFor = "title"
    titleLabel.innerHTML = "Title:";

    const author = document.createElement('input')
    author.type = 'text'
    author.name = 'author'
    author.id = 'author'
    const authorLabel = document.createElement('label')
    authorLabel.htmlFor = "author"
    authorLabel.innerHTML = 'Author:';

    const numberOfPages = document.createElement('input')
    numberOfPages.type = 'text'
    numberOfPages.name = 'numberOfPages'
    numberOfPages.id = 'numberOfPages'
    numberOfPages.size = '4'
    const numberOfPagesLabel = document.createElement('label')
    numberOfPagesLabel.htmlFor = "numberOfPages"
    numberOfPagesLabel.innerHTML = 'No. of Pages:';

    const haveRead = document.createElement('input')
    haveRead.type = 'radio'
    haveRead.name = 'haveRead'
    haveRead.id = 'haveRead'
    const haveReadLabel = document.createElement('label')
    haveReadLabel.htmlFor = "haveRead"
    haveReadLabel.innerHTML = "I've read this:";

    const submitNewBook = document.createElement('input')
    submitNewBook.type = 'submit'
    submitNewBook.id = 'submitNewBook'
    submitNewBook.name = 'submitNewBook'
    submitNewBook.textContent = 'Add'
    submitNewBook.classList.add("submitButton")

    const closeFormButton = document.createElement('button')
    closeFormButton.id = 'closeFormButton'
    closeFormButton.classList.add("closeFormButton")
    closeFormButton.name = 'closeFormButton'
    closeFormButton.textContent = "x"

    newBookForm.appendChild(titleLabel)
    newBookForm.appendChild(title)
    newBookForm.appendChild(authorLabel)
    newBookForm.appendChild(author)
    newBookForm.appendChild(numberOfPagesLabel)
    newBookForm.appendChild(numberOfPages)
    newBookForm.appendChild(haveReadLabel)
    newBookForm.appendChild(haveRead)
    newBookForm.appendChild(submitNewBook)
    formContainer.appendChild(closeFormButton)
    formContainer.appendChild(newBookForm)
    nav.appendChild(formContainer)

    
    closeFormButton.addEventListener('click', function(event) {
            event.preventDefault();
            formContainer.remove();
    })

    newBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const titleValue = document.getElementById('title').value;
        const authorValue = document.getElementById('author').value;
        const numberOfPagesValue = document.getElementById('numberOfPages').value;
        const haveReadValue = document.getElementById('haveRead').checked;
        const newBook = new Book(titleValue, authorValue, numberOfPagesValue, haveReadValue);
        addBookToLibrary(newBook);
        console.log(newBook)
        formContainer.remove();
    })}

function toggleHaveRead(book){
    const index = myLibrary.indexOf(book)
    const haveRead = myLibrary[index].haveRead
    console.log()
    if (haveRead == true){
        myLibrary[index].haveRead = false;
    }
    else {
        myLibrary[index].haveRead = true;
        console.log(myLibrary[index])

    }
    removeAllBooks()
    displayAllBooks()
}



function removeBook(book) {
    const index = myLibrary.indexOf(book)
    if (index > -1){
        myLibrary.splice(index, 1);
    }
    const divToRemove = document.getElementById(book)
    divToRemove.remove();
    removeAllBooks();
    displayAllBooks();
};

function removeAllBooks(){
            myLibrary.forEach(book => {
                const divToRemove = document.getElementById(book)
                divToRemove.remove();
            })
        };

function displayAllBooks(){
    const bookList = document.getElementById('bookList');
            myLibrary.forEach(book => {

                const title = document.createElement('h2');
                title.textContent = book.title;

                const author = document.createElement('p');
                author.textContent = book.author;

                const numberOfPages = document.createElement('p');
                numberOfPages.textContent = "Pages: " + book.numberOfPages;

                const haveRead = document.createElement('input');
                haveRead.setAttribute("type","checkbox")

                const haveReadLabel = document.createElement('label');
                haveReadLabel.appendChild(document.createTextNode("I've read this"))

                const removeButtonBox = document.createElement('div');

                const removeButton = document.createElement('button');
                removeButton.textContent = "remove"
                removeButton.classList.add('removeButton')
                removeButton.onclick = function() {
                    removeBook(book);
                };

                const haveReadButton = document.createElement('button');
                haveReadButton.id = "haveReadButton"
                haveReadButton.classList.add('haveReadButton')
                
                const index = myLibrary.indexOf(book)
                if (myLibrary[index].haveRead == true){
                    haveReadButton.textContent = "I've Read"
                    haveReadButton.style.backgroundColor = '#54c45a';
                }
                else {
                    haveReadButton.textContent = "Not Read"
                    haveReadButton.style.backgroundColor = 'rgb(255, 117, 117)';
                }
                
                haveReadButton.onclick = function(){
                    toggleHaveRead(book);
                    changeColor(book);
                };

                const div = document.createElement('div');
                div.id = book
                div.classList.add('box');
                div.appendChild(title);
                div.appendChild(author);
                div.appendChild(numberOfPages);
                div.appendChild(haveReadButton);
                div.appendChild(removeButtonBox);
                removeButtonBox.appendChild(removeButton);
                removeButtonBox.appendChild(haveReadButton);
                bookList.appendChild(div);
            })};


function displayNewBook(book){
    const bookList = document.getElementById('bookList');
                const title = document.createElement('h2');
                title.textContent = book.title;

                const author = document.createElement('p');
                author.textContent = book.author;

                const numberOfPages = document.createElement('p');
                numberOfPages.textContent = "Pages: " + book.numberOfPages;

                const haveRead = document.createElement('input');
                haveRead.setAttribute("type","checkbox")

                const haveReadLabel = document.createElement('label');
                haveReadLabel.appendChild(document.createTextNode("I've read this"))

                const removeButtonBox = document.createElement('div');

                const removeButton = document.createElement('button');
                removeButton.textContent = "remove"
                removeButton.classList.add('removeButton')
                removeButton.onclick = function() {
                    removeBook(book);
                };

                const haveReadButton = document.createElement('button');
                haveReadButton.id = "haveReadButton"
                haveReadButton.classList.add('haveReadButton')
                

                const index = myLibrary.indexOf(book)
                if (myLibrary[index].haveRead == true){
                    haveReadButton.textContent = "I've Read"
                    haveReadButton.classList.add('haveReadButton')
                }
                else {
                    haveReadButton.textContent = "Not Read"
                    haveReadButton.classList.add('removeButton')
                }

                haveReadButton.onclick = function(){
                    toggleHaveRead(book);
                };

                const div = document.createElement('div');
                div.id = book
                div.classList.add('box');
                div.appendChild(title);
                div.appendChild(author);
                div.appendChild(numberOfPages);
                div.appendChild(haveReadButton);
                div.appendChild(removeButtonBox);
                removeButtonBox.appendChild(removeButton);
                removeButtonBox.appendChild(haveReadButton);
                bookList.appendChild(div);
            };
