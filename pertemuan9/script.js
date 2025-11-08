let data ={
 nama : "naufal",
 umur : 20,
 alamat : "jambi",
 wa   : 6289626731236,
 fulldata: (pwdata) => {
   if (pwdata == 123){
    return `ini data kamu:
    nama: ${data.nama}
    umur: ${data.umur}
    alamat: ${data.alamat}
    wa : ${data.wa}

`
 } 
else
    return "paswword salah"
 }}
console.log(data.fulldata(pwdata=123))





// console.log(dataSantri.fullData("pw"));

// console.log(dataSantri.dataArr[2].data2b);


const santri = {
  id: 101,
  nama: "Ahmad Fauzi",
  usia: 17,
  jenisKelamin: "Laki-laki",
  asalDaerah: "Yogyakarta",
  program: "Fullstack Web Development",
  nilaiRataRata: 88.5,
  aktif: true,
  tanggalDaftar: "2025-02-15",
  hobi: ["Membaca", "Ngoding", "Olahraga"]
};

// console.log(santri["nilaiRataRata"]);

for (let key in santri) {
    console.log(`Pada Key => "${key}" Valuenya => "${santri[key]}"`);
    
}

console.log(santri.program)
console.log(santri["jenisKelamin"])


