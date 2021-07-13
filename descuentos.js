
const porcentajePrecioConDescuento = descuento => 100 - descuento
const calcularPrecioConDescuento = (precioOriginal, descuento) => (precioOriginal * porcentajePrecioConDescuento(descuento)) / 100

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice")
//     const priceValue = inputPrice.value

//     const inputDiscount = document.getElementById("InputDiscount")
//     const discountValue = inputDiscount.value

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
    
//     const resultP = document.getElementById("ResultP")
//     resultP.innerText = "El precio con descuento son $" + precioConDescuento
// }

// function onClickButton50() {
//     const inputPrice = document.getElementById("InputPrice")
//     const priceValue = inputPrice.value

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, 50)
    
//     const resultP = document.getElementById("ResultP")
//     resultP.innerText = "El precio con descuento son $" + precioConDescuento
// }

// function onClickButton30() {
//     const inputPrice = document.getElementById("InputPrice")
//     const priceValue = inputPrice.value

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, 30)
    
//     const resultP = document.getElementById("ResultP")
//     resultP.innerText = "El precio con descuento son $" + precioConDescuento
// }

// function onClickButton20() {
//     const inputPrice = document.getElementById("InputPrice")
//     const priceValue = inputPrice.value

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, 20)
    
//     const resultP = document.getElementById("ResultP")
//     resultP.innerText = "El precio con descuento son $" + precioConDescuento
// }
// const cupones = ['Samantha17', '43Mdf', 'Zam78as']

function aplicarCupon(cupon) {
    switch(cupon) {
        case 'Samantha17':
            return 45
            break
        case '43Mdf':
            return 30
            break
        case 'Zam78as':
            return 20
            break
        default:
            return 0
    }
}
function onClickButtonCupon() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value

    const inputCupon = document.getElementById("InputCupon")
    const cuponValue = inputCupon.value
    const cupon = aplicarCupon(cuponValue)

    const precioConDescuento = calcularPrecioConDescuento(priceValue, cupon)
    
    const resultP = document.getElementById("ResultP")
    resultP.innerText = "El precio con descuento son $" + precioConDescuento
}