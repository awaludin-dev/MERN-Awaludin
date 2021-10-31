var nama=document.getElementsByClassName("nama")[0], outputNama=document.getElementById("nama");
nama.addEventListener("input", function(){
    return nama.value?outputNama.innerText="Perkenalkan namaku "+nama.value:outputNama.innerText="";
});

var umur=document.getElementsByClassName("umur")[0], outputUmur=document.getElementById("umur");
umur.addEventListener("input", function(){
    return umur.value?outputUmur.innerText=". Sekarang aku berumur " + umur.value:outputUmur.innerText="";
});

var tempatLahir=document.getElementsByClassName("tempatLahir")[0], outputTempatLahir=document.getElementById("tempatLahir");
tempatLahir.addEventListener("input", function(){
    return tempatLahir.value?outputTempatLahir.innerText=". Aku lahir di " + tempatLahir.value:outputTempatLahir.innerText="";
});