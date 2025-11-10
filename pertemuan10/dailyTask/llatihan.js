let data = ["naufal","rizki","dimas","riki"]
let data1 =[a,b,c,d]=data
console.log(a,c);

const profil = {
  nama: "naufal",
  umur: 18,
  jurusan: "RPL"
};
let {nama,jurusan}=profil
console.log(`${nama} belajar di jurusan ${jurusan}`)

let dt ={
    nama:"aska"
}
let dt1 = {...dt,umur:17}
console.log(dt1);

let nilai= {
    mtk:88,
    bhasa:90,
    ips:99,
    pkn:87,
    ipa:80,
};

function f1(nilai) {
    let total=Object.values(nilai)
 return total.reduce((a,b)=>a+b)
   
    
}
let rata2=(f1(nilai))/5
console.log(f1(nilai));
console.log(rata2);


let data5= {naufal:"0896",dimas:"0852",riski:"0831"}
for(let [nama,nomor] of Object.entries(data5))
    console.log(`${nama}:${nomor}`)
