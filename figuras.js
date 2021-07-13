// Código del cuadrado
const perimetroCuadrado = lado => lado * 4

const areaCuadrado = lado => lado ** 2



// Código del triángulo
const perimetroTriangulo = (lado1, lado2,base) => Number(lado1) + Number(lado2) + Number(base)

const semiperimetro = (l1, l2, l3) => perimetroTriangulo(l1, l2, l3) / 2

const areaTriangulo = (l1, l2, l3) => Math.sqrt(semiperimetro(l1, l2, l3) * (semiperimetro(l1, l2, l3) - Number(l1)) * (semiperimetro(l1, l2, l3) - Number(l2)) * (semiperimetro(l1, l2, l3) - Number(l3)))


// Código del círculo

// Diametro
//const diametroCirculo = radio => radio * 2

// Circunferencia
const perimetroCirculo = diametro => 2 * diametro * Math.PI

// Area
const areaCirculo = radio => radio**2 * Math.PI

// Triángulo isóceles
function trianguloIsoceles(l1, l2, l3) {
    if(((l1 === l2) & (l1 != l3)) || ((l2 === l3) & (l1 != l3)) || ((l1 === l3) & (l2 != l3))) {
        return true
    } else {
        return false
    }
}

function altura (l1, l2, l3) {
    if (trianguloIsoceles(l1, l2, l3)) {
        if (l1 === l2) {
            return Math.sqrt((l1 ** 2) - (l3/2) ** 2)
        } else if (l2 === l3) {
            return Math.sqrt((l2 ** 2) - (l1/2) ** 2)
        } else if (l1 === l3) {
            return Math.sqrt((l1 ** 2) - (l2/2) ** 2)
        }
    }
}

//Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const area =areaCuadrado(value)
    alert(area)
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")
    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value

    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")
    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value

    const area = areaTriangulo(value1, value2, value3)
    alert(area)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const perimetro = perimetroCirculo(value)
    alert(perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const area = areaCirculo(value)
    alert(area)
}

function confirmarTrianguloIsoceles() {
    const input1 = document.getElementById("InputLado1")
    const input2 = document.getElementById("InputLado2")
    const input3 = document.getElementById("InputLado3")
    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value

    const area = trianguloIsoceles(value1, value2, value3)
    alert(area)
}

function calcularAltura() {
    const input1 = document.getElementById("InputLado1")
    const input2 = document.getElementById("InputLado2")
    const input3 = document.getElementById("InputLado3")
    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value

    const area = altura(value1, value2, value3)
    alert(area)
}