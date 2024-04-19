const trendingBooks = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
    },
    {
        title: "Harry Potter and the Philosophers's Stone",
        author: "J.K. Rowling",
    },
    {
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
    },
    {
        title: "De Camino",
        author: "Anya Niewierra",
    },
];

const bookOne = document.getElementById("book-one");
bookOne.textContent = trendingBooks[0].title;

const bookTwo = document.getElementById("book-two");
bookTwo.textContent = trendingBooks[1].title;

const bookThree = document.getElementById("book-three");
bookThree.textContent = trendingBooks[2].title;

const popularBook = document.getElementById("popular-book");
popularBook.innerHTML = `
    <h3>${trendingBooks[3].title}</h3>
    <p>Door ${trendingBooks[3].author}</p>
`;