// Тоглогчийн ээлжийг хадаглах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;

// тоглогчдийн цуглууулсан оноог хадгалах хувьсагч

var scores = [0, 0];
// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсгч

var roundScore = 0;

// шооны алт талаар буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

var diceNumber = Math.floor(Math.random() * 7);

//  <div class="player-score" id="score-0">43</div>

// window.document.querySelector("#score-0").textContent = dice;

// window.document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";

document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
document
  .querySelector(".btn-roll")
  .addEventListener("click", function shooShid() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    // alert("Шоог шидлээ  : " + diceNumber);
  });
// console.log("Шоо: " + dice);
