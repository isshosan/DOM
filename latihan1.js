document.title = 'rasyid ridho'
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('#btn2')

console.log(btn1)
console.log(btn2)

btn1.style.border = 'none' //adjust border, none is remove all border
btn1.style.padding = '16px' //resize background button
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato' //background color

function gantiWarna2() {
    console.log("aman");
    alert("aman") ;//popup aler ketika di klik
    btn2.style.background = 'aqua';
}

function ubahText () {
    console.log('ubah text nya')
    btn1.textContent = "btn1 berubah"


}
//isi gantiWarna pada html merupakan function dari gantiWarna pada JS 
