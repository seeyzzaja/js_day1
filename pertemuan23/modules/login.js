const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("button")

const dt = JSON.parse(localStorage.getItem("user"));
const data = dt.map((v) =>{
return v
})

button.addEventListener("submit",function(e){
    e.preventDefault()
    const em = email.value.trim()
    const pw = password.value.trim()
    const cr = data.find(a => a.email)
    if (em !== cr ) {
        
    } else {
        
    }

})