import { add,min,kali,bagi } from "./modules/kasir.js";

console.log(add(1662,1277));
console.log(min(5000,208));
console.log(kali(50,50));
console.log(bagi(10000,10));

//kasir menggunakan if else
//operatornya tambah(t),kurang(k),kali(x),bagi(b)
import { test } from "./modules/script2.js";

console.log(test(1000,10,"t"));
//kasir menggunakan switch
//operator nya tambah(T),kurang(k),kali(x),bagi(i)
import { swi } from "./modules/script2.js";
console.log(swi(1000,1000,"T"));

import { nama,data } from "./modules/dataSiswa.js";

console.log(nama,data(12));
