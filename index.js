function operations() {
    var a = parseFloat(document.getElementById('a').value)
    var b = parseFloat(document.getElementById('b').value)

    document.getElementById('sum').innerText = a + b
    document.getElementById('subtract').innerText = a - b
    document.getElementById('multiply').innerText = a * b
    document.getElementById('division').innerText = b != 0 ? a / b : "E: Division by zero"

}

function conversion() {
    var length = parseFloat(document.getElementById('length').value)
    var unit = document.getElementById('unit').value
    var factor = 1
    var unit_converted = document.getElementById('unit_converted').value
    switch (unit) {
        case 'm':
            break;
        case 'km':
            factor *= 1000
            break;
        case 'cm':
            factor /= 100
            break;
    }
    switch (unit_converted) {
        case 'm':
            break;
        case 'km':
            factor /= 1000
            break;
        case 'cm':
            factor *= 100
            break;
    }
    document.getElementById('length_converted').value = length * factor
}

function load_body() {
    operations()
    conversion()
    document.getElementById('no-js').innerText = ''
}
