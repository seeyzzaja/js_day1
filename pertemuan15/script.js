function data(nama,f1) {
    console.log("haloo " + nama);
    f1()
}


function data2() {
    console.log("apa kabar");
    
}
function data3() {
    console.log("apa kabar sayang");
    
}
function data4() {
    console.log("apa kabar lo");
    
}
function data5() {
    console.log("apa kabar kamu");
    
}

data("naufal",data4)


function f2(nama1) {
    console.log("hallo " + nama1);
    
}

function f3(dat) {
    console.log("memproses...");
    dat("Naufal")
    
}

f3(f2)


function f4(barang) {
    console.log("produk " + barang);
    
}

function f5(proses) {
    console.log("proses berjalan....");
    proses("tepung")
}

f5(f4)


function loop(n,b) {
    for (let i = 1; i <= n; i++) {
    console.log("hitungan ke" + i);
    }
    b()
}
loop (3,()=>console.log("selesai"))

function lop(n,p) {
    for(let i = 1; i <= n ; i++){
        console.log( "urutan ke " + i);
}
    p()
}

lop(8,()=>console.log("selesai")
)

function simpanData(data, callback) {
  if (!data.nama) {
    console.log("Nama tidak boleh kosong");
    return;
  }
  callback(data);
}

simpanData({ nama: "Abyan" }, (obj) => {
  console.log("Data berhasil disimpan:", obj);
});