String.prototype.getVowels = function() {

	let VowelsList = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  let VowelsSum = 0;

	for (let i of this.toLocaleLowerCase()) {

		if (VowelsList.includes(i)) {
			console.log(i)
			VowelsSum += 1;
		}
	};

	alert (`В строке "${this}" сумма гласных = ${VowelsSum}`);

	return VowelsSum;
}

"Анатолий".getVowels();