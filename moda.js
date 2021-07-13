const lista = [
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    4,
];

// const listaCount = {};

// lista.map(
//     function (elemento) {
//         if (listaCount[elemento]) {
//             listaCount[elemento] += 1;
//         } else {
//             listaCount[elemento] = 1;
//         }
//     }
// );

// const listaArray = Object.entries(listaCount).sort(
//     function(a, b) {
//         return a[1] - b[1];
//     }
// );

// const moda = listaArray[listaArray.length - 1];

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function(a, b) {
            return a[1] - b[1];
        }
    );

    return listaArray[listaArray.length - 1];
}