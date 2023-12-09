"use strict";
// Le type any supprime l'utilité de typescript à typer les variables
let test = "coucou";
console.log(test);
test = 5;
console.log(test);
// Ici, il est possible de prendre une variable et de lui assigner un string puis un number
// Il est possible d'avoir un type any de manière implicite si le type n'a pas été écrit sauf si le mode strict est activé.
// Il est recommandé de ne pas utiliser le type any mais plutôt le type unknown
