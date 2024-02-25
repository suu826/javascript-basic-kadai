let num = 15; // 3と5の倍数です
// let num = 6; // 3の倍数です
// let num = 10; // 5の倍数です
// let num = 4; // 4

if (num % 3 == 0 && num % 5 == 0) {
    console.log("3と5の倍数です");
} else if (num % 3 == 0) {
    console.log("3の倍数です");
} else if (num % 5 == 0) {
    console.log("5の倍数です");
} else {
    console.log(num);
}
