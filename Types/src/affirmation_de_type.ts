// Il est possible d'indiquer un type au compilateur de 2 manières

let maVariable: unknown = "Ceci est une chaîne de caractères";
let longueur: number = (maVariable as string).length;
console.log(longueur);

let maVariable2: unknown = "Ceci est une chaîne de caractères";
let longueur2: number = (<string>maVariable).length;
console.log(longueur2);

// Il est donc possible de donner une indication au compilateur pour éviter des erreurs