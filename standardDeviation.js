function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length
    return promedioLista
}

function calcStandardDeviation(lista) {
    const promedio = calcularPromedio(lista);
    lista.unshift(0)
    const sumatoria = lista.reduce(
        function (a = 0, b) {
            console.log(a, b)
            return a + (b - promedio) ** 2;
        }
    );
    return Math.sqrt(sumatoria / (lista.length - 1));
}

function calcMediaGeometrica(lista) {
    const multiplicacion = lista.reduce(
        function (a, b) {
            return a * b;
        }
    );
    return multiplicacion ** (1 / lista.length)
}

const lista = [
    1,
    1,
    2,
    2,
    3,
    3,
]