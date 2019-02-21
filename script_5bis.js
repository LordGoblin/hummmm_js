function quest19() {
  let a = 0;
  hachier.forEach((hash) => {
  	if(Number(hash.value.substr(1)) < 6000) {
	  	console.log(hash)
  	}
  });
}

function exo06bis() {
  console.log("Les devises, dont le cours est inférieur à 6000")
    quest19()
  console.log("La devise la plus chère parmi celles dont le cours est inférieur à 6000")
}