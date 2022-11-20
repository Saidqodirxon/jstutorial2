// barcha pullar
let answer = prompt(
  "Sizda nechi pul bor ?\nIltimos Milliy Valyuta UZS da kiriting ! \nEslatib O`taman Jo`nashingiz Harajatlari : \nBilet : 350 $\nMehmonxona : 680 $\nBoshqa : 230 EURO\n \nValyuta Kurs : \nUSD : 11250 UZS\nEURO : 12864 UZS"
);
//Tasodifiy kun
let kun = Math.floor(Math.random() * (30 - 3 + 3));
console.log(kun);
// console.log(answer);

//valyuta kurs
let dollar = 11250;
let yeuro = 12864;

// harajatlar:

let bilet = dollar * 350;
let mehmonhona = dollar * 680;
let aylanish = yeuro * 230;

// jami:

const jami = bilet + mehmonhona + aylanish;

// Max = 30
// Min = 3

if (answer >= jami) {
  document.querySelector("h1").textContent = "Oq Yo'l !";
} else {
  document.querySelector(
    "h1"
  ).textContent = `Sizda Pul Yetarlicha Emas ${kun} Kundan Keyin Urinib Ko'ring`;
}

// Kodni ko`rayotganga Salom 
//Iltimos chopilmasin 😂
