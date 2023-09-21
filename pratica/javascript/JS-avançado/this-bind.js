function speakGeneric() {
    console.log(this.sound)
};

let dog = {
    sound: "au au",
    speak: speakGeneric
};

let cat = {
    sound: "miau",
    speak: speakGeneric
};

dog.speak();
cat.speak();

speakGeneric();

// Como speakGeneric não tem como saber o que é o this pois não está relacionado com nada, então ele não tem referencia do que é o sound.

teste = speakGeneric.bind(dog);
teste();

// O metodo bind é o que se refere ao conceito, nesse caso teste é uma copia do speakGeneric e o this o dog.