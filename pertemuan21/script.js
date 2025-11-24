const inputnama = document.getElementById("nama")
const inputemail = document.getElementById("email")
const inputpasword = document.getElementById("password")
const button = document.getElementById("submit")
const error = document.getElementById("error")

const form = document.getElementById("form").addEventListener('submit',function(e) {
    e.preventDefault()
   
    let nama = inputnama.value.trim()
    // console.log(nama);
    let email = inputemail.value.trim()
    // console.log(email);
    let pw = inputpasword.value.trim()
    // console.log(pw);
    if (!nama && !email && !pw) {
         error.textContent = "form wajib di isi"
        error.style.color = "red"
       inputnama.style.border = "2px solid red";
        inputemail.style.border = "2px solid red";
        inputpasword.style.border = "2px solid red";
    }
     else if (!nama ) {
        // alert ("nama belum di isi")
        error.textContent = "nama belum di isi"
        error.style.color = "red"
         inputnama.style.border = "2px solid red"
    } else if (!email ) {
           error.textContent = "email belum di isi"
            error.style.color = "red"
             inputemail.style.border = "2px solid red"
    }
    else if (!pw) {
        error.textContent = "password belum di isi"
        error.style.color = "red"
        inputpasword.style.border = "2px solid red"
    }
    else if (pw.length < 6) {
           error.textContent = "pasword kurang dari 6"
        error.style.color = "red"
         error.style.border = "2px solid red"
    } 
    
    else 
        {
        error.textContent ="form valid"
        error.style.color ="green"
        
        
    inputnama.style.border = "2px solid blue";
    inputemail.style.border = "2px solid blue";
    inputpasword.style.border = "2px solid blue";
    }
})