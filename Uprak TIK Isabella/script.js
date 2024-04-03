function Verifikasi(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if (username=="admin" && password=="admin"){
        window.alert ("Login berhasil");
        window.location="home.html";
    }
    else if (username=="" || password==""){
        window.alert ("masukkan password dan username");
    }
    else{
        window.alert ("Login gagal");
    }
}
    function Clear(){
        document.getElementById("username").value="";
        document.getElementById("password").value="";
    }

    function Signup(){
        window.location="index1.html";
    }