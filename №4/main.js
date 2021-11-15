let VowelsList = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

function getVowels(VowelsList) {
    let VowelsSum = 0;

    return function (x) {

      for (let i of VowelsList.toLowerCase()) {
        if (x.includes(i)) {
            VowelsSum += 1;
            console.log(i);
        }
      }
  
      return VowelsSum;
    };
  }

  let SomeString = prompt(`Введите строку:`);
  let VowelsSearch = getVowels(SomeString);
  alert(`количество гласных букв: ${VowelsSearch(VowelsList)}`);