
export function getTodayForApi() {
  let ha = new Date();

  let tahun = ha.getFullYear();
  let bulan = String(ha.getMonth() + 1).padStart(2, "0");
  let hari = String(ha.getDate()).padStart(2, "0");

  return `${tahun}-${bulan}-${hari}`;
}


export function getTodayForDisplay() {
  let today = new Date()
  let hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  ];

  let namaHari = hari[today.getDay()];

  let tgl = String(today.getDate()).padStart(2, "0");
  let bln = String(today.getMonth() + 1).padStart(2, "0");
  let thn = today.getFullYear();

  return `${namaHari}, ${tgl}/${bln}/${thn}`;
}




export function formatDate(dateObj, separator = "-") {
  let y = dateObj.getFullYear();
  let m = String(dateObj.getMonth() + 1).padStart(2, "0");
  let d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}${separator}${m}${separator}${d}`;
}


export function isEmpty(str) {
  return !str || str.trim() === "";
}
