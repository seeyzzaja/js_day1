let arr = [1,2,3,4,5,6,7,8,9,10]

let rry = arr.map((a,b,c) =>{
    return a * 5;
   
}
)
console.log(rry)


let genap = arr.filter((a,b,c)=>{
    return a % 2 === 0;

})

console.log(genap)

let total = arr.reduce((a,b,c)=>{
    return a + b;

},0)
console.log(total)

let lebih = arr.find ((a,b,c)=>{
    return a > 8;
})
console.log (lebih)

//evaluasi harian

let arry =[60,75,80,55,90,45]

let nilai = arry.filter((a,b,c)=> {
        return a >= 70;}
   
)
console.log(nilai)

let sts = arry.map((a,b,c)=>{
 if (a >= 70 ){
    return a + " lulus"
 }
 else if (a < 70){
    return a + " gagal"
 }
})

console.table(sts)
  

let rcd = arry.reduce((a,b,c)=>{
    return a +b
} ,0)
console.log(rcd)


//========================================================

let barang = ["laptop","hp","Keyboard","mouse","printer"]
console.table(barang)

let totl = barang.forEach((a,b,c)=>{
    console.log(a)
})
 let aa = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 console.log(aa.includes (12))
console.log(aa.includes (22))

 let ab = aa.forEach((a,b,c)=>{
console.log(a * 2)

 })
  
let diskon = [10000,15000,20000,25000,30000]

let disk = diskon.map((a,b,c)=>{
    return a * 0.9
})
console.table(disk)




