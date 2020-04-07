// Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡, Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð³ 0, Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð³ 1 Ð³ÑÐ¶ Ñ‚ÑÐ¼Ð´ÑÐ³Ð»ÑÐµ.
var activePlayer = 0;

// Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð´Ñ‹Ð½ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»ÑÐ°Ð½ Ð¾Ð½Ð¾Ð¾Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡
var scores = [0, 0];

// Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð½Ð´ÑÑ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»Ð¶ Ð±Ð°Ð¹Ð³Ð°Ð° Ð¾Ð½Ð¾Ð¾Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡
var roundScore = 0;

// Ð¨Ð¾Ð¾Ð½Ñ‹ Ð°Ð»ÑŒ Ñ‚Ð°Ð»Ð°Ð°Ñ€Ð°Ð° Ð±ÑƒÑƒÑÐ½Ñ‹Ð³ Ñ…Ð°Ð´Ð³Ð°Ð»Ð°Ñ… Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡ Ñ…ÑÑ€ÑÐ³Ñ‚ÑÐ¹, 1-6 Ð³ÑÑÑÐ½ ÑƒÑ‚Ð³Ñ‹Ð³ ÑÐ½Ñ Ñ…ÑƒÐ²ÑŒÑÐ°Ð³Ñ‡Ð¸Ð´ ÑÐ°Ð½Ð°Ð¼ÑÐ°Ñ€Ð³Ò¯Ð¹Ð³ÑÑÑ€ Ò¯Ò¯ÑÐ³ÑÐ¶ Ó©Ð³Ð½Ó©.

// ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼ ÑÑ…Ð»ÑÑ…ÑÐ´ Ð±ÑÐ»Ñ‚Ð³ÑÐµ
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Ð¨Ð¾Ð¾Ð³ ÑˆÐ¸Ð´ÑÑ… ÑÐ²ÐµÐ½Ñ‚ Ð»Ð¸ÑÑ‚ÐµÐ½ÐµÑ€
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1 - 6 Ð´Ð¾Ñ‚Ð¾Ñ€Ñ… ÑÐ°Ð½Ð°Ð¼ÑÐ°Ñ€Ð³Ò¯Ð¹ Ð½ÑÐ³ Ñ‚Ð¾Ð¾ Ð³Ð°Ñ€Ð³Ð°Ð¶ Ð°Ð²Ð½Ð°
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Ð¨Ð¾Ð¾Ð½Ñ‹ Ð·ÑƒÑ€Ð³Ð¸Ð¹Ð³ Ð²ÑÐ± Ð´ÑÑÑ€ Ð³Ð°Ñ€Ð³Ð°Ð¶ Ð¸Ñ€Ð½Ñ.
  diceDom.style.display = "block";

  // Ð‘ÑƒÑƒÑÐ°Ð½ ÑÐ°Ð½Ð°Ð¼ÑÐ°Ñ€Ð³Ò¯Ð¹ Ñ‚Ð¾Ð¾Ð½Ð´ Ñ…Ð°Ñ€Ð³Ð°Ð»Ð·Ð°Ñ… ÑˆÐ¾Ð¾Ð½Ñ‹ Ð·ÑƒÑ€Ð³Ð¸Ð¹Ð³ Ð²ÑÐ± Ð´ÑÑÑ€ Ð³Ð°Ñ€Ð³Ð°Ð¶ Ð¸Ñ€Ð½Ñ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Ð‘ÑƒÑƒÑÐ°Ð½ Ñ‚Ð¾Ð¾ Ð½ÑŒ 1 ÑÑÑ ÑÐ»Ð³Ð°Ð°Ñ‚Ð°Ð¹ Ð±Ð¾Ð» Ð¸Ð´ÑÐ²Ñ…Ñ‚ÑÐ¹ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð½ Ð¾Ð½Ð¾Ð¾Ð³ Ð½ÑÐ¼ÑÐ³Ð´Ò¯Ò¯Ð»Ð½Ñ.
  if (diceNumber !== 1) {
    // 1-ÑÑÑ ÑÐ»Ð³Ð°Ð°Ñ‚Ð°Ð¹ Ñ‚Ð¾Ð¾ Ð±ÑƒÑƒÐ»Ð°Ð°. Ð‘ÑƒÑƒÑÐ°Ð½ Ñ‚Ð¾Ð¾Ð³ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð´ Ð½ÑÐ¼Ð¶ Ó©Ð³Ð½Ó©
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 Ð±ÑƒÑƒÑÐ°Ð½ Ñ‚ÑƒÐ» Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð³ ÑÐ½Ñ Ñ…ÑÑÑÐ³Ñ‚ ÑÐ¾Ð»ÑŒÐ¶ Ó©Ð³Ð½Ó©.
    switchToNextPlayer();
  }
});

