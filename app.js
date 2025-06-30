// 1. JavaScript asoslari va o'zgaruvchilar

// Topshiriq 1:
// let studentName = "Abror";
// studentName = "Sardor";
// console.log(studentName);


// Topshiriq 3:
// let a = +prompt("a o'zgaruvchini kiriting: ");
// let b = +prompt("b o'zgaruvchini kiriting: ");
// [a, b] = [b, a]
// console.log(a, b);


// 2.Ma'lumot turlari va typeof

// Topshiriq 4;
// let type = "salom"
// console.log(typeof(type));
// let typee = 1;
// console.log(typeof(typee));
// let typeee
// console.log(typeee);
// let  x=10n;
// console.log(typeof(x));
// const y = Symbol("ks");
// console.log(typeof(y));
// let n = null;
// console.log(typeof(n));
// const a = Symbol("class");
// const b = Symbol("class");
// console.log(a === b);

// Topshiriq 5
// let Tel = +prompt("Tel raqamizni kiriting")
// let Tell = prompt("Tel raqamizni kiriting")
// console.log(typeof(Tel));
// console.log(typeof(Tell));



// Topshiriq 6
// let aholi=37000000n
// console.log(aholi)

// Topshiriq7
// console.log("5" + 2);
// console.log("5" - 2);
// console.log(2 * "4");
// console.log("salom" * 5);

// Topshiriq8
// let age=+prompt(`enter age:`)
// if(age<13){
//     alert("Bola")
// }else if(age<20){
//     alert("O'smir")
// }else if(age<65){
//     alert("Katta Yoshdagi")
// }else{
//     alert("Qariyalar")
// }

// Topshiriq9
// let n=+prompt
// ("Enter number:")
// console.log(n%2==0 ?"Juft":"Toq")

// Topshiriq10
// let k =prompt("Haftani kiriting:")
// switch(k) {
//     case "1":
//         console.log("Dushanba")
//         break;
//     case "2":
//         console.log("Seshanba")
//         break;
//     case "3":
//         console.log("Chorshanba")
//         break;
//     case "4":
//         console.log("Payshanba")
//         break;
//     case "5":
//         console.log("Juma")
//         break;
//     case "6":
//         console.log("Shanba")
//         break;
//     case "7":
//         console.log("Yakshanba")
//         break;
// }

// Topshiriq11
// let login=prompt("Loginni kiriting:")
// let parol=prompt("Passwordni kiriting:")
// let loginn="admin"
// let paroll="12345"
// if(login===loginn && parol===paroll){
//     alert("Muvaffaqiyatli kirish")
// }
// else if(login===loginn || parol===paroll){
//     alert("Login yoki parol xato")
// }
// else{
//     alert("Login va parol xato")
// }

// Topshiriq12
// for(i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Topshiriq13
// let sum=0
// for(i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         sum+=i
//     }
// }
// console.log(sum)

// Topshiriq14
// let n=+prompt(Sonni kiriting:")
// for(i=1;i<=10;i++){
//     console.log(n + "*" + i + "=" + n*i) 
// }

// Topshiriq15
// for (let i = 1; i <= 4; i++) {
//     let yulduz = "";
//     for (let j = 1; j <= i; j++) {
//         yulduz += "*";
//     }
//     console.log(yulduz);
// }

// Topshiriq16
// let meva = ["olma", "banan", "uzum", "gilos", "shaftoli"];
// meva[1]="apelsin";
// meva.push("nok");
// let lastitem=meva[meva.length-1]
// console.log(lastitem)
// console.log(meva)

// Topshiriq17
// let arr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let count=0
// for(i=0;i<arr.length; i++){
//     if(arr[i]%2==0){
//         count++
//     }
// }
// console.log(count)

// Topshiriq18
// let arr = [1, 2, 3, 5, 30, 15, 45, 9, 56, 60, 75];
// let newarr="";
// for(i=arr.length-1;i>=0;i--){
//     newarr+=arr[i]+" ";
// }
// console.log(newarr)

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
//hazzillar chatgptdan oldim kodni ozim yozganman
// let hazillar = [
//     "Nega kompyuter sovqotdi? Chunki uni ventilyator qoldirdi!",
//     "Kitobni nega ishdan bo‘shatishdi? Chunki u juda ko‘p gapirardi!",
//     "Matematik nima dedi? Bu masalada mening sonlarim bor!",
//     "Programmist qizga nima dedi? Sen mening kodingdagi yagona xatosan ❤️",
//     "Telefon nima dedi? O‘zimni quvvatlantirishim kerak!"
// ];
// let random = Math.floor(Math.random()*hazillar.length);
// console.log(hazillar[random])

