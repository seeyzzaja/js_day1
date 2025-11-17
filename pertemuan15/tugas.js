function f1(nama,data) {
    console.log("hallo " + nama);
    data()
}
function f2() {
    console.log("apa kabar");
    
}
f1("naufal",f2)

function sapaUser(callback) {
    console.log("hallo....");
    callback()
}
function f3() {
    console.log("hallo santri");
    
}
sapaUser(f3)

function hitung(a, b, callback) {
  return callback(a, b);
}

function tambah(x, y) {
  return x + y;
}

const hasil = hitung(5, 3, tambah);
console.log("Hasil penjumlahan:", hasil); 

let dt = [
"belajar js"
]
localStorage.setItem("dt",JSON.stringify(dt))
console.log(localStorage.getItem("dt"));



let data = {
    nama:"naufal",
    umur:20
}

localStorage.setItem("data",JSON.stringify(data))
console.log(localStorage.getItem("data"));

let angka =[1,2,3]
localStorage.setItem("angka",JSON.stringify(angka))
console.log(localStorage.getItem("angka"));


let dtsantri ={
    nama:"Nuafal",
    kelas:"smp",
    nilai:90
}
localStorage.setItem("dtsantri",JSON.stringify(dtsantri))
console.log(localStorage.getItem("dtsantri"));


console.log("mulai");
setTimeout(() => {console.log("berjalan 5 detik ");
},5000);
console.log("selesai");

function registrasi(nama,callback) {
    console.log(`registrasi berhasil: ${nama}`);
    setTimeout(function()  {
        console.log("loading..");
        callback()
    }, 2000);
   
}
function hasill() {
    console.log("selamat bergabung");
    
}
registrasi("naufal",hasill)