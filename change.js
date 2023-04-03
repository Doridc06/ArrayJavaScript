let minimo = 1;
let maximo = 120;
let longitud = 50;

let mayor = 0;
let menor = 120;
let suma = 0;

let mayor50 = [];
let menor40 = [];

let array = [];

for (let i = 0; i < longitud; i++) {
    array[i] = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    suma += array[i];

    if (array[i] > mayor) {
        mayor = array[i];
    }

    if (array[i] < menor) {
        menor = array[i];
    }

    if (array[i] > 50) {
        mayor50.push(array[i]);
    }

    if (array[i] < 40) {
        menor40.push(array[i]);
    }
}
alert(array);
alert("el mayor es: " + mayor);
alert("el menor es: " + menor);
alert("la media es: " + suma / array.length);
alert("los numeros mayores a 50 son: " + mayor50);
alert("los numeros menores a 40 son: " + menor40);

