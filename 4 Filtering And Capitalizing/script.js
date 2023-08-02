const books = [
    {
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "publicationYear": 2012,
  },
  {
    "title": "The Help",
    "author": "Kathryn Stockett",
    "publicationYear": 2009,
  },
  {
    "title": "The Girl with the Dragon Tattoo",
    "author": "Stieg Larsson",
    "publicationYear": 2005,
  },
  {
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "publicationYear": 2012,
  },
  {
    "title": "The Fault in Our Stars",
    "author": "John Green",
    "publicationYear": 2012,
  },
  {
    "title": "Divergent",
    "author": "Veronica Roth",
    "publicationYear": 2011,
  },
  {
    "title": "A Game of Thrones",
    "author": "George R.R. Martin",
    "publicationYear": 1996,
  }
  ];

let newList=books.filter((book)=>{
    return book["publicationYear"]>2010
})
newList.map((element)=>{
    element['author']=element['author'].toUpperCase()
})
console.log(newList)