function multDosNumeros() {

    // Resultado de cantidad + precio
    cantidad = document.querySelector('#num1').value
    mult = +cantidad * 400000
    resultado = document.querySelector('#resultado')
    resultado.innerHTML = 'El Total es $ ' + (mult)

    // color
    color = document.querySelector('#color1')
    relleno = document.querySelector('#color2')
    relleno.style.backgroundColor = color.value

    // Cantidad
    vercantidad = document.querySelector('#cantidad')
    vercantidad.innerHTML = 'Cantidad: ' + cantidad
}
