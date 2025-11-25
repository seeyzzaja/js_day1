function saveName() {
  const name = document.getElementById("namaInput").value.trim();
  if (!name) return alert("Nama tidak boleh kosong");
  save("nama_user", name);
  renderName();
}

function renderName() {
  document.getElementById("display").innerText = load("nama_user") ?? "-";
}
