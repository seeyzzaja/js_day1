
async function getUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1");
    const data = await res.json();
    
    let nama =`${data.firstName} ${data.lastName}`
    let umur = data.age

    console.log("nama:",nama);
    console.log("umur",umur);

    let dat = {nama,umur}
    localStorage.setItem("user_1",JSON.stringify(dat))
    console.log(localStorage.getItem("user_1"));
    
  } catch(error) {
    console.error("Gagal mengambil data:", error);
  }
}
getUser();


async function loadErrorExample() {
  try {
    const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

    if (!res.ok) {
      throw new Error("Halaman tidak ditemukan (404)");
    }

    const data = await res.json();
    console.log(data);
    
  } catch (error) {
    localStorage.setItem("last_error",error)
    alert(error)

  }
}
loadErrorExample()

async function getProducts() {
    try{
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
   console.table(products.map(p => p.title));
      let harga = products.filter(a => a.price > 100)
      .map(a => a.price)
      console.log("list harga yang lebih dari 100",harga);
      localStorage.setItem("daftar_harga",JSON.stringify(harga))
      console.log(localStorage.getItem("daftar_harga"));
      
}
catch{
    console.log("data error");
    
}
}
getProducts()


function loadData(callback) {
  setTimeout(() => callback("Data siap"), 1000);
}

function loadDataPromise() {
  return new Promise((resolve,reject) => {
   setTimeout(() => {
    let err = Math.random() > 0.5
    if (err) {
        resolve("berhasil")
    } else {
        reject("data salah:")
    }
   }, 1000);;
  })
  
}


async function run() {
 try{ const hasil = await loadDataPromise();
  console.log(hasil);
}
catch (w){
    console.log(w,"error...");
    
}
}
run()