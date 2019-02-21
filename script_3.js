const view = function(a) {
  let c = "";
  while(a !== 0) {
  	c += " ";
  	a--;
  }
  return c;
}

const view2 = function(b) {
  let c = "";
  while(b !== 0) {
  	c += "#";
  	b--;
  }
  return c;
}

function exo04() {
  a = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? :)"))
  if (a <= 0) {
  	console.log("nop!!")
  } else {
  	  for(let b = 1; a !== 0; a--) {
  		console.log(view(a) + view2(b));
  		b++;
  	  }
  }
}
