
function login(){

    let email = prompt("Masukan Email");
    let pw = prompt("Masukan Password");
    // 

    if(!email || !pw) {
        // ini gunananya untuk agar jika email atau pw tidak terisi salah satu nya akan menampilkan logon gagal
        // email dan pw harus di isi semua agar menghasilkan true
        alert("Email atau Password Belom Di isi");
        console.log("Login Gagal");
        // 
    } else if(email == "saya@email.com" && pw == "112233445566") {
        console.log("Login Berhasil");
    } else {
        alert("Email Atau Password anda salah");
        console.log("Login Gagal");
    }

     
    
}
function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level akses Anda")

    if (statusPengguna === 'aktif') {
        console.log("Pengguna aktif terdeteksi");
        
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}

// Contoh pemanggilan fungsi
// cekAksesPengguna('aktif', 'admin');
// cekAksesPengguna('nonaktif', 'moderator');
// cekAksesPengguna('banned', 'user');
// cekAksesPengguna('guest', 'user');


//EXAMPLE OF SWITCH 

function listMenu() {
    
    if( confirm("Anda mau makan ?")) {
        let menu = prompt('Menu Nomer Berapa anda Pilih ? \n Pilih Menu di Bawah ini: \n 1. Mie Ayam : Rp15.000 \n 2. Bakso : Rp.10.000 \n 3. Soto : Rp5.000')

        switch (menu) {
            case "1":
                console.log("Anda Pilih Mie Ayam : Rp15.000");
                break;
            case "2":
                console.log("Anda Pilih Bakso : Rp.10.000");
                break;
            case "3":
                console.log("Anda Pilih Soto : Rp5.000");
                break;
            default:
                console.log("Menu Tidak Tersedia");
                break;
        }
    }


    


}
function daftar(){
    let nilai = prompt("berapa nilai kamu");
    
    if  (nilai >= 90 && nilai <= 100) 
       { alert("nilai kamu A")
        console.log ("nilai kamu " +  ("A"))}
    else if( nilai >= 70 && nilai<=89){
        console.log ("nilai kamu " + ("b"))
    }
    else if (nilai >= 50 && nilai <=69){
        console.log("niali kamu " + ("c"))
    }
    
   

}


    




