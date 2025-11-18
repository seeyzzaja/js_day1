function f1(username) {
    console.log("mengambil data ....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username) {
          reject ("nama tidak boleh kosong")
            
        } else {
            resolve({
                username,
                jurusan:"programmer",
                level:"beginer"
            })
        }
        }, 2000);
    })
}
console.log("data di proses...");

f1("Naufal")
.then((result) => {
    console.log("status : SUCSES");
    console.log("data user",result);
    localStorage.setItem("lastuser",JSON.stringify(result))
    // console.log(localStorage.getItem("result")); => untuk mengambbil/melihat localstorage
    
}).catch((err) => {
    console.log("status : gagal...");
    console.log(err);
    
});
console.log("data sudah di proses");



function jaringan() {
  console.log("sedang di proses...");
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      let jr = Math.random() > 0.5
      if (jr) {
        resolve ("koneksi stabil...")
      } else {
        reject ("koneksi tidak stabil...")
      }
    }, 2000);
  })
  
}
jaringan()
  .then((result) => {
    localStorage.setItem("connection_status",JSON.stringify(result))
    console.log("SUCSES",result);
    
  }).catch((err) => {
    localStorage.setItem("conncetion_status",JSON.stringify(err))
    console.log("ERROR",err);
    
  });

  console.log(localStorage.getItem("result"));
  

  function seting() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve ({
          theme:"dark",
          languege:"id",
          notif:true
        })
      }, 2000);
    })
  }
  seting()
  .then((result) =>{
    console.log(result);
    return JSON.stringify(result)
  })
  .then((setingjson) =>{
    console.log("seting dalam json",setingjson);
    localStorage.setItem("seting_app",JSON.stringify(setingjson))
  })


  function loadseting() {
   return new Promise((resolve, reject) => {
       let item = localStorage.getItem("seting_app")
    setTimeout(() => {
       
        if (item) {
          resolve (JSON.parse(item))
        } else {
          reject ("data tidak di temukan")
        }
      }, 2000);
    })
  }

  loadseting()
.then((result) => {
  console.log("berhasil",result);
  
  
}).catch((err) => {
  console.log("gagal",err);

});