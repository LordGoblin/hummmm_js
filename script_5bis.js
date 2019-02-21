function quest19() {
  hachier.forEach((hash) => {
  	if(Number(hash.value.substr(1)) < 6000) {
	  	console.log(hash)
  	}
  });
}

function quest20() {
  let a = 0;
  let b = 0;
  hachier.forEach((hash) => {
  	if(Number(hash.value.substr(1)) < 6000 && Number(hash.value.substr(1)) > a) {
  		a = Number(hash.value.substr(1))
  		b = hash
  	}
  });
  return b
}

function exo06bis() {
  console.log("Les devises, dont le cours est inférieur à 6000")
  quest19()
  console.log("La devise la plus chère parmi celles dont le cours est inférieur à 6000")
  console.log(quest20())
}