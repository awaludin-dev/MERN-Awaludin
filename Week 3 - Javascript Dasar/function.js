// Membuat angka acak dari 1 - 3
// Function declaration
function randomNumber() {
    return Math.floor((Math.random() * 3) + 1);
}

// Function expression
const showResult = function (p1, p2, random) {
    alert(`Nilai yang dicari ${random}
    ------------------
    Player 1 = ${p1}
    Player 2 = ${p2}`);
}

alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!!`);

let poinPlayer1 = 0, poinPlayer2 = 0;

for (let i = 1; i <=5; i++) {
    // Membuat angka random 1 - 3
    let acak = randomNumber();
    // Membuat input untuk player 1 dan 2
    let player1 = prompt(`Ronde ${i}\nPlayer 1 -> Masukkan angka 1 - 3`);
    let player2 = prompt(`Ronde ${i}\nPlayer 2 -> Masukkan angka 1 - 3`);
    if (player1 == player2) {
        alert(`Tebakan tidak boleh sama`);
        i--;
        continue;
    } else if (player1 < 1 || player2 < 1) {
        alert(`Jangan memasukkan angka kurang dari 1`);
        i--;
        continue;
    } else if (player1 > 3 || player2 > 3) {
        alert(`Jangan memasukkan angka lebih dari 3`);
        i--;
        continue;
    } else {
        if (player1 == acak) {
            alert(`Player 1 Win`);
            poinPlayer1++;
        } else if (player2 == acak) {
            alert(`Player 2 Win`);
            poinPlayer2++;
        } else {
            alert(`Hasil seri, karena keduanya salah`);
        }
    }
    showResult(poinPlayer1, poinPlayer2, acak);
}

// Arrow function
const juara = (p1, p2) => {
    if (p1 > p2) {
        alert(`Good Job Player 1`);
    } else if (p2 > p1) {
        alert(`Good Job Player 2`);
    } else {
        alert(`Nice try Player 1 & Player 2`);
    }
}

juara(poinPlayer1, poinPlayer2);