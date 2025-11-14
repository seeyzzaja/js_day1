

const obj = {nama:"naufal",umur:20}
const json = JSON.stringify(obj)
console.log(json);

const json1 ='{"nama":"naufal","umur":20}'
const obj1 = JSON.parse(json1)
console.log(obj1.nama);

//1. Simpan data user ke JSON
let user = {nama:"naufal",umur:21}
let json2 =JSON.stringify(user,null,2)
console.log(json2);


//2. Ambil data user dari JSON
let json3 = '{"nama":"dimas","umur":22}'
let user1 = JSON.parse(json3)
console.log(user1);

//3. Konversi array angka ke JSON
let angka = [1,2,3,4,5]
let json4 =JSON.stringify([angka])
console.log(json4);


//4. Konversi array object ke JSON
let nama = [
    {nama:"naufal"},
    {nama:"dika"}
]
let json5 = JSON.stringify(nama,null,5)
console.log(json5);

//5. Parse JSON lalu ambil properti tertentu

let data = JSON.parse('{"x":90,"y":80}')
console.log(data.x);

//6. Validasi JSON

