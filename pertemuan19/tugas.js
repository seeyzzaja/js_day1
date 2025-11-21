
const gt1 = document.getElementById("h1")
gt1.style.color = "red";
const bt = document.getElementById("btn")

bt.addEventListener("click",() => {
gt1.classList.toggle("toggel")
gt1.classList.innerHTML="switch"
})

const gt2 = document.getElementById("h2")
gt2.style.color = "blue"
gt2.innerHTML ="<p>hallo</p>"

const gt3 = document.getElementById("h3")
gt3.style.color = "pink"
gt3.classList.add("active")

const gt4 = document.getElementById("h4")
gt4.style.color = "yellow"
gt4.classList.remove("hidden")

const gt5 = document.getElementById("h5")
gt5.style.color = "green"



  const countEl = document.getElementById("count");
  const btn = document.getElementById("btn-plus");
  const msg = document.getElementById("msg");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    // Reset warna jika awal
    if (count <= 30) {
      countEl.style.color = "black";
    }

    // Pesan motivasi default (>=5)
    if (count >= 5) {
      msg.textContent = "Wah, rajin juga! 🔥";
    } else {
      msg.textContent = "";
    }

    // Kelipatan 10 → pesan spesial
    if (count % 10 === 0) {
      msg.textContent = " Kamu mencapai kelipatan 10!";
    }

    // Count > 30 → warna merah
    if (count > 30) {
      countEl.style.color = "red";
    }
  });