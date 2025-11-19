function adduser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("Naufal")
        }, 2000);
    })
}
async function getuser() {
    let user = await adduser()
    console.log("nama user: ",user);
    
}
getuser()

function f1(na,um) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (!na || !um) {
                  reject ("data kurang")
            } else {
                 resolve (`data kamu : \n nama : ${na}\n umur : ${um}`)
            }
        }, 2000);
    })
}

async function f2() {
  try {  let nama = await f1("naufal",20)
    console.log(nama);}

catch (err){
    console.log("error ",err);
    
}
}
f2()

async function f3() {
    try {
        let dtt = await fetch ("https://dummyjson.com/products/1")
        let add = await dtt.json()
        console.log(add);
        let produk = add.title
        let harga = add.price
        let to = {produk,harga}
        console.log("nama produk:",produk);
        console.log("harga nya:",harga);
        localStorage.setItem("product_1",JSON.stringify(to))
        console.log(localStorage.getItem("product_1"));
        
    } catch (error) {
        console.log("gagal mengambil produk",error);
        
    }
}
f3()