// function nextQuestion(num) {
//     let soal = document.getElementById("content")
//     if (num <= 10){
//      soal.innerHTML = `<h1 id='soal'>soal ${num}</h1><h2>music ${num}</h2><button class="btn btn-primary" onclick="nextQuestion(${num+1})">next</button>`
//     } else {

//     }
// }

let seconds = 11;
let timer;

document.getElementById("song").addEventListener("ended", function() {
    timer = setInterval(countdown, 1000);
});

function countdown() {
    seconds--;
    document.getElementById("timer").textContent = seconds + " seconds";
    if (seconds <= 0) {
        clearInterval(timer);
        document.getElementById("timer").textContent = alert("Time's up!");
        seconds = 11
        timer;
    }
}

let kunci = {soal1: "a", soal2: "d", soal3: "a", soal4: "c", soal5: "b"}

let bankSoal = [{
    musicSrc : "/Hackathon8/assets/2.mp3",
    a : "A.as it was",
    b : "B.Indonesia raya",
    c : "C.Manok dadali",
    d : "D.bubui bulan"
},
{
    musicSrc : "/Hackathon8/assets/3.mp3",
    a : "A.lagu jorok",
    b : "B.blue bird",
    c : "C.heavy rotation",
    d : "D.sasageyo"
},
{
    musicSrc : "/Hackathon8/assets/4.mp3",
    a : "A.muak",
    b : "B.sial",
    c : "C.komang",
    d : "D.kill bill"
}
]

let score = document.getElementById("score").innerText

let count = 0
const change = () => {
    alert()
    document.querySelector("#a").textContent = bankSoal[count]["a"]
    document.querySelector("#b").textContent = bankSoal[count]["b"]
    document.querySelector("#c").textContent = bankSoal[count]["c"]
    document.querySelector("#d").textContent = bankSoal[count]["d"]
    document.querySelector("#song").textContent = bankSoal[count]["musicSrc"]
    count++
}
