// 1. JavaScript asoslari va o'zgaruvchilar

// Topshiriq 1
// function studentName() {
//     let name=`Abror`;
//     return(name)
// }
// console.log(studentName())


// Topshiriq 3:
// function swipeAB(a,b){
// [a, b] = [b, a]
// console.log(a,b)
// }
// let a = +prompt("a o'zgaruvchini kiriting: ");
// let b = +prompt("b o'zgaruvchini kiriting: ");
// console.log(swipeAB(a,b))


// 2.Ma'lumot turlari va typeof

// Topshiriq 4;
// function type(qiymat) {
//     return typeof(qiymat);
// }
// console.log(type("Salom"));
// console.log(type(2));
// console.log(null);
// console.log(type());


// function type(qiymat) {
//     let x = 1000000000n;
//     return typeof(x)

// }
// console.log(type());

// function type(qiymat) {
//     let a = "salom";
//     let b = 2;
//     return typeof(a==b);
// }
// console.log(type());


// function type(qiymat) {
//     let y=Symbol("dkd");
//     return typeof(y)
// }
// console.log(type());

// Topshiriq 5
// let Tel = +prompt("Tel raqamizni kiriting")
// function type(tel) {
//     return typeof(Tel);
// }
// console.log(type(tel));
  

// let Tell = prompt("Tel raqamizni kiriting");
// function type(tel) {
//     return typeof(Tell)
// }
// console.log(type(tel));




// Topshiriq 6
// function bigInt(qiymat) {
// let aholi=37000000n
// return aholi;
// }
// console.log(bigInt());


//  Topshiriq7
// function name(qiymat) {
//     return ("5" + 2);
// }
// console.log(name());

// function surname(qiymat) {
//     return ("5" - 2);
// }
// console.log(surname());

// function fullname(qiymat) {
//     return (2 * "4");
// }
// console.log(fullname());

// function namee(qiymat) {
//     return ("salom" * 5);
// }
// console.log(namee());



// Topshiriq8
// let age=+prompt("Yoshni kiriting:")
// function Yoshingiz(yosh) {
// if(age<13){
//     return("Bola");
// }else if(age<20){
//     return("O'smir");
// }else if(age<65){
//     return("Katta Yoshdagi")
// }else{
//     return("Qariyalar")
// }
// }
// console.log(Yoshingiz());

// Topshiriq9
// let n=+prompt("Sonni kiriting:");
// function nomer(qiymat) {
// return(n%2==0 ?"Juft":"Toq");
// }
// console.log(nomer());

// Topshiriq10
// let k =prompt("1-7 gacha bulgan raqam kiriting:");
// function Week(day) {
// switch(k) {
//     case "1":
//         return("Dushanba")
//         break;
//     case "2":
//         return("Seshanba")
//         break;
//     case "3":
//         return("Chorshanba")
//         break;
//     case "4":
//         return("Payshanba")
//         break;
//     case "5":
//         return("Juma")
//         break;
//     case "6":
//         return("Shanba")
//         break;
//     case "7":
//         return("Yakshanba")
//         break;
// }
// }
// console.log(Week());

// Topshiriq11
// let login=prompt("Loginni kiriting:");
// let parol=prompt("Passwordni kiriting:");
// function havfsizlik(password) {   
// let loginn="admin"
// let paroll="12345"
// if(login===loginn && parol===paroll){
//     return("Muvaffaqiyatli kirish")
// }
// else if(login===loginn || parol===paroll){
//     return("Login yoki parol xato")
// }
// else{
//     return("Login va parol xato")
// }
// }
// console.log(havfsizlik());

// Topshiriq12
// function namber() {
// for(i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// }
// (namber());



// Topshiriq13
// function summ() {
// let sum=0
// for(i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         sum+=i
//     }
// }
// return(sum)
// }
// console.log(summ());

// Topshiriq14
// function namber() {
// let n=+prompt("Sonni kiriting:")
// for(i=1;i<=10;i++){
//     console.log(n + "*" + i + "=" + n*i) 
// }
// }
// (namber());

// Topshiriq15
// function value() {   
// for (let i = 1; i <= 4; i++) {
//     let yulduz = "";
//     for (let j = 1; j <= i; j++) {
//         yulduz += "*";

//     }
//     console.log(yulduz);
// }
// }
// (value());

// Topshiriq16
// function fruit() {
// let meva = ["olma", "banan", "uzum", "gilos", "shaftoli"];
// meva[1]="apelsin";
// meva.push("nok");
// let lastitem=meva[meva.length-1]
// return(meva);
// }
// console.log(fruit());

// Topshiriq17
// function length() {
// let arr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let count=0
// for(i=0;i<arr.length; i++){
//     if(arr[i]%2==0){
//         count++
//     }
// }
// return(count)
// }
// console.log(length());


// Topshiriq18
// function array() {
// let arr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let newarr="";
// for(i=arr.length-1;i>=0;i--){
//     newarr+=arr[i]+" ";
// }
// return(newarr)
// }
// console.log(array());

// Topshiriq19
// let car = {
//     brand: "BMW",
//     model: "M5",
//     year: 2022,
//     colors: ["qora", "oq", "mokriy","ko'k"],
//     start: function(){
//         console.log("Car started");
//     }
// };
// car.start();

// Topshiriq20
// let student={
//     ism: "Qodir",
//     yosh: 20,
//     manzil: {
//         shahar: "Qarshi",
//         kocha: "Alisher Navoiy kucha",
//         uy: "10-uy",
//     },
//     fanlar: ["Fizika", "Matimatika","English"],
//     getInfo: function(){
//         console.log("Ism:", this.ism);
//         console.log("Yosh:", this.yosh);
//         console.log("Manzil:", this.manzil.shahar + ", " + this.manzil.kocha + ", " + this.manzil.uy + "-uy");
//         console.log("Fanlar:", this.fanlar.join(", "));
//     }
// }
// student.getInfo();

// Topshiriq21
// function random() {

// let hazillar = [
//     "Kompyuterim shunchalik sustki, “Loading...” degan yozuv ham charchab, uxlab qoladi.",
//     "IT mutaxassisi uchrashuvga kechikdi, chunki “tezkor” SSD’si sekin yozuvchini kutib qoldi.",
//     "Protsessorim doimiy ish bayramida: hech dam olmay, doim “100% utilization” bilan o‘ynaydi.",
//     "Klaviaturam shunchalik suvga chanqoqki, har dafa Caps Lockni bosganimda “ichish” uchun chiroq yonadi.",
//     "My Wi‑Fi zerikib ketganidan, routerga “reconnect” o‘yinini o‘ynashni odat qildi."
// ];
// let random = Math.floor(Math.random()*hazillar.length);
// return(hazillar[random])
// }
// console.log(random());

// Topshiriq22
// let ball = 0;
// function toLowerCase() {
// let javob1 = prompt("1-savol: HTML nima uchun ishlatiladi?");
// if (javob1.toLowerCase().includes("struktura") || javob1.toLowerCase().includes("tuzilish")) {
//     console.log("To'g'ri javob!");
//     ball++;
// } else {
//     console.log("Noto'g'ri. To'g'ri javob: Veb sahifa tuzilishini yaratish uchun.");
// }
// let javob2 = prompt("2-savol: JSda o'zgaruvchi e'lon qilish uchun qaysi kalit so'zlar ishlatiladi?");
// if (javob2.toLowerCase().includes("let") || javob2.toLowerCase().includes("var") || javob2.toLowerCase().includes("const")) {
//     console.log("To'g'ri javob!");
//     ball++;
// } else {
//     console.log("Noto'g'ri. To'g'ri javob: let, var, const.");
// }
// let javob3 = prompt("3-savol: 2 + '2' ifodasi JSda nima qaytaradi?");
// if (javob3 === "22") {
//     console.log("To'g'ri javob!");
//     ball++;
// } else {
//     console.log("Noto'g'ri. To'g'ri javob: 22");
// }
// console.log("Sizning umumiy ballingiz:", ball + " / 3");
// }
// (toLowerCase());
//1



// let avg=0;
// let students = [
//   { name: "Alisher", score: 88 },
//   { name: "Salim", score: 76 },
//   { name: "Karima", score: 95 },
//   { name: "Fazliddin", score: 60 },
//   { name: "Ozoda", score: 45 },
// ];



// function name(talaba) {
// for (const student of students) {
//    console.log(student.name)
// }
// }
// (name());

   //2
//    function scoree(student) {
//     for (const talaba of students) {
//   if(talaba.score>80){
//        console.log(talaba.name)
//   }
// }
// }
// (scoree());

//   //3
// function ball() {
// let sum = 0;
//    for (const talaba of students){
// sum += talaba.score
// return(`O'rtacha ball = `+ sum/students.length)
// }
// }
// console.log(ball());

    //1.4
//     function studentmax(list) {
//     let max = list[0];
//     for (let student of list) {
//         if(student.score>max.score){
//             max = student;
//         }
//     }
//     return max;
// }
// console.log(studentmax());


