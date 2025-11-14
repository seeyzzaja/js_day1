export function test(a,b,operasi) {
let hasil ="";

    if ( operasi === "t" ) {
        hasil =  a + b 
    } else if ( operasi === "k" ) {
      hasil = a - b
    }
    else if (operasi === "x"){
       hasil = a * b
    }
    else if (operasi === "b"){
      hasil = a / b
    }
   
    return'Rp' + hasil.toLocaleString("id-ID")
    
}



export function swi(a,b,c) {
    let hasil =""
    switch (c) {
        case "T" :
         hasil = a + b
            break;
        case "k" :
        nilai = a - b
            break;
        case "x" :
        hasil = a * b
            break;
        case "i" :
          hasil = a / b
            break;
    }
    return hasil.toLocaleString("id-ID",{
       style: "currency",
        currency : "IDR"
    })
}
