// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая
var isNewGame;
// Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;
//  2 тоглогчийн цуглуулсан оноонууд
var scores;
// Идэвхтэй тоглогчийн цуглуулж баЙгаа ээлжийн оноо
var roundScore;

// Шооны зургийг үзүүлэх элементийг DOM-оос хойж олоод хадгалья
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ
initGame();

// тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  // Тоглоом эхэллээ гэдэг төлөвт оруулна.
  isNewGame = true;
  // Тоглогчийн ээлжийг хадаглах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
  activePlayer = 0;

  // тоглогчдийн цуглууулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  // тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсгч
  roundScore = 0;

  // програм эхлэхэд бэлтгэе
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// Шоог шидэх эвент листенер
document
  .querySelector(".btn-roll")
  .addEventListener("click", function shooShid() {
    if (isNewGame) {
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

        switchToNextPlayer();
      }
    } else {
      alert(
        "Тоглоом дууслаа өлөгчингүүдээ. Хараал идсэн тоглоомоо эхнээс нь тогло"
      );
    }
  });

// HOLD товчны эвент листенер
roundScore = 0;
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //   дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
    if (scores[activePlayer] >= 100) {
      // тоглоомыг дууссан төлөвт оруулна.
      isNewGame = false;
      // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
      document.getElementById("name-" + activePlayer).textContent = "ЯЛАГЧ!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // тоглогчийн ээлжийг солино.
      switchToNextPlayer();
    }
  } else {
    alert(
      "Тоглоом дууслаа өлөгчингүүдээ. Хараал идсэн тоглоомоо эхнээс нь тогло"
    );
  }
});
// тоглогчийн ээлжийг солино.
function switchToNextPlayer() {
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //  хэрэв идэхвтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
  //  үгүй бол идэвхтэй тоглогчийг 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр арилгана.
  diceDom.style.display = "none";
}

// New game буюу шинэ тоглоомыг эхлэхэд
document.querySelector(".btn-new").addEventListener("click", initGame);
