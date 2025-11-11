//list document
const inputnamakasir = document.getElementById("NamaKasir")
const pesanKasir= document.getElementById("pesanKasir")
const databarang= document.getElementById("daftarProduk")



//untuk membuat nama kasir

function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

const kasir={
    nama:""
}
function simpanKasir () {
    const nama = inputnamakasir.value.trim()
    if (nama === "") {
        pesanKasir.innerText="nama belum di isi"
        return
    }
    

kasir.nama=nama
pesanKasir.innerText= "haloo " + nama
}
//membuat daftar produk

const daftarproduk = [
    {id:"beras",nama:"beras 1kg",harga:15000},
    {id:"tepung",nama:"tepung 1kg",harga:20000},
    {id:"gula",nama:"gula 1kg",harga:10000}
]

// daftarproduk.unshift({id,nama,harga})
// togglePopup('1')
// daftarProduk()

function formatRupiah(angka) {
    return angka.toLocaleString("id-ID");
}

function daftarProduk() {
    console.log('asdfghjkl');
    
    let isi = "";
for (let i = 0; i < daftarproduk.length; i++) {
    const produk = daftarproduk[i];
        isi += '<div class="item-produk">';
        isi += '<button class="button-kontrol" onclick="hapusProduk(\'' + produk.id + '\')">-</button>';
        isi += '<div><h3>' + produk.nama + '</h3><p>Rp ' + formatRupiah(produk.harga) + '</p></div>';
        isi += '<button class="button-kontrol" onclick="tambahKeranjang(\'' + produk.id + '\')">>></button>';
        isi += '</div>';
    
}

databarang.innerHTML= isi


}

daftarProduk()