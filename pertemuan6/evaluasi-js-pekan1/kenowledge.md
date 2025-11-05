yang saya pahami selama ini adalah bahwa pelajaran ini saling berkaitan satu sama lain jaadi penting bagi kita untuk memahami semua nya tanpa membedakan satu sama lain.seperti html(kerangka),css(cat/tampilan),js(membuat rumah itu bisa di gunakan) jadi bulan ini mempelajari js(java script) pelajaran ini sangat penting bagi kita agar web atau program yang kita buat bisa interaktif dan selama belajar js ini ada bebrapa pemahaman yang sudah saya pahami atau dapati yaitu:
di dalam js ada yang nama nya variabel dan variabel ini memiliki bebrapa jenis dan memiliki kelebihannya masing masing
- var
- let
- const

var adalah sebuah variabel yang bisa di gunakan untuk:
- bisa di gunakan untuk hoisting(consol.log nya di panggil sebelum var) dan hasil nya akan undifened
- memiliki ruang cakup yang luas tidak seperti let dan const yang memiliki ruang cakup lebih kecil dari var,contoh:
  var a = "nama santri" -> global
 a = "nama kamu"
function test () {

    a = "naufal" -> local
    console.log(a) -> jika console.log di buat di dalam function maka hasil nya adlah "naufal" karena variabel a di global sudah di gantikan dengan a yang ada di dlam function dan var global dapat di akses di dalam function
}
test()
console.l0g(a) -> jika console log di buat di luar function maka hasil nya adalah "nama kamu" kenapa bukan nama santri yang di tampilkan? karena a yang pertama sudah di gantikan dengan a setelahnya

kenapa hasil nya bisa berbeda ketika console log nya di buat di dalam funtion dengan ketika di buat di luar function? karena local bisa mengakses global tapi global tidak bisa mengakses local
 
 kemudian let,let ini hampir mirip dengan var bedannya adalah let tidak bisa membuat atau menulis let lagi jadi harus langsung namaa variabel nya

 kemudian const,const ini tidak bisa di ganggu gugat atau di ubah ubah seperti var dan let contohnya:

 const a = "nama santri"
const b = "umur"

function test () {

 const c = "naufal"
 console.log (`${a}  ${b}  ${c}`)
}

test()
kita tidak bisa mengubah variabel const seperti var dan let jadi jika kita ingin memakai const maka kita harus membuat nya satu satu sesuai kebutuhan kita tidak bisa di rubah rubah jika kita paksa rubah maka hasil nya akan error

kemuadin di js ada juga yang nama nya function, function itu di gunakan untuk memanggil sebuah kode atau blueprint yg telah kita buat contoh nya jika kita buat di html sperti ini oneclick="hai" maka jika kita ingingin memanggil nya kita buat di js function hai(){} lalu kita buat fungsi apa yang ingin kita buat di dalam nya


kemudian ada juga document. ini guna nya untuk agar js membabca html kita dan mencari sebuah id yang ingin kita panggil contoh nya document.getElementById("F2") ini arti nya cari id di html yang menggunakan id f2

kemudian ada juga yang nama nya hoisting,hoisting adalah memangil atau membuat console.log sebelum variabel dan ini hanya bisa di gunakan di var dan tidak bisa di gunakan di let dan const contoh nya adalah

console.log(c) -> hasil nya akan undifned
var c = 20 

 console.log (d) -> hasil nya akan error 
 let d = "minuman" 

 console.log(e) -> hasil nya akan error
 const e = "makanan"

kemudia ada juga  if else, if else ini di gunakan untuk percabanggan yang mana jika if tidak jalan atau sesuai yang kita inginkan akan menjalankan else 

kemudian ada juga switch case atau di sebut looping yang mana ini di gunakan untuk mengulang ulang dan di akhiri dengan break,yang jika kita memilih isi case nya maka akan menmpilkan switch nya jadi sesuai isi swith dan case yang kita miliki
 
 