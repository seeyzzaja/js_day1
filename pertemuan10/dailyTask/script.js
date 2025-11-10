let angka = [1,2,3,4]

let [a,b,c,d] =angka
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(angka);


let mobil ={
    nama:"avanza",tahun:2020,
    nama:"alya",tahun:2019,
    nama:"kijang",tahun:2010
}
let {nama,tahun}= mobil
console.log(nama);

let jenis =["miso","bakso"]
let jenis2=["mie ayam","sate",...jenis]
console.log(jenis2);


function jumlah(...angka) {
    console.log(angka)
}
jumlah(angka)

function jumlah(...total) {
    console.log(total)
}
jumlah(23,44,12,54)


//====================================================================
//studi kasus


let biodata={
    nick:"naufal",
    usia:20,
    kelas:"smp",
    jurusan:"ipa"
}

let {nick,kelas} = biodata
console.log(nick,kelas);


let nl ={...biodata,nilai:90}
console.table(nl);



function f1(...nilai) {

  let total = nilai.reduce((a,b)=>{
        return a + b
    })
    // console.log(total);
    // console.log(365/4);
    
    return total/nilai.length

}

console.log(f1(90,89,98,88))

let nilaai ={
    mtk:90,
    ipa:89,
    ips:98,
    pkn:88
}

let total=Object.values(nilaai).reduce((a,b)=>
a + b)
let ratarata= total/4
console.log(`total nilai kamu:${total}`);
console.log(`nilai rata rata kamu:${ratarata}`);
