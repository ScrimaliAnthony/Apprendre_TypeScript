// Tout comme le type any, le type unknown est utiliser pour une variable dont on ne connais pas le type à l'avance.
// Mais contrairement à any, la vérification du type est nécessaire car il ne permet pas d'opération sans elles
// et demande au développeur de donner le type de variable avant de pouvoir utiliser une méthode dessus par exemple

let donnee: unknown;

// Mettre une valeurs de donnee en commentaire pour simuler la réception d'une donnée de type inconnu

donnee = "Ceci est une chaîne de caractères";
// donnee = 42;


// Vérifier si 'donnee' est une chaîne de caractères et l'utiliser en tant que telle
if (typeof donnee === "string") {
    console.log(`La longueur de la chaîne est : ${donnee.length}`);
}

// Vérifier si 'donnee' est un nombre et l'utiliser en tant que tel
if (typeof donnee === "number") {
    console.log(`Le nombre plus dix est : ${donnee + 10}`);
}