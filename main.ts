let EsLunes = false
let tengoClase = false
let es_sábado = false
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.showString("Lunes")
    EsLunes = true
    tengoClase = true
    if (EsLunes == true) {
        if (tengoClase == true) {
            basic.showString("ME LEVANTO TEMPRANO ")
        } else {
            basic.showString("ME LEVANTO TARDE ")
        }
    } else {
        basic.showString("DUERMO HASTA TARDE ")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    basic.showString("Sábado ")
    es_sábado = true
    es_sábado = true
    if (es_sábado == true) {
        if (es_sábado == true) {
            basic.showString("ME LEVANTO TARDE ")
        } else {
            basic.showString("ME LEVANTO TEMPRANO ")
        }
    } else {
        basic.showString("DUERMO MÁS TEMPRANO ")
    }
})
