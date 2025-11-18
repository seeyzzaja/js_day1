let janji = new Promise(function(resolve, reject) {
    let jika = true
    if (jika) {
        resolve ("data berjalan")
    } else {
        reject ("gagal")
    }
})
console.log(janji);

let data = new Promise((resolve, reject) => {
    let hasil = true
    if (hasil) {
        resolve ("data berjalan")
    } else {
        reject ("gagal")
    }
})

console.log(data);


let dt = new Promise((resolve, reject) => {
    let jk = true
    if (jk) {
        setTimeout(() => {
            resolve ("data berhasil di terima")
        }, 2000);
    } else {
        setTimeout(() => {
            reject ("gagal")
        }, 2000);
    }
})


.then((result) =>console.log(result))
.catch((err) => console.log(err));


// let ak = new promise (function(resolve,reject) {
//     let data = {
//         nama:"",
//         uumur:"",
//         asal:""
//     }

//     if (data === true) {
//         setTimeout(() => {
//           resolve ("login berhasil")  
//         }, 2000);
//     } else {
//         reject("login gagal")
//     }
// let dt2 = data(n,u,a)

// })
// console.log(ak,"naufal",20,"jambi");
//percobaan pertama gagal..

function login(nm,um,as) {
  return  new Promise((resolve, reject) => {
        if (nm && um && as) {
            setTimeout(() => {
                resolve ({nm,um,as})
            }, 3000);
        } else {
       setTimeout(() => {
        reject ("login gagal")
       }, 3000);     
       
        }
    })
}

login("Naufal",20,"jambi")
    .then((hasil)=> {
        console.log(`login berhasil \n nama: ${hasil.nm}\n umur : ${hasil.um} \n asal : ${hasil.as}`);
        
    })
    .catch((gagal)=> console.log(gagal))

function validateInput(data) {
  return new Promise((res, rej) => {
    if (data.name) res(data);
    else rej("nama kosong");
  });
}

