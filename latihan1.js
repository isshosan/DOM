document.title = 'rasyid ridho'
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('#btn2')

const defaultText = "test"
btn1.textContent = defaultText

btn1.style.border = 'none' //adjust border, none is remove all border
btn1.style.padding = '16px' //resize background button
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato' //background color


function clickButton () {
    btn1.style.background = "aqua"
    const newText = document.createElement('p')
    newText.textContent = "hai apa kabar?"
    body.append(newText)
}

function gantiWarna2() {
    btn2.style.background = 'aqua';
}

function gantiWarnaLagi () {
    btn2.style.background = 'red'
}

function ubahText () {
    console.log('ubah text nya')
    btn1.textContent = "btn1 berubah"
}

function oriText () {
    btn1.textContent = defaultText

}
//isi gantiWarna pada html merupakan function dari gantiWarna pada JS 
