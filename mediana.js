function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length
    return promedioLista
}

const lista = [
    25,
    17,
    0,
    100,
    500,
    800,
    150,
    200,
    500,
    400000,
]

const mitadLista = parseInt(lista.length / 2)

function esPar(n) {
    if(n % 2 === 0)  {
        return true
    } else {
        return false
    }

}

// let mediana

// if (esPar(lista.length)) {
//     const elemento1 = lista[mitadLista]
//     const elemento2 = lista[mitadLista - 1]

//     const promedioMediana = calcularPromedio([elemento1, elemento2])
//     mediana = promedioMediana
// } else {
//     mediana = lista[mitadLista]
// }

function calcularMediana(lista) {
    listaOrdenada = lista.sort(function(a, b) {
        return a - b;
      })
    
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista]
        const elemento2 = listaOrdenada[mitadLista - 1]
    
        const promedioMediana = calcularPromedio([elemento1, elemento2])
        return promedioMediana
    } else {
        return listaOrdenada[mitadLista]
    }
}