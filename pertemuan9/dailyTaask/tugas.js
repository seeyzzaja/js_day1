let buku ={
    judul: "tereliye",
    pengarang: "Naufal",
    tahunterbit: "20-11-2025" ,

}
console.log(buku.judul);

 buku.penerbit= "nPustaka"
 console.log(buku.penerbit)

 buku.tahunterbit = "30-11-2025"
console.log(buku.tahunterbit);

delete buku.pengarang

for (let key in buku){

    console.table(` ${ key}=> ${ buku[key]} \n`);
    
}


//=================================================================
//studi kasus
//=================================================================



let bukufavorit ={
    judul : "clean code",
    penulis : "Robert c. Martin",
    tahun : 2008


}

bukufavorit.kategori="pemograman"
bukufavorit.tahun= 2010
delete bukufavorit.penulis

for(let key in bukufavorit){
    console.log(`${key}=>${bukufavorit[key]}`)}




