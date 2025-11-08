//=====================================================================
//test
//=====================================================================

//contoh dari ai

// let siswa = [
//   { nama: "Andi", umur: 17, nilai: 85, jurusan: "IPA" },
//   { nama: "Budi", umur: 18, nilai: 70, jurusan: "IPS" },
//   { nama: "Citra", umur: 17, nilai: 90, jurusan: "IPA" },
//   { nama: "Dewi", umur: 18, nilai: 60, jurusan: "Bahasa" },
//   { nama: "Eka", umur: 17, nilai: 75, jurusan: "IPS" }
// ];


// siswa.forEach((murid) => {
//   murid.statusLulus = murid.nilai >= 75 ? "Lulus" : "Tidak Lulus";
// });
// console.log(" Daftar Siswa:");
// siswa.forEach((murid, i) => {
//   console.log(`${i + 1}. ${murid.nama} (${murid.jurusan}) - Nilai: ${murid.nilai}, Status: ${murid.statusLulus}`);
// });
// const siswaLulus = siswa.filter((murid) => murid.statusLulus === "Lulus");
// console.log(" Siswa yang Lulus:", siswaLulus);

// const namaSiswa = siswa.map((murid) => murid.nama);
// console.log("Nama Semua Siswa:", namaSiswa);

// const cariSiswa = siswa.find((murid) => murid.nama === "Citra");
// console.log(" Data Siswa Ditemukan:", cariSiswa);

// const totalNilai = siswa.reduce((acc, murid) => acc + murid.nilai, 0);
// const rataRata = totalNilai / siswa.length;
// console.log(` Rata-rata Nilai: ${rataRata}`);



//====================================================


let siswa = {
    nama: "naufal",
    umur:20,
    kelas: "smp"

}
console.log(siswa);

let produk =[
    {barang : "laptop",harga:200,},
    {barang : "iphone",harga:150},
    {barang : "mobil",harga:3000},
    {barang : "motor",harga:2300},
    {barang : "pesawat",harga:1500},
]
 console.log(produk)

produk.forEach((a,b,c)=>{
    console.log(a);
})

 let hasilfilter= produk.filter((a,b,c)=>{
    return a.harga >= 500

})
console.log(hasilfilter)


let stats = produk.map((a,b,c)=>{
    console.log(a);
    
    if (a.harga >= 500) {
        return {barang:a.barang,harga:a.harga,keterangan:"mahal"}
    }
else
    return {barang:a.barang,harga:a.harga,keterangan:"murah"}
})
console.log(stats)


//===================================================

let keranjang =[

    {nama:"shampo",harga:20,jumlah:5,},
    {nama:"sabun",harga:10,jumlah:2,},
    {nama:"odol",harga:15,jumlah:4,},
    {nama:"buku",harga:30,jumlah:10,},
    {nama:"snack",harga:18,jumlah:9,}
]
console.log(keranjang)

let list = keranjang.forEach((a,b,c)=>{
console.log(`${b+1}-barang ${a.nama}-harga ${a.harga}-jumlah ${a.jumlah}`)

})


let total = keranjang.reduce((a,b,c)=>{
return a + b.harga


},0)
console.log(`RP.${total}`);
///masih berlanjutt........