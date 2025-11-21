let data1 = "a"
const data2 = 12
let data3 = true
let data4 = false
let data5 = [
"satu",
"dua",
"tiga",
"empat",
"lima"
]
let data6 = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}


function f1(...pr) {
    let b = {}
    if (pr.length > 1) {
        for (let  i = 0;  i < pr.length;  i++) {
            b [`data ${i + 1}`] = pr[i]
            
        }
    } 
    return b

}

console.log(f1(1,2,3,4,5,6,7,8,9));

function f2(...er) {
    let c ={}
    er.forEach((v,i,a)=> {
        c [`${v}`] = v
    });
return c
}

console.log(f2("aa","ad","ac","aaa"));
