// =======================
// ELEMENT HTML
// =======================
const inputnama = document.getElementById("input-nama");
const button = document.getElementById("btn-submit");
const buttonHapus = document.getElementById("btn-delet");
const msg = document.getElementById("err-msg-name");
const pesanBox = document.getElementById("pesan");


let base = load("user") ?? []; 


const getDateStr = () =>
  new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const getTimeStr = () =>
  new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });


function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function remove(key) {
  localStorage.removeItem(key);
}


function saveuser(datauser) {
  if (!datauser) {
    msg.textContent = "Nama tidak boleh kosong!";
    return;
  }

  const item = {
    nama: datauser,
    "date-creat": `${getTimeStr()} ${getDateStr()}`,
  };

  base.unshift(item); 
  save("user", base); 

  tampilkanSatu(item); 

  inputnama.value = "";
  msg.textContent = "Data tersimpan!";
}


function tampilkanSatu(obj) {
  const p = document.createElement("p");
  p.textContent = `Nama: ${obj.nama} | Waktu: ${obj["date-creat"]}`;
  pesanBox.prepend(p); // tampil paling atas
}


function tampilkanSemua() {
  pesanBox.innerHTML = "";
  base.forEach((item) => tampilkanSatu(item));
}


function hapusData() {
  if (base.length === 0) {
    msg.textContent = "Tidak ada data untuk dihapus.";
    return;
  }

  base.pop(); 
  save("user", base); 
  tampilkanSemua(); 
  msg.textContent = "Data terakhir berhasil dihapus.";
}


button.addEventListener("click", function (e) {
  e.preventDefault();
  saveuser(inputnama.value.trim());
});

buttonHapus.addEventListener("click", function (e) {
  e.preventDefault();
  hapusData();
});


window.onload = tampilkanSemua;
