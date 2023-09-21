let player = 0;
let block = [];
let player1 = [];
let player2 = [];
let itens = ["X", "O"];
let choicePlayer1 = "";
let choicePlayer2 = "";
let startGame = false;
let resultado1 = [];
let resultado2 = [];
let count1 = 0;
let count2 = 0;
let winner = false;
const sectionOfTable = document
  .querySelectorAll("span")
  .forEach(function (item) {
    item.addEventListener("click", game);
  });
const nameplayer1 = document.getElementById("namePlayer1");
const nameplayer2 = document.getElementById("namePlayer2");

const button = document.getElementById("startGame");
button.addEventListener("click", start);
const sectionPlayer = document.getElementById("sectionPlayer");

function start() {
  startGame = true;
  const random = Math.floor(Math.random() * 2);
  if (random === 0) {
    choicePlayer1 = "X";
    choicePlayer2 = "O";
  } else {
    choicePlayer1 = "O";
    choicePlayer2 = "X";
  }
  sectionPlayer.innerText =
    "É a vez do: " + nameplayer1.value + " ele é: " + choicePlayer1;
  document.getElementById("startGame").innerText = "Reiniciar";
  button.removeEventListener("click", start);
  button.addEventListener("click", restart);
}

function game(ev) {
  if (startGame === true) {
    player++;
    const blockSecion = ev.currentTarget;
    if (player % 2 === 0) {
      block.push(blockSecion.id);
    } else {
      block.push(blockSecion.id);
    }
    blockSecion.removeEventListener("click", game);
    const section = document.getElementById(block[player - 1]);
    if (player % 2 === 0) {
      section.innerText = choicePlayer2;
      player2.push(blockSecion);
      resultado2.push(
        player2[count2].dataset.value + player2[count2].dataset.posicion
      );
      sectionPlayer.innerText =
        "É a vez do: " + nameplayer1.value + " ele é: " + choicePlayer1;
      count2++;
      win();
    } else {
      section.innerText = choicePlayer1;
      player1.push(blockSecion);
      resultado1.push(
        player1[count1].dataset.value + player1[count1].dataset.posicion
      );
      sectionPlayer.innerText =
        "É a vez do: " + nameplayer2.value + " ele é: " + choicePlayer2;
      count1++;
      win();
    }
  } else {
    alert("Clique em começar o jogo!!");
  }
}
function win() {
  function winSpan(id) {
    const span = document.querySelector("#" + id);
    span.classList.toggle("tableNormal");
    span.classList.toggle("tableWin");
  }
  if (
    //Win na tabela de cima
    (resultado1.includes("100100") &&
      resultado1.includes("001100") &&
      resultado1.includes("010100")) ||
    (resultado2.includes("100100") &&
      resultado2.includes("001100") &&
      resultado2.includes("010100"))
  ) {
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    winner = true;
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("100100")].id);
      winSpan(player2[resultado2.indexOf("001100")].id);
      winSpan(player2[resultado2.indexOf("010100")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("100100")].id);
      winSpan(player1[resultado1.indexOf("001100")].id);
      winSpan(player1[resultado1.indexOf("010100")].id);
    }
    return;
  } else if (
    //Win na tabela do meio
    (resultado1.includes("001010") &&
      resultado1.includes("010010") &&
      resultado1.includes("100010")) ||
    (resultado2.includes("001010") &&
      resultado2.includes("010010") &&
      resultado2.includes("100010"))
  ) {
    winner = true;
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("001010")].id);
      winSpan(player2[resultado2.indexOf("010010")].id);
      winSpan(player2[resultado2.indexOf("100010")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("001010")].id);
      winSpan(player1[resultado1.indexOf("010010")].id);
      winSpan(player1[resultado1.indexOf("100010")].id);
    }
  } else if (
    //Win na tabela de baixo
    (resultado1.includes("001001") &&
      resultado1.includes("010001") &&
      resultado1.includes("100001")) ||
    (resultado2.includes("001001") &&
      resultado2.includes("010001") &&
      resultado2.includes("100001"))
  ) {
    winner = true;
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("001001")].id);
      winSpan(player2[resultado2.indexOf("010001")].id);
      winSpan(player2[resultado2.indexOf("100001")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("001001")].id);
      winSpan(player1[resultado1.indexOf("010001")].id);
      winSpan(player1[resultado1.indexOf("100001")].id);
    }
  } else if (
    //Win na tabela diagonal da direita para esquerda
    (resultado1.includes("001001") &&
      resultado1.includes("010010") &&
      resultado1.includes("100100")) ||
    (resultado2.includes("001001") &&
      resultado2.includes("010010") &&
      resultado2.includes("100100"))
  ) {
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("001001")].id);
      winSpan(player2[resultado2.indexOf("010010")].id);
      winSpan(player2[resultado2.indexOf("100100")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("001001")].id);
      winSpan(player1[resultado1.indexOf("010010")].id);
      winSpan(player1[resultado1.indexOf("100100")].id);
    }
  } else if (
    //Win na tabela diagonal da esquerda para direita
    (resultado1.includes("001100") &&
      resultado1.includes("010010") &&
      resultado1.includes("100001")) ||
    (resultado2.includes("001100") &&
      resultado2.includes("010010") &&
      resultado2.includes("100001"))
  ) {
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("001100")].id);
      winSpan(player2[resultado2.indexOf("010010")].id);
      winSpan(player2[resultado2.indexOf("100001")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("001100")].id);
      winSpan(player1[resultado1.indexOf("010010")].id);
      winSpan(player1[resultado1.indexOf("100001")].id);
    }
  } else if (
    //Win na tabela vertical direita
    (resultado1.includes("100001") &&
      resultado1.includes("100010") &&
      resultado1.includes("100100")) ||
    (resultado2.includes("100001") &&
      resultado2.includes("100010") &&
      resultado2.includes("100100"))
  ) {
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("100001")].id);
      winSpan(player2[resultado2.indexOf("100010")].id);
      winSpan(player2[resultado2.indexOf("100100")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("100001")].id);
      winSpan(player1[resultado1.indexOf("100010")].id);
      winSpan(player1[resultado1.indexOf("100100")].id);
    }
  } else if (
    //Win na tabela vertical esquerda
    (resultado1.includes("001001") &&
      resultado1.includes("001010") &&
      resultado1.includes("001100")) ||
    (resultado2.includes("001001") &&
      resultado2.includes("001010") &&
      resultado2.includes("001100"))
  ) {
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("001001")].id);
      winSpan(player2[resultado2.indexOf("001010")].id);
      winSpan(player2[resultado2.indexOf("001100")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("001001")].id);
      winSpan(player1[resultado1.indexOf("001010")].id);
      winSpan(player1[resultado1.indexOf("001100")].id);
    }
  } else if (
    //Win na tabela vertical meio
    (resultado1.includes("010001") &&
      resultado1.includes("010010") &&
      resultado1.includes("010100")) ||
    (resultado2.includes("010001") &&
      resultado2.includes("010010") &&
      resultado2.includes("010100"))
  ) {
    document.querySelectorAll("span").forEach(function (item) {
      item.removeEventListener("click", game);
    });
    if (player % 2 === 0) {
      winSpan(player2[resultado2.indexOf("010001")].id);
      winSpan(player2[resultado2.indexOf("010010")].id);
      winSpan(player2[resultado2.indexOf("010100")].id);
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer2.value +
        ", mas relaxa " +
        nameplayer1.value +
        " ele nem é tão bom assim.";
    } else {
      sectionPlayer.innerText =
        "Oh vencedor é o : " +
        nameplayer1.value +
        ", mas relaxa " +
        nameplayer2.value +
        " ele nem é tão bom assim.";
      winSpan(player1[resultado1.indexOf("010001")].id);
      winSpan(player1[resultado1.indexOf("010010")].id);
      winSpan(player1[resultado1.indexOf("010100")].id);
    }
  } else if (winner === false && player === 9) {
    //Velha
    document.querySelectorAll("span").forEach(function (item) {
      item.classList.toggle("tableNormal");
      item.classList.toggle("tableVelha");
      sectionPlayer.innerText = "Velhaa! Vocês são muito bom.";
    });
  }
}
function restart() {
  document.querySelectorAll("span").forEach(function (block) {
    block.innerText = "";
    block.addEventListener("click", game);
    block.classList.remove("tableWin");
    block.classList.remove("tableVelha");
    block.classList.add("tableNormal");
  });
  button.innerText = "Começar o jogo";
  player1 = [];
  player2 = [];
  startGame = false;
  button.addEventListener("click", start);
  resultado1 = [];
  resultado2 = [];
  count1 = 0;
  count2 = 0;
  player = 0;
  block = [];
  winner = false;
  sectionPlayer.innerText = "Aguardando o ínicio do game.";
}
//['001100', ''010100'', '100100'] - Cima
//['001010', '010010', '100010'] - Meio
//['001001', '010001', '100001'] - Baixo
//['001001', '010010', '100100'] - Diagonal direita para esquerda
//['001100', '010010', '100001'] - Diagonal esquerda para direita
//['100001', '100010', '100100'] - Vertical direita
//['001001', '001010', '001100'] - Vertical esquerda
//['010001', '010010', '010100'] - Vertical meio
