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
        alert("nilai kamu: E (kamu harus ulang)")
        console.log("nilai kamu e")
    }
   

}

