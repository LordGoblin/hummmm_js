const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rended: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rended: 6 },
  { title: 'Les frères Karamazov', id: 450911, rended: 5 },
  { title: 'Guerre et Paix', id: 748147, rended: 19 }
];

function quest11() {
  a = 1
  books.forEach((book) => {
  	if (book.rended > 0) {
  		a++
  	}
  });
  if (a === books.length) {
  	return "oui"
  } else {
  	return "non"
  }
}

function quest12() {
  b = 0;
  a = 0;
  books.forEach((book) => {
  	if(b < book.rended) {
  		b = book.rended;
  		a = book.title;
  	}
  });
  return a
}

function quest13() {
  b = 100;
  a = 0;
  books.forEach((book) => {
  	if(b > book.rended) {
  		b = book.rended;
  		a = book.title;
  	}
  });
  return a
}

function quest14(a) {
  b = 0;
  books.forEach((book) => {
  	if(a === book.id) {
  		b = book.title;
  	}
  });
  return b
}

function quest15(a) {
  b = 0;
  books.forEach((book) => {
  	if(a === book.id) {
  	  books.splice(b,b)
  	}
  	b++
  });
}

let bookbook = books.sort(function(a, b){
                              var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
                              if (titleA < titleB) 
                                  return -1
                              if (titleA > titleB)
                                  return 1
                              return 0 
                          }) 

function exo08() {
	console.log(books)
	console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
	console.log(quest11());
	console.log("Quel est livre le plus emprunté ?")
	console.log(quest12())
	console.log("Quel est le livre le moins emprunté ?")
	console.log(quest13())
	console.log("Trouve le livre avec l'ID: 873495")
	console.log(quest14(873495))
	console.log("Supprime le livre avec l'ID: 133712")
	quest15(133712)
	console.log(books)
	console.log("Trie les livres par ordre alphabétique")
	bookbook
	console.log(bookbook)
}