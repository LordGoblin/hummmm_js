const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function quest8() {
  entrepreneurs.forEach((arrayContent) => {
  	if (arrayContent.year >= 1970 && arrayContent.year <= 1979) {
  	  console.log(arrayContent)
  	}
  });
}

function quest9() {
  let a = [];
  i = 0;
  entrepreneurs.forEach((arrayContent) => {
  	a.push([arrayContent.first + " " + arrayContent.last])
  	console.log(a[i])
  	i++
  });
  return a.join(",")
}

function quest10() {
  entrepreneurs.forEach((arrayContent) => {
  	console.log(arrayContent.first + " " + arrayContent.last + " age actuel :" + (2019 - Number(arrayContent.year)))
  });
}


  
   let sortedEntrepreneurs = entrepreneurs.sort(function(a, b){
                              var lastA=a.last.toLowerCase(), lastB=b.last.toLowerCase()
                              if (lastA < lastB) 
                                  return -1
                              if (lastA > lastB)
                                  return 1
                              return 0 
                          }) 


function exo07() {
	console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
	quest8();
	console.log("Sors une array qui combien le prénom et le nom des entrepreneurs");
	console.log(quest9().split(","))
	console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
	quest10();
	console.log("Trie les inventeurs par ordre alphabétique du nom de famille")
	console.log(sortedEntrepreneurs)
}