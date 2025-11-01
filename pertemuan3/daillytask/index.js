function daftar(){
let umur = prompt("umur")
if(umur >= 8 && umur <= 16){
    alert("kamu masih anak anak")
    console.log ("kamu masih di bawah umur")
}
else if(umur >= 17 && umur <= 25){
    alert("kamu remaja")
    console.log("kamu remaja")
}
else if(umur >=26 && umur <=60){
    alert("kamu sudah dewasa")
    console.log("kamu sudah tua")
}

}
for (let i = 1; i <= 10; i++) {
  console.log("Halo bro ke-" + i);
}

function jadwal(){
let hari= prompt ("pilih hari \n 1.senin \n 2.selasa \n 3.rabu \n 4.kamis \n 5.jumat \n 6.sabtu \n 7.minggu" )
switch (hari){
case "1" :
    alert("matematika")
    console.log("pelajaran matematika")
    break
    case "2":
        alert("ips")
        console.log("pelajaran ips")
        break
        case "3":
            alert("ipa")
            console.log("pelajaran ipa")
            break
            case "4":
                alert("pkn")
                console.log("pelajaran pkn")
                break
                case "5":
                    alert("bahasa indonesia")
                    console.log("pelajaran bahasa indonesia")
                    break
                    case "6":
                        alert("bahasa inggris")
                        console.log("pelajaran bahasa indonesia")
                        break
                        case "7":
                            alert("libur")
                            console.log("hari libur")
                            break

// studi kasus

}
}
function nilai(){
    let nilai = prompt("berapa nilai kamu");
    
    if  (nilai >= 90 && nilai <= 100) 
       { alert("nilai kamu: A  (sempurna)")
        console.log ("nilai kamu " +  ("A"))}
    else if( nilai >= 70 && nilai<=89){
        alert("nilai kamu: B (bagus)")
        console.log ("nilai kamu " + ("b"))
    }
    else if (nilai >= 50 && nilai <=69){
        alert("nilai kamu: C (cukup)")
        console.log("niali kamu " + ("c"))
    }
    else if (nilai >= 30 && nilai <=49){
        alert("nilai kamu: D (jelek)")
        console.log("nilai kamu"  + ("d"))
    }
    else if ( nilai >=1 && nilai <= 29){
        alert("nilai kamu: E (sangat jelek)")
        console.log("nilai kamu e")
    }
   

}