// HOLD Ñ‚Ð¾Ð²Ñ‡Ð½Ñ‹ ÑÐ²ÐµÐ½Ñ‚ Ð»Ð¸ÑÑ‚ÐµÐ½ÐµÑ€
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Ð£Ð³ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»ÑÐ°Ð½ ÑÑÐ»Ð¶Ð½Ð¸Ð¹ Ð¾Ð½Ð¾Ð¾Ð³ Ð³Ð»Ð¾Ð±Ð°Ð»ÑŒ Ð¾Ð½Ð¾Ð¾Ð½ Ð´ÑÑÑ€ Ð½ÑŒ Ð½ÑÐ¼Ð¶ Ó©Ð³Ð½Ó©.

  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }

  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Ð”ÑÐ»Ð³ÑÑ† Ð´ÑÑÑ€ Ð¾Ð½Ð¾Ð¾Ð³ Ð½ÑŒ Ó©Ó©Ñ€Ñ‡Ð¸Ð»Ð½Ó©
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Ð£Ð³ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡ Ñ…Ð¾Ð¶ÑÐ¾Ð½ ÑÑÑÑ…Ð¸Ð¹Ð³ (Ð¾Ð½Ð¾Ð¾ Ð½ÑŒ 100-Ñ Ð¸Ñ… ÑÑÑÑ…) ÑˆÐ°Ð»Ð³Ð°Ñ…
  if (scores[activePlayer] >= 10) {
    // Ð¯Ð»Ð°Ð³Ñ‡ Ð³ÑÑÑÐ½ Ñ‚ÐµÐºÑÑ‚Ð¸Ð¹Ð³ Ð½ÑÑ€Ð½Ð¸Ð¹Ñ… Ð½ÑŒ Ð¾Ñ€Ð¾Ð½Ð´ Ð³Ð°Ñ€Ð³Ð°Ð½Ð°
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð³ ÑÐ¾Ð»Ð¸Ð½Ð¾.
    switchToNextPlayer();
  }
});

// Ð­Ð½Ñ Ñ„ÑƒÐ½ÐºÑ† Ð½ÑŒ Ñ‚Ð¾Ð³Ð»Ð¾Ñ… ÑÑÐ»Ð¶Ð¸Ð¹Ð³ Ð´Ð°Ñ€Ð°Ð°Ñ‡Ð¸Ð¹Ð½ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡ Ñ€ÑƒÑƒ ÑˆÐ¸Ð»Ð¶Ò¯Ò¯Ð»Ð´ÑÐ³.
function switchToNextPlayer() {
  // Ð­Ð½Ñ Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð½Ð´ÑÑ Ñ†ÑƒÐ³Ð»ÑƒÑƒÐ»ÑÐ°Ð½ Ð¾Ð½Ð¾Ð¾Ð³ 0 Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Ð¢Ð¾Ð³Ð»Ð¾Ð³Ñ‡Ð¸Ð¹Ð½ ÑÑÐ»Ð¶Ð¸Ð¹Ð³ Ð½Ó©Ð³Ó©Ó© Ñ‚Ð¾Ð³Ð»Ð¾Ð³Ñ‡ Ñ€ÑƒÑƒ ÑˆÐ¸Ð»Ð¶Ò¯Ò¯Ð»Ð½Ñ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ð£Ð»Ð°Ð°Ð½ Ñ†ÑÐ³Ð¸Ð¹Ð³ ÑˆÐ¸Ð»Ð¶Ò¯Ò¯Ð»ÑÑ…
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Ð¨Ð¾Ð¾Ð³ Ñ‚Ò¯Ñ€ Ð°Ð»Ð³Ð° Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾.
  diceDom.style.display = "none";
}
