const name = document.getElementById('name');
document.getElementById('namep').innerText = name.innerText;

// Get the modal
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getInfo(){
    var name = document.getElementById("usname").value;
    var password = document.getElementById("pswd").value;

    if(name == "admin" && password == "admin"){
        document.getElementById("paynow").style.background = "green";
        document.getElementById("log").innerText = "Logout";
        alert("Login Successful");
    }else{
        document.getElementById("paynow").style.background = "mediumseagreen";
        document.getElementById("log").innerText = "Login";
        alert("Login Failed");
    }
}
function info(){
    var loge = document.getElementById("log").innerText;

    if(loge == "Logout"){
        document.getElementById("log").innerText = "Login";
        document.getElementById("paynow").style.background = "mediumseagreen";

    }else{
        document.getElementById('id01').style.display='block'
    }

}
