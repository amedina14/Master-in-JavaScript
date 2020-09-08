// Tipos de datos personalizados

type letrasYnumeros= string | number;

// string : se puede usar | (tuberia para declarar multitipo de dato)
let cadena: string | number = "arandom.000webhostapp.com";

cadena = 12;

// number
let numero: letrasYnumeros = "cadena"+14;

// Boolean
let verdadero_falso: boolean = true;

// Any
let anywhere: any = "hola";

// Arrays
var languages: Array<string> = ['PHP', 'Js', 'CSS'];

let year: any[] = ["DOCE", 13, 14];

console.log(cadena, numero, verdadero_falso, anywhere, languages);