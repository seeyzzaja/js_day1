//munculkan alert ketika click
let bt = document.getElementById("btn")
bt.addEventListener('click',()=>
alert("hallo")
)

//===============
let dt = document.querySelectorAll("li")

if (dt[0 ].dataset.produkId) {
    console.log('1. data produk ada');
    
}
if (dt[1].dataset.produkId) {
    console.log('2. stock terbatas');
    
}
if (dt[2].dataset.produkId) {
    console.log('3. produk habis');
    
}
//==========================
dt.forEach((v,i,a)=>[
   console.log(a[i].dataset)
])

//==================================

dt.forEach(item =>{
    console.log("produk:",item.textContent.trim());
    
    for (const key in item.dataset) {
        console.log(`${key} -> ${item.dataset[key]}`);
    }
    console.log("============================");
    
})
//==========================================================heandling================================================================//


//=====cont dengan click========//
let cont = 0
let bt2 = document.getElementById("btn2")
let ar = document.getElementById("eme")

bt2.addEventListener('click',() =>{
    cont ++
    ar.textContent =`jumlah: ${cont}`

})

//============ toggle clas ========//

let bt3 = document.getElementById("btn3")
let bx = document.getElementById("box3")

bt3.addEventListener('click',() =>{
bx.classList.toggle("dark")
})

//============ mouse enter and lave =========//

let gt = document.getElementById("box4")
gt.addEventListener('mouseenter',() =>{
    gt.innerHTML="helooooo guyss"
    gt.style.backgroundColor = 'orange'
})

gt.addEventListener("mouseleave", () =>{
    gt.innerHTML="mouse keluar"
    gt.style.backgroundColor = 'green'
})


//================== form submit ============//

let f1 = document.getElementById('form5')
let f2 = document.getElementById('r5')

f1.addEventListener('submit',(e) =>{
    e.preventDefault()
    let f3 = document.getElementById('n5').value
    f2.textContent = `hallo : ${f3}`
    f1.reset()
})



