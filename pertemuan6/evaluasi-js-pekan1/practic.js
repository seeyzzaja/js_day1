 var a = "nama santri" //-> global
  var a = "nama kamu"
function test () {

    a = "naufal" //-> local
    console.log(a) //-> jika console.log di buat di dalam function maka hasil nya adlah "naufal" karena variabel a di global sudah di gantikan dengan a yang ada di dlam function dan var global dapat di akses di dalam function
}
test()

const c = "nama santri"
const d = "umur"

function coba () {

 const e = "naufal"
 console.log (`${c}  ${d}  ${e}`)
}

coba()

let f = "nama" 
 f = "kelas"
function coba2 () {

    f = "naufal" 
    console.log(f) 
}
coba2()



function ceknama(nama = `` ) {
  

return function (umur = `` ) {
   console.log(nama + ``+ umur)
}

}
ceknama("muhammad naufal ")("22")
