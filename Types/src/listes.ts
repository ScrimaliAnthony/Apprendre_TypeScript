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
let array4: [string, string, number, number?] = ["Anthony", "Scrimali", 28]
console.log(array4);