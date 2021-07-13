// Lista para probar
// const lista = [
//     20000,
//     25000,
//     10000,
//     24000,
//     9000,
//     8000,
//     17000,
//     30000,
//     28000,
//     26000,
//     17000,
//     22000,
//     32000,
//     20000,
//     18000,
//     40000,
//     35000,
//     36000,
//     13000,
// ];
var mexico = [];

// Helpers
function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return Number(valorAcumulado + nuevoElemento);
        }
    );

    const promedioLista = Number(sumaLista / lista.length);
    return promedioLista;
}

function esPar(n) {
    return (n % 2 === 0);
}

const IVA = 16;

// Calculadora mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularPromedio([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// const listaSort = lista.sort(
//     function (a, b) {
//         return a - b;
//     }
// );

// // Mediana General
// const salariosMx = mexico.map(
//     function (persona) {
//         return persona.salary;
//     }
// );

// const salariosMxSorted = salariosMx.sort(
//     function (salaryA, salaryB) {
//         return salaryA - salaryB;
//     }
// );

// const medianaGeneralMx = medianaSalarios(salariosMxSorted);

// // Mediana del top 10%


// const spliceStart = (salariosMxSorted.length * 90) / 100;
// const spliceCount = salariosMxSorted.length - spliceStart;

// const salariosMxTop10 = salariosMxSorted.splice(
//     spliceStart,
//     spliceCount,
// );

// const medianaTop10Mx = medianaSalarios(salariosMxTop10);

// console.log(
//     medianaGeneralMx,
//     medianaTop10Mx,
// );


// Reto
// La verdad no tengo idea de que puedo sacar asi que voy a pensar y hacer una lista de todo lo que puedo hacer
// IVA al salario
// Agregar interfaz en HTML porque no se CSS
// Desviación Estandar xd

// Calcular desviación estandar
function calcStandardDeviation(lista) {
    const promedio = calcularPromedio(lista);
    lista.unshift(0)
    const sumatoria = lista.reduce(
        function (a = 0, b) {
            return a + (b - promedio) ** 2;
        }
    );
    return Math.sqrt(sumatoria / (lista.length - 1));
}


// Calcular cuanto se saca de IVA en total IMPUESTOS
function calcularImpuestos(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const impuesto = sumaLista *  IVA / 100;
    return impuesto;
}

// const desviacionMx = calcStandardDeviation(lista);

// Aquí empecé a hacer las funciones para trabajar con HTML

function onClickButtonAddPersona() {
    const inputSalario = document.getElementById("InputSalario");
    const salarioValue = inputSalario.value;

    const InputNombre = document.getElementById("InputNombre");
    const nombreValue = InputNombre.value;

    mexico.push({
        nombre: nombreValue,
        salary: salarioValue,
    });

    document.getElementById("InputNombre").value = "";
    document.getElementById("InputSalario").value = "";
}

function onClickButtonMean() {
    const salariosMx = mexico.map(
        function (persona) {
            return Number(persona.salary);
        }
    );
    promedioMx = calcularPromedio(salariosMx);

    const resultP = document.getElementById("ResultP")
    resultP.innerText = `El promedio del total de salarios es de $${promedioMx}`;
}

function onClickButtonMedian() {
    const salariosMx = mexico.map(
        function (persona) {
            return Number(persona.salary);
        }
    );
    const salariosMxSorted = salariosMx.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );
    medianaMx = medianaSalarios(salariosMxSorted);
    const resultP = document.getElementById("ResultP")
    resultP.innerText = `La mediana general del total de salarios es de $${medianaMx}`;
}

function onClickButtonTax() {
    const salariosMx = mexico.map(
        function (persona) {
            return Number(persona.salary);
        }
    );
    impuestosMx = calcularImpuestos(salariosMx);

    const resultP = document.getElementById("ResultP")
    resultP.innerText = `Se han obtenido $${impuestosMx} del total de salarios`;

}

function onClickButtonStdDeviation() {
    const salariosMx = mexico.map(
        function (persona) {
            return Number(persona.salary);
        }
    );
    desviacionMx = calcStandardDeviation(salariosMx);

    const resultP = document.getElementById("ResultP")
    resultP.innerText = `La desviación estandar es de $${desviacionMx}`;
}

function onClickButtonBorrar() {
    mexico = [];
}

function onClickButtonBorrarUltimo() {
    mexico.pop();
}



// Ayuda



