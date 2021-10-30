let ulang;

while(ulang!=1){
    let nilai = prompt(`Masukkan nilai anda`);
    if (nilai < 0 || nilai > 100) {
        alert(`Masukkan nilai dengan benar`);
        ulang = 0;
    } else if (nilai > 80) {
        alert(`Nilai anda A`);
        ulang = 1;
    } else if (nilai > 70 && nilai <= 80) {
        alert(`Nilai anda B`);
        ulang = 1;
    } else if (nilai > 60 && nilai <= 70) {
        alert(`Nilai anda C`);
        ulang = 1;
    } else if (nilai > 50 && nilai <= 60) {
        alert(`Nilai anda D`);
        ulang = 1;
    } else {
        alert(`Nilai anda E`);
        ulang = 1;
    }
}