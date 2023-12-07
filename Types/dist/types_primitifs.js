"use strict";
// Les types en TypeScript
// Chaines de caractères
const firstname = "Evelyn";
// Nombre jusqu'à 2^53-1
const age = 12;
//  Boolean
const isCEO = true;
// nombre au dessus de 2^53-1
// Il faut mettre un n à la fin du nombre
let salary = 1250005164186413543546843546841348168416841864168841846514866n;
// Ou utiliser la fonction BigInt()
let salary2 = BigInt(9846523864531461546845314851653165316541);
// Il n'est pas possible de faire une opération entre un type number et un type bigint, il faut faire une conversion
// Pour déclarer une variable dont on ne connais pas la valeur on utilise le type undefined
let lastname;
console.log(typeof (lastname));
// On peux assigner null pour une variable dont on ne connais pas la valeur, son type est object
let age2 = null;
console.log(typeof (age2));
// tous les types, number, string etc... peuvent être null ou undefined mais l'inverse n'est pas vrai
