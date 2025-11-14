//soal 1

let barang = {jenis:"tepung",harga:2000}
let json = JSON.stringify(barang)
console.log(json);

//soal 2
let json1 = '{"judul":"sikancil","tahun":2019}'
let buku = JSON.parse(json1)
console.log(buku);

//soal 3
let data = ["dika","dimas","fitri"]
let json2 = JSON.stringify([data])
console.log(json2);

//soal 4
let json0 = JSON.parse('{"nama":"nia","kota":"jambi"}')
console.log(json0.kota);

//soal 5
let siswa = JSON.parse('{"sekolah":{"rumahIT":{"kelas":{"programmer":{"jumlah_siswa":14}}}}}')
console.log('jumlah siswa: '+ siswa.sekolah.rumahIT.kelas.programmer.jumlah_siswa);

//soal 6
let guru = {guru:"dian",mapel:"javaScript"}
let json3 =JSON.stringify(guru,null,4)
console.log(json3);

//soal 7
let barang1 = '{"jenis":"gula","stok":10}'
let json4 = JSON.parse(barang1,(key,value)=>{
    if (key === "stok") {
        return value + 5
    }
    return value
})
console.log(json4);

//soal 7.2
let bio = '{"nama":"naufal","umur":18}'
let json5 = JSON.parse(bio,(key,value )=>{
    if (key === "umur") {
        return value + 2
    }
    return value
})
console.log(json5);

//soal 8
let hewan = [
    {nama:"asep",jenis:"kambing"},
    {nama:"dimas",jenis:"sapi"}
]
let json6 = JSON.stringify([hewan])
console.log(hewan);

//soal 9

let warna = ('["merah","hijau","biru"]')
let json7 = JSON.parse([warna])
console.log(json7[0]);

//soal 10
let jenis = '{"judul":"java","buku":"pelajaran","tahun":2018}'
let json8 = JSON.parse(jenis)
console.log(json8);

//soal 10.1
let jenis1 = {judul:"java",buku:"pelajaran",tahun:2018}
let json9 = JSON.stringify(jenis1)
console.log(json9);

//soal 11
let daftar = '[{"nama":"dina","hobi":"melukis"},{"nama":"naufal","hobi":"cooding"}]'
let json11 = JSON.parse(daftar)
console.log("hobi saya: " + json11[1].hobi);

//soal 12
let dtsiswa = '[{"nama":"naufal","nilai":90},{"nama":"dimas","nilai":80},{"nama":"asep","nilai":88}]'
let json10 = JSON.parse(dtsiswa)
console.log(json10[1].nilai);

//soal 13
let makanan =`[
    {"nama":"wortel","kalori":120},
    {"nama":"tomat","kalori":110},
    {"nama":"ayam","kalori":210}
]`
let json12 = JSON.parse(makanan)
console.log("kalori nya: " + json12[0].kalori);

// //soal 14
// let siswa1 = `[
//     {"nama":"naufal","nilai":90},
//     {"nama":"dimas","nilai":80},
//     {"nama":"dika","nilai":70}
// ]`
// let j = JSON.parse(siswa1,(value=>{
//     if (j.nilai >= 75) {
//         return "lulus"
//     } else {
//         return "tidak lulus"
//     }
// }))
// console.log(j);
//belum selesai....