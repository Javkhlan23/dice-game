// Тоглогчийн ээлжийг хадаглах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;

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
// програм эхлэхэд бэлтгэе
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");

// Шоог шидэх эвент листенер
document
  .querySelector(".btn-roll")
  .addEventListener("click", function shooShid() {
    //  1 - 6 доторх санамсаргүй нэг тоог гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //   шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display = "block";

    // буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.

    if (diceNumber !== 1) {
      // 1-ээс ялгаатай тоо буулаа. буусан тоог тоглогчид нэмж өгнө
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 буусан тул тоглогчин ээлжийг энэ хэсэгт сольж өгнө

      // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
      roundScore = 0;
      document.getElementById("current-" + activePlayer).textContent = 0;
      //  хэрэв идэхвтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
      //  үгүй бол идэвхтэй тоглогчийг 0 болго.
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

      // if (activePlayer === 0) {
      //   activePlayer = 1;
      // } else {
      //   activePlayer = 1;
      // }

      // Улаан цэгийг шилжүүлэх
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");

      // Шоог түр арилгана.
      diceDom.style.display = "none";
    }
  });
