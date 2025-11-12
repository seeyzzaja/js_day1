//soal 1
function f1(harga,qty,pajak,diskon) {
    return harga * qty - pajak + diskon

   
}
console.log(f1(2000,3,10,12));

//soal2
function f2(nilai) {
  if (nilai >= 90) return "A";
  else if (nilai >= 80) return "B";
  else if (nilai >= 70) return "C";
  else if (nilai >= 60) return "D";
  else return "E";
}
console.log( f2(85));


//soal 3

function f3(kode) {
  switch (kode) {
    case "S": return "Santri";
    case "M": return "Mentor";
    case "A": return "Admin";
    default: return "Tamu";
  }
}
console.log(f3("M"));

//soal 4

function f4(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) total += arr[i];
  }
  return total;
}
console.log(f4([1, 2, 3, 4, 5, 6]));



//soal 7
let nama =["naufal","dika","rehan"]
 nama.push("bambang")
 nama.pop()
 nama.shift()
 nama.unshift("dina")
 
 console.log(nama);
 
//soal 8


function f8(santri, tambah) {
  return santri.map(s => ({ nama: s.nama, nilaiBaru: s.nilai + tambah }));
}
console.log(f8([{ nama: "Ali", nilai: 70 }, { nama: "Budi", nilai: 80 }], 5));


// soal 9

function f9(arr, batas, namaDicari) {
  const lulus = arr.filter(s => s.nilai >= batas);
  const temuan = arr.find(s => s.nama === namaDicari) || null;
  return { lulus, temuan };
}
let dataSantri = [
  { nama: "Ali", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Cici", nilai: 90 }
];
console.table( f9(dataSantri, 70, "Cici"));

//soal 10
let bc =[80,85,90,95]

let rcd = bc.reduce((a,b,c)=>{
    return a +b
} ,0)

let rata2 =rcd/4
console.log(rcd)
console.log(rata2)


//soal 12

let data5= {nama:"naufal",umur:"20",telpn:"0831"}
for(let [nama,nomor] of Object.entries(data5))
    console.log(`${nama}:${nomor}`)

//soal 13


let angka = [90, 80];
let angka1 = [70, 88, ...angka];

function f13(...nilai) {
  return nilai.reduce((a, b) => a + b, 0);
}

console.log(f13(...angka1));
