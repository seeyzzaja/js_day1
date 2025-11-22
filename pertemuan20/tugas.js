
//====== 01 ======//
const welcomeSection =document.querySelector('#welcome-section');// kurang document. tanpa itu maka queryselector akan error
console.log(welcomeSection);
//simbol yang hilang dari kedua kode itu adalah # karena mereka menggunakan id jadi harus di panggil mengunakan #
const myButton = document.querySelector('#action-button');
console.log(myButton);

//========= 02 ==========//


const firstParagraph = document.querySelector('.description');

const firstCard = document.querySelector('.card')
  
console.log(firstParagraph);
console.log(firstCard); 
// beda . dan # adalah kalo . di gunakan ketika tag menggunakan class kalo # di gunakan ketika tag menggunakan id

//========= 03 ==========//

const allParagraphs = document.querySelectorAll('.description')

console.log(allParagraphs); 
console.log(allParagraphs.length); // Berapa jumlahnya?

console.log(allParagraphs[0]); // Paragraf pertama
console.log(allParagraphs[1]); // ← FIX THIS: Paragraf kedua
console.log(allParagraphs[2]);// hasil nya undifined

const allCards = document.querySelectorAll('.card');
console.log(allCards.length); 

//=========== 04 ==========//

const allCards2 = document.querySelectorAll('.card');

allCards2.forEach(item => {
    console.log(item.textContent);
    
});

const allParagraphs2 = document.querySelectorAll('p')
allParagraphs2.forEach(ell => {
    console.log(ell.textContent);
    
});
// card dalam foreach(card => ...) adalah variabel yang mewakili  elemnt yang di gunakan untuk menyimpan data yang ingin di tampilkan

//========== 05 =========//


const welcomeSection1 = document.querySelector('#welcome-section')

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((para, index) => {
    console.log(`Paragraf ke-${index + 1}: ${para.textContent}`);
});
