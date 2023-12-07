// Object

// un objet peux être définit de 2 manières
const person = {
    firstname: "Evelyn",
    lastname: "Miller"
};
console.log(person);

// Il est également possible d'utiliser ? pour ajouter une valeur plus tard
const person2: {
    firstname: string;
    lastname: string;
    age?: number;
} = {
    firstname: "Evelyn",
    lastname: "Miller"
};
person2.age = 28;
console.log(person2);