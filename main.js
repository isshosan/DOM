// DOM digunakan untuk mengubah HTML tanpa perlu ke HTML
// console.log(document.title)
document.title = 'Ridho Belajar Javascript' //untuk mengubah title pada HTML
console.log(document.title)
document.title = "learn JS with Ridho" //akan muncul 2 nama di console inspect
console.log(document.title)

console.log(document.body)

// const body= document.body //variabel body adalah
// body.append("DOM Training")

// const h1 = document.createElement('h1') //jika hanya sampe sini dokumen kosong, seolah-olah hanya menulis <h1></h1>
// h1.textContent = '<marquee>lagi latihan DOM</marquee>' // mengisi h1 <h1>lagi latihan DOM</h1>

// const myname = document.createElement('p')
// myname.innerHTML = '<marquee>ridho</marquee>' //innerHTML mirip dgn textcontent tapi berjalan di html

// const username = document.createElement('b')
// username.innerText = '<marquee>rasridho</marquee>' //innertext mirip dgn textcontent

// body.append(h1) //h1 dimasukkan ke dalam body, append adalah menambahkan isi dari variabel
// body.append(myname) 
// body.append(username)

// karna menggunakan innerHTML, 
// <marquee> adalah element yang hanya berjalan di HTML jadi nanti dia bacanya <marquee>" Test "</marquee>, 
// sedangkan kalau pake innerText sama textContent dia hanya akan baca itu sebagai text ( "  <marquee>" Test " </marquee> " )