// Topshiriq22
// let ball = 0;
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

//1
// let avg=0;
// let students = [
//   { name: "Alisher", score: 88 },
//   { name: "Salim", score: 76 },
//   { name: "Karima", score: 95 },
//   { name: "  Fazliddin", score: 60 },
//   { name: "Ozoda", score: 45 },
// ];
//for (const ism of students) {
//    //1
//    //console.log(ism.name)
//    //2
//   /* if(ism.score>80){
//        console.log(ism.name)
//    }*/
//   //3
//    avg+=ism.score;
//}
//console.log(`O'rtacha ball = `+avg/5)
    //1.4
    // let best=students[0];
    // for (let student of students) {
    //     if(student.score>best.score){
    //         best=student;
    //     }
    // }
    // console.log("Eng baland ball olgan talaba:", best.name, "-", best.score, "ball");

//2
// let products = [
//   { name: "non", price: 3000 },
//   { name: "sut", price: 8000 },
//   { name: "yog'", price: 16000 },
//   { name: "tuxum", price: 1000 },
//   { name: "shakar", price: 7000 },
// ];

// for (const name of products) {
//     console.log(name)
// }

// for (const name of products) {
//     if(name.price<7000){
//         console.log(name.name +` `+ name.price)
//     }
// }

// let expensive = products[0]
// for (let exp of products) {
//     if(exp.price>expensive.price){
//         expensive=exp;
//     }
// }
// console.log(`Eng qimmat:`, expensive.name, `-`,expensive.price)

// unarx=0;
// for (const narx of products) {
//     unarx+=narx.price;
// }
// console.log(`Jami harajat:`,unarx)

//3
// let cars = [
//   { brand: "Nexia", year: 2010 },
//   { brand: "Chevrolet", year: 2018 },
//   { brand: "BWD", year: 2025 },
//   { brand: "BMW", year: 2020 },
// ];
// console.log("2015 yildan keyin chiqqan mashinalar:");
// for (let car of cars) {
//   if (car.year > 2015) {
//     console.log(car.brand, "-", car.year);
//   }
// }

// let brandlar = [];
// for (let car of cars) {
//   brandlar.push(car.brand);
// }
// console.log("Brandlar massivi:", brandlar);

// let eskiMashina = cars[0];
// for (let car of cars) {
//   if (car.year < eskiMashina.year) {
//     eskiMashina = car;
//   }
// }
// console.log("Eng eski mashina:", eskiMashina.brand, "-", eskiMashina.year);

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
// for (let fan in student.scores) {
//    console.log(fan+`:`+student.scores[fan])
// }

// let jami = 0;
// let fanlarSoni = 0;
// for (let fan in student.scores) {
//   jami += student.scores[fan];
//   fanlarSoni++;
// }
// let ortacha = jami / fanlarSoni;
// console.log("O'rtacha ball:", ortacha);

// let engYuqoriFan = "";
// let engYuqoriBall = 0;
// for (let fan in student.scores) {
//   if (student.scores[fan] > engYuqoriBall) {
//     engYuqoriBall = student.scores[fan];
//     engYuqoriFan = fan;
//   }
// }
// console.log("Eng yuqori baho:", engYuqoriBall, "(", engYuqoriFan, ")");

// let fanlarMassivi = [];
// for (let fan in student.scores) {
//   fanlarMassivi.push(fan);
// }
// console.log("Fanlar nomi:", fanlarMassivi);


//5
// let cart = [
//   { name: "Laptop", price: 9000000, quantity: 1 },
//   { name: "Mouse", price: 150000, quantity: 2 },
//   { name: "Keyboard", price: 300000, quantity: 1 },
// ];

// let total = 0;

// cart.forEach(item => {
//   let itemTotal = item.price * item.quantity;
//   console.log(`${item.name} - ${item.price} x ${item.quantity} = ${itemTotal}`);
//   total += itemTotal;
// });

// console.log("Umumiy savat qiymati:", total);


