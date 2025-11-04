var a = "nama santri"
let b = "umur"


function test () {

    a = "nama buah"
    b = "nama sayur"
    console.log(`${a} \n ${b}`)

}
test()

console.log(c)
var c = 20

// console.log (d)
// let d = "semangka"

// console.log(e)
// const e = "jus"


function clos(nama = `` ) {
  

return function (umur = `` ) {
   console.log(nama + ``+ umur)
}

}
clos("naufal ")("20")


function clos2(harga = "") {
     return function(harga2 = "") {
        let hr = Number(harga) + Number(harga2)
        console.log(`harga nya ${harga} + ${harga2} = ${hr}`)
       
     }
}
clos2(`10000`)(`20000`)