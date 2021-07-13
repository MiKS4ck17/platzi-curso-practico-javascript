// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ]


function calcularPromedio (lista) {
    // let sumaLista = 0
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i]
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length
    return promedioLista
}

const lista = [
    20000,
    25000,
    10000,
    24000,
    9000,
    8000,
    17000,
    30000,
    28000,
    26000,
    17000,
    22000,
    32000,
    20000,
    18000,
    40000,
    35000,
    36000,
    13000,
];

console.log(calcularPromedio(lista))