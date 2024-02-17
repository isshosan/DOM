// DOM digunakan untuk mengubah HTML tanpa perlu ke HTML
// console.log(document.title)
document.title = 'Ridho Belajar Javascript' //untuk mengubah title pada HTML
console.log(document.title)
document.title = "learn JS with Ridho" //akan muncul 2 nama di console inspect
console.log(document.title)

console.log(document.body)

const body= document.body //variabel body, manggil body tanpa perlu document.body
body.append("Document Object Model (DOM) Training") //mengisikan sesuatu pada element

const h1 = document.createElement('h1') //jika hanya sampe sini dokumen kosong, seolah-olah hanya menulis <h1></h1>
h1.textContent = 'lagi latihan DOM' // mengisi h1 <h1>lagi latihan DOM</h1>
body.append(h1) // perlu diappend untuk dimunculkan di body browser/html

const myname = document.createElement('p')
myname.innerHTML = 'namaku ridho' //
body.append(myname)

const username = document.createElement('b')
username.innerText = 'username rasridho' //
body.append(username)

const h2 = document.createElement('h2') 
h2.textContent = '<marquee>lagi latihan DOM 2</marquee>'
body.append(h2)

const namaku = document.createElement('p1')
namaku.innerHTML = '<marquee>namaku rasyid ridho</marquee>' //
body.append(namaku)

const username2 = document.createElement('b2')
username2.innerText = '<marquee>usernameku rasridho06</marquee>' //
body.append(username2)

//marquee
// .textContent: Hanya mengambil apa yang tertulis di kertas di dalam kotak.
// .innerHTML: Mengambil semua isi kotak, termasuk kertas, pena, dan lainnya.
// .innerText: Mengambil apa yang tertulis di kertas di dalam kotak, dan mengubah gambar pena menjadi teks "pena".
