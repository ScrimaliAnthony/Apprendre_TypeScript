// Les types en TypeScript

// Chaines de caractères
const firstname: string = "Evelyn";

// Nombre jusqu'à 2^53-1
const age: number = 12;

//  Boolean
const isCEO: boolean = true;

// nombre au dessus de 2^53-1
// Il faut mettre un n à la fin du nombre
// let salary: bigint = 1250005164186413543546843546841348168416841864168841846514866n;

// Ou utiliser la fonction BigInt()
// let salary2: bigint = BigInt(9846523864531461546845314851653165316541);

// Il n'est pas possible de faire une opération entre un type number et un type bigint, il faut faire une conversion

// Pour déclarer une variable dont on ne connais pas la valeur on utilise le type undefined
let lastname: undefined;
console.log(typeof(lastname));

// On peux assigner null pour une variable dont on ne connais pas la valeur, son type est object
let age2: null = null;
console.log(typeof(age2));

// tous les types, number, string etc... peuvent être null ou undefined mais l'inverse n'est pas vrai

// Pour déclarer un tableau
let array: Array<string> = ["coucou", "bonjour"];
console.log(array);
console.log(typeof(array));

// ou
let array2: [string, string, number] = ["Salut", "bienvenue", 42];
console.log(array2);

// Il est possible de créer un nombre infinie de valeur d'un type avec la syntaxe spread
let array3: [string, string, ...number[]] = ["Anthony", "Scrimali", 28, 42, 55, 64];
console.log(array3)

// Si l'on est pas sûr de la présence d'un type, il est possible de le mettre sous condition avec ?


// Il est également possible de faire des tuples
let employee: [string, number];
// employee