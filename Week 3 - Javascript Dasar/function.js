// Membuat angka acak dari 1 - 3
let acak = Math.floor((Math.random() * 3) + 1);
console.log(acak);

for (let i = 1; i <=5; i++) {
    // Membuat input untuk player 1 dan 2
    let player1 = prompt(`Ronde ${i}\nPlayer 1 -> Masukkan angka 1 - 3`);
    let player2 = prompt(`Ronde ${i}\nPlayer 2 -> Masukkan angka 1 - 3`);
    if (player1 < 1 || player2 < 1) {
        alert(`Jangan memasukkan angka kurang dari 1`);
        i--;
        continue;
    } else if (player1 > 3 || player2 > 3) {
        alert(`Jangan memasukkan angka lebih dari 3`);
        i--;
        continue;
    } else {
        let lanjut = confirm(`Apakah anda ingin lanjut?`);
        if (lanjut == FALSE) {
            break;
        } else {
            continue;
        }
    }
}