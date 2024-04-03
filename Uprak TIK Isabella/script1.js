function buatakun(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

if (username=="" || password==""){
    window.alert ("Silahkan masukkan username dan password untuk membuat akun");
}
else{
    window.alert ("Buat akun berhasil! Silahkan Login Kembali");
    window.location="index.html";
}
}
function Clear(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}
