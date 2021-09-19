// var n = 218;
// var d = 142;
// let a = n;
// let b = d;
// // let a = n;
// // let b = d;
// while (n > 0 || d > 0) {
//     if (n > d) {
//         n = n - d;
//         // alert(n);
//     }
//     else if (n < d) {
//         d = d - n;
//         // alert(d);
//     }
// }

// n = 218 / n;
// alert(n);

let str1 = prompt("Введите числитель");
let str2 = prompt("Введите знаменатель");
let num1 = str1;
let num2 = str2;
let del;
let ost;
let del1;
if (isNaN(num1) || isNaN(num2)) {
    alert("Числитель или знаменатель дроби может быть только числом");
}
else if (num1 == 0 || num2 == 0) {
    alert("Числитель или знаменатель дроби не может быть равен нулю");
}
else {
    var delitel = 0, p, r;
    if (num1 < num2) {
        p = num2; num2 = num1; num1 = p;
    }
    // else if (num1 > num2) {
    //     del = num1 / num2;
    //     ost = num1 % num2;
    //     del1 = str2 / delitel;
    //     document.write("<div id='num'>" + ost + "</div><div id='block'>" + del + "<br><hr>" + del1 + "</div>");
    // }
    while (num1 % num2 != 0) {
        if (num1 % num2 == 0) {
            delitel = num2;
        }
        else {
            // r = num2;
            num2 = num1 % num2;
            // num1 = r;
            delitel = num2;
        }
    }
    let a = str1 / delitel;
    let b = str2 / delitel;
    if (a < b) {
        document.write("<div id='block'>" + a + "<br><hr>" + b + "</div>");
    }
    else if (a > b) {
        del = a / b;
        ost = a % b;
        let dl = parseInt(del);
        document.write("<div id='num'>" + dl + "</div><div id='block'>" + ost + "<br><hr>" + b + "</div>");
    }
}