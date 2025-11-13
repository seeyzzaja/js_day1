
export{add,min,kali,bagi}


function add(a,b) {
    return "Rp"+ (a + b).toLocaleString("id-ID")
}
function min(a,b) {
    return "Rp"+ (a-b).toLocaleString("id-ID")
}
function kali(a,b) {
    return "Rp"+ (a * b).toLocaleString("id-ID")
}
function bagi(a,b) {
    return "Rp"+ (a / b).toLocaleString("id-ID")
}

