function exo03() {
	b = 1;
  for(let a = Number(prompt('De quel nombre veut tu calculer la factorielle ? :)')); a !== 0; a--) {
  	b = b * a;
  }
  console.log(`Le résultat est : ${b}`);
}