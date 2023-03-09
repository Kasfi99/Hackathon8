// function nextQuestion(num) {
//     let soal = document.getElementById("content")
//     if (num <= 10){
//      soal.innerHTML = `<h1 id='soal'>soal ${num}</h1><h2>music ${num}</h2><button class="btn btn-primary" onclick="nextQuestion(${num+1})">next</button>`
//     } else {

//     }
// }
let playerName;
let score = 0;
let seconds = 11;
let timer;
let count = 1;
let kunci = {
  soal1: "a",
  soal2: "d",
  soal3: "a",
  soal4: "c",
  soal5: "b",
  soal6: "a",
  soal7: "c",
  soal8: "d",
  soal9: "d",
  soal10: "b",
};
// const menu = document.getElementById("menu-sound");
const clickSound = document.getElementById("click-sound");
const correct = document.getElementById("correct-sound");
const wrong = document.getElementById("wrong-sound");

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
  {
    musicSrc: "/Hackathon8/assets/5.mp3",
    a: "A. Wahdak, Maher Zein",
    b: "B. Casablanca, Nuha Bahrin",
    c: "C. Lagu Arab, Orang Arab",
    d: "D. Tidak Tau",
  },
  {
    musicSrc: "/Hackathon8/assets/6.mp3",
    a: "A. Ditto, New Jeans",
    b: "B. New Jeans, Ditto",
    c: "C. New Ditto, Jeans",
    d: "D. Ditto Has A New Jeans",
  },
  {
    musicSrc: "/Hackathon8/assets/7.mp3",
    a: "A. Lagu Wibu",
    b: "B. Lagu Wibu",
    c: "C. Lagu Wibu",
    d: "D. Lagu Wibu",
  },
  {
    musicSrc: "/Hackathon8/assets/8.mp3",
    a: "A. Abang Tukang Bakso,",
    b: "B. Hampa, Ari Lasso",
    c: "C. Bakso, Ari Lasso",
    d: "D. Hampa Remix, Ari Bakso ",
  },
  {
    musicSrc: "/Hackathon8/assets/9.mp3",
    a: "A. Entek-Entekan, Yeni Ingka",
    b: "B. Lagu Jawa, Orang Jawa",
    c: "C. Widodari, Denny Caknan",
    d: "D. Rungkad, Happy Asmara",
  },
  {
    musicSrc: "/Hackathon8/assets/10.mp3",
    a: "A. ",
    b: "B. ",
    c: "C. ",
    d: "D. ",
  },
];

document.getElementById("song").addEventListener("ended", () => {
  timer = setInterval(countdown, 1000);
});

function countdown() {
  seconds--;
  document.getElementById("timer").textContent = seconds + " seconds";
  if (seconds <= 0) {
    clearInterval(timer);
    document.getElementById("timer").textContent = alert("Time's up!");
    if (count === 10){
        window.location.href = "https://www.youtube.com/watch?v=mx86-rTclzA";
    }else {
    seconds = 11;
    timer;
    change(); 
    }
  }
}

// let score = document.getElementById("score").innerText

const change = (answer) => {

  clearInterval(timer);
  checkAnswer(answer);
  document.getElementById("testing").textContent = `Guess The Song ${count+1}`;
  document.getElementById("timer").textContent = "";
  document.querySelector("#a").textContent = bankSoal[count]["a"];
  document.querySelector("#b").textContent = bankSoal[count]["b"];
  document.querySelector("#c").textContent = bankSoal[count]["c"];
  document.querySelector("#d").textContent = bankSoal[count]["d"];
  document.querySelector("#song").src = bankSoal[count]["musicSrc"];
  count++;
  seconds = 11;
  timer;

  if (count === 7) {
    document.getElementById(
      "running"
    ).innerHTML = `<marquee>Special Question +1000 Score</marquee>`;
  } else {
    document.getElementById(
        "running"
      ).innerHTML = `<marquee>Foxy Song Guessing</marquee>`;
  }

  if (count === 10) {
    document.querySelector("#a").addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/watch?v=mx86-rTclzA";
    });
    document.querySelector("#b").addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/watch?v=mx86-rTclzA";
    });
    document.querySelector("#c").addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/watch?v=mx86-rTclzA";
    });
    document.querySelector("#d").addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/watch?v=mx86-rTclzA";
    });
  }
};

const checkAnswer = (selected) => {
  if (selected === kunci[`soal${count}`]) {
    correct.play();
    document.getElementById("song").play();
    if (count === 7) {
      score += 1000;
    } else {
      score += 10;
    }
    document.getElementById("score").innerText = `Score ${score}`;
  } else {
    if (count === 7) {
        score += 1000;
        wrong.play();
        document.getElementById("song").play();
    } else {
      wrong.play();
    document.getElementById("song").play();  
    }
    document.getElementById("score").innerText = `Score ${score}`;
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
  playerName = prompt("Please enter your name:");
  document.getElementById("song").play();
  document.getElementById("score").innerText = `Score ${score}`;
  document.getElementById("start").style.display = "none";
  document.getElementById("content").style.display = "flex";
  document.getElementById("testing").textContent = `Guess The Song ${count}`;
  document.querySelector("#a").textContent = bankSoal[0]["a"];
  document.querySelector("#b").textContent = bankSoal[0]["b"];
  document.querySelector("#c").textContent = bankSoal[0]["c"];
  document.querySelector("#d").textContent = bankSoal[0]["d"];
  document.querySelector("#song").src = bankSoal[0]["musicSrc"];
  document.getElementById("song").loop = false
};

document.addEventListener("click", function () {
  clickSound.play();
});