// function engYuqoriBallTalaba(list) {
//   let max = list[0]; 

//   for (let student of list) {
//     if (student.score > max.score) {
//       max = student;
//     }
//   }

//   return max;
// }
// console.log(engYuqoriBallTalaba());



//2
// let products = [
//   { name: "non", price: 3000 },
//   { name: "sut", price: 8000 },
//   { name: "yog'", price: 16000 },
//   { name: "tuxum", price: 1000 },
//   { name: "shakar", price: 7000 },
// ];

// function product(name) {
// for (const name of products) {
//     console.log(name)
// }
// }
// (product())

// function product(name) {
// for (const name of products) {
//     if(name.price<7000){
//         console.log(name.name +` `+ name.price)
//     }
// }
// }
// (product())
// function product(name) {
// let expensive = products[0]
// for (let exp of products) {
//     if(exp.price>expensive.price){
//         expensive=exp;
//     }
// }
// return(`Eng qimmat:`, expensive.name, `-`,expensive.price)
// }
// console.log(product());


// function product(name) {
// unarx=0;
// for (const narx of products) {
//     unarx+=narx.price;
// }
// return(`Jami harajat:`,unarx)
// }
// console.log(product());

// //3
// let cars = [
//   { brand: "Nexia", year: 2010 },
//   { brand: "Chevrolet", year: 2018 },
//   { brand: "BWD", year: 2025 },
//   { brand: "BMW", year: 2020 },
// ];

// function carr(name) {
// for (let car of cars) {
//   if (car.year > 2015) {
//     console.log(car.brand, "-", car.year);
//   }
// }
// }
// console.log("2015 yildan keyin chiqqan mashinalar:");
// (carr());


// function car(name) {
// let brandlar = [];
// for (let car of cars) {
//   brandlar.push(car.brand);
// }
// return("Brandlar massivi:", brandlar);
// }
// console.log(car());


// function car(name) {
// let eskiMashina = cars[0];
// for (let car of cars) {
//   if (car.year < eskiMashina.year) {
//     eskiMashina = car;
//   }
// }
// return("Eng eski mashina:", eskiMashina.brand, "-", eskiMashina.year);
// }
// console.log(car());

//4
// let student = {
//   name: "Sardor",
//   age: 17,
//   scores: {
//     math: 90,
//     physics: 75,
//     english: 85,
//     history: 70
//   }
// };

// function studentt(name) {
// for (let fan in student.scores) {
//    console.log(fan+`:`+student.scores[fan])
// }
// }
// (studentt());


// function studentt(name) {
// let jami = 0;
// let fanlarSoni = 0;
// for (let fan in student.scores) {
//   jami += student.scores[fan];
//   fanlarSoni++;
// }
// let ortacha = jami / fanlarSoni;
// return("O'rtacha ball:", ortacha);
// }
// console.log(studentt());


// function fan(name) {
// let engYuqoriFan = "";
// let engYuqoriBall = 0;
// for (let fan in student.scores) {
//   if (student.scores[fan] > engYuqoriBall) {
//     engYuqoriBall = student.scores[fan];
//     engYuqoriFan = fan;
//   }
// }
// console.log("Eng yuqori baho:", engYuqoriBall, "(", engYuqoriFan, ")");
// }
// (fan());


// function studentt(name) {
// let fanlarMassivi = [];
// for (let fan in student.scores) {
//   fanlarMassivi.push(fan);
// }
// return("Fanlar nomi:", fanlarMassivi);
// }
// console.log(studentt());



// 5
// let cart = [
//   { name: "Laptop", price: 9000000, quantity: 1 },
//   { name: "Mouse", price: 150000, quantity: 2 },
//   { name: "Keyboard", price: 300000, quantity: 1 },
// ];


// function student(name) {
// let total = 0;

// cart.forEach(item => {
//   let itemTotal = item.price * item.quantity;
//   console.log(`${item.name} - ${item.price} x ${item.quantity} = ${itemTotal}`);
//   total += itemTotal;
// });

// return("Umumiy savat qiymati:", total);
// }
// console.log(student());


// 6
// let student = [
//   { name: "Aziza", scores: [78, 82, 91] },
//   { name: "Farruh", scores: [60, 65, 70] },
//   { name: "Sardor", scores: [95, 90, 99] },
// ];

// function studentt(name) {
//     for (const student of students) {
//     let sum = 0;
//     for (const ball of s.scores) {
//         sum += ball
//     }
//     let urt = sum/student.s.length;
//     return urt.toFixed(1);
//     }
//     return(urt)
// }
// console.log(studentt("Aziza"));

