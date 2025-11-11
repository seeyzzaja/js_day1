let datasiswa = [
  { nama: "naufal", nilai: 90, jurusan: "ipa" },
  { nama: "dimas", nilai: 89, jurusan: "ips" },
  { nama: "rehan", nilai: 88, jurusan: "ipa" },
  { nama: "putri", nilai: 79, jurusan: "ipa" },
  { nama: "dina", nilai: 90, jurusan: "pkn" },
  { nama: "asep", nilai: 80, jurusan: "matematika" }
];

let siswaIPA =datasiswa.filter((s) => s.jurusan === "ipa");
console.log(siswaIPA);

let nilai = datasiswa.filter((a) => a.nilai >= 80 )
      console.log(nilai);

let totalNilai = datasiswa.reduce((total, s) => total + s.nilai, 0);
let rataRata = totalNilai /datasiswa.length;
console.log("Rata-rata nilai seluruh siswa:", rataRata);

//===========================================


let transaksi = [
  { namaBarang: "Laptop", jumlah: 2, hargaSatuan: 4500000 },
  { namaBarang: "Headset", jumlah: 3, hargaSatuan: 250000 },
  { namaBarang: "Mouse", jumlah: 5, hargaSatuan: 150000 },
  { namaBarang: "Keyboard", jumlah: 1, hargaSatuan: 700000 },
  { namaBarang: "Monitor", jumlah: 2, hargaSatuan: 1800000 },
  { namaBarang: "Flashdisk", jumlah: 10, hargaSatuan: 80000 }
];

let belanja = transaksi.filter((item) => (item.jumlah * item.hargaSatuan) > 500000);
console.log("Barang dengan total belanja > 500 ribu:");
console.table(belanja);

let totalBelanja = transaksi.reduce((total, item) => {
  return total + (item.jumlah * item.hargaSatuan);
}, 0);

console.log("Total semua belanja: Rp" + totalBelanja);


let ringkasanBelanja = transaksi.map((item) => {
  return {
    namaBarang: item.namaBarang,
    totalBelanja: item.jumlah * item.hargaSatuan
  };
});
console.log("Ringkasan belanja:");
console.table(ringkasanBelanja);

