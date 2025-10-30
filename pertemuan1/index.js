// Title

function sayHello() {
    console.time("f1");
    console.info('Info Time Terkini dari F1 >>');
    console.timeLog("f1");
    alert('Hello Selamat Datang');
    let nama = prompt("Nama Siapa?");
    confirm(nama + " Klik Button ")
    console.log(nama + " Telah Klik Button");
    console.count("submited"); 
    console.timeEnd("f1");
}

// NB for me : function itu di gunakan untuk memanggil sebuah kode atau blueprint yg telah kita buat
// console time,info, timeend itu gunanya untuk melihat berapa lama sintask tersebut di jalankan
// console timelog adalah untuk memunculkan console time 
// console count adalah untuk melihat berapa kali sintask itu di jalankan
// console log adalah untuk menampilkan apa yang kita isi di dalam console log
// alret fungsi nya untuk menampilkan kotak pesan (popup) 
// prompt adalah untuk menampilkan kotak prompt yang bisa di isi di dlmnya
// confirm adalah untuk menampilkan kotak pesan (popup) yg bisa di cancel dan bisa di klik "ok"
// untuk let name = prompt("") adalah sebuah variabel kosong yg bisa di isi pengguna dan ketika di panggil akan menampilkan apa yg tlh di isi 

// Title

function resetCount() {
    console.countReset("submited");
}

// NB for me : console countreset gunannya untuk mereset sebuah count 

// Title

console.warn("Ini Contoh Warning");
console.error("Ini Contoh Error");

// NB for me : console warn adalah untuk menampilkan warning pada console
// console error  untuk menampilkan error pada console

// Title

let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" },
    { userId: "user45678", loginStatus: "inactive 001", lastLogin: "2024-03-15" },
];

console.table(userData);

console.group('API Response Debug');
console.log('Status Code:', "Successfull");
console.log('Response Time:', "Successfull");
console.log('Payload Size:', "Successfull");
console.groupEnd();

// NB for me : console table  untuk menampilkan sebuah indormasi pada suatu variable dalam bentuk table
// console grup dan console groupend adalah di gunakan untuk menampilkan sebuah menggabungkan sebuah beberapa element console menjadi satu grup