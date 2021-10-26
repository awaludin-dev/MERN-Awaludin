let nilai = prompt(`Masukkan nilai anda`);

if (nilai < 0 || nilai > 100) {
    alert(`Masukkan nilai dengan benar`);
} else if (nilai > 80) {
    alert(`Nilai anda A`);
} else if (nilai > 70 && nilai <= 80) {
    alert(`Nilai anda B`);
} else if (nilai > 60 && nilai <= 70) {
    alert(`Nilai anda C`);
} else if (nilai > 50 && nilai <= 60) {
    alert(`Nilai anda D`);
} else {
    alert(`Nilai anda E`);
}