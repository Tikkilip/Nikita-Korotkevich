const animals = [{ name: "Cow", color: "black", age: "6", voice: 'Moo' },
{ name: "Dog", color: "white", age: "8", voice: 'Bark' },
{ name: "Cat", color: "gray", age: "10", voice: 'Meow' },
{ name: "Chicken", color: "yellow", age: "1", voice: 'ko-ko' }, 
{ name: "Pig", color: "pink", age: "2", voice: 'oink'}];

class Animal {
  constructor(name, color, age, voice) {
    (this.name = name), (this.color = color), (this.age = age), (this.voice = voice);
  }

  say() {
    console.log(`${this.name}: вес ${this.weight}, возраст ${this.age}, звук ${this.voise}`);
  }
}

function animalsFabric(animals) {

  let newArr = [];
	
	for (let i = 0; i < animals.length; i++) {
		let newAnimal = new Animal(animals[i].name, animals[i].color, animals[i].age, animals[i].voice);
		newArr.push(newAnimal);
	}

	return newArr;
}

console.log(animalsFabric(animals));
animalsFabric(animals);