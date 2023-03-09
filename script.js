// function nextQuestion(num) {
//     let soal = document.getElementById("content")
//     if (num <= 10){
//      soal.innerHTML = `<h1 id='soal'>soal ${num}</h1><h2>music ${num}</h2><button class="btn btn-primary" onclick="nextQuestion(${num+1})">next</button>`
//     } else {

//     }
// }

let score = 0;
let seconds = 11;
let timer;
let count = 1;
let kunci = { soal1: "a", soal2: "d", soal3: "a", soal4: "c", soal5: "b" };
let bankSoal = [
  {
    musicSrc: "/Hackathon8/assets/1.mp3",
    a: "A. Creepin, The Weeknd",
    b: "B. Satru, Denny Caknan",
    c: "C. Despacito, Justin Bieber",
    d: "D. Mockingbird, Eminem",
  },
  {
    musicSrc: "/Hackathon8/assets/2.mp3",
    a: "A. I Said A, Bangjor",
    b: "B. Sial, Mahalini",
    c: "C. Monolog, Pamungkas",
    d: "D. Lagu Jorok, Baon Cikadap",
  },
  {
    musicSrc: "/Hackathon8/assets/3.mp3",
    a: "A. As it was, Harry Styles",
    b: "B. Heavy Rotation, JKT48",
    c: "C. Night Changes, One Direction",
    d: "D. Vegas, Doja Cat",
  },
  {
    musicSrc: "/Hackathon8/assets/4.mp3",
    a: "A. Jika, Nuha Bahrin",
    b: "B. Bila, Lyla",
    c: "C. Komang, Raim Laode",
    d: "D. Aku Bukan Jodohnya, Tri Suaka",
  },
];

document.getElementById("song").addEventListener("ended", function () {
  timer = setInterval(countdown, 1000);
});

function countdown() {
  seconds--;
  document.getElementById("timer").textContent = seconds + " seconds";
  if (seconds <= 0) {
    clearInterval(timer);
    document.getElementById("timer").textContent = alert("Time's up!");
    seconds = 11;
    timer;
  }
}

// let score = document.getElementById("score").innerText

const change = (answer) => {
  clearInterval(timer);
  checkAnswer(answer)
  document.getElementById("testing").textContent = `Guess The Song ${count}`;
  document.getElementById("timer").textContent = "";
  document.querySelector("#a").textContent = bankSoal[count]["a"];
  document.querySelector("#b").textContent = bankSoal[count]["b"];
  document.querySelector("#c").textContent = bankSoal[count]["c"];
  document.querySelector("#d").textContent = bankSoal[count]["d"];
  document.querySelector("#song").src = bankSoal[count]["musicSrc"];
  count++;
  seconds = 11;
  timer;
};

const checkAnswer = (selected) => {
  if (selected === kunci[`soal${count}`]) {
    score += 20;
    document.getElementById("score").innerText = `Score ` + `${score}`;
  }
};

// document.querySelector("#a").addEventListener("click", () => {
//   checkAnswer("a");
// });

// document.querySelector("#b").addEventListener("click", () => {
//   checkAnswer("b");
// });

// document.querySelector("#c").addEventListener("click", () => {
//   checkAnswer("c");
// });

// document.querySelector("#d").addEventListener("click", () => {
//   checkAnswer("d");
// });

const startGame = () => {
  document.getElementById("content").style.display = "flex";
  document.getElementById("testing").textContent = `Guess The Song 1`;
  document.querySelector("#a").textContent = bankSoal[0]["a"];
  document.querySelector("#b").textContent = bankSoal[0]["b"];
  document.querySelector("#c").textContent = bankSoal[0]["c"];
  document.querySelector("#d").textContent = bankSoal[0]["d"];
  document.querySelector("#song").src = bankSoal[0]["musicSrc"];
};
