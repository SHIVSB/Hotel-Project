const price = 1000;

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
        document.getElementById("log").innerText = "Logout";
        alert("Login Successful");
    }else{
        document.getElementById("log").innerText = "Login";
        alert("Login Failed");
    }
}
function info(){
    var loge = document.getElementById("log").innerText;

    if(loge == "Logout"){
        document.getElementById("log").innerText = "Login";

    }else{
        document.getElementById('id01').style.display='block'
    }

}

// const persons = document.getElementById('persons').innerText;
const total = document.getElementById('amount');

function update(){
    var persons = document.getElementById('persons').value;
    var today = new Date();
    document.getElementById("stdate").min = today.toISOString().split("T")[0];
    var stdate = document.getElementById('stdate').value;
    var todate = new Date(new Date().getTime() + (24*60*60*1000));
    document.getElementById("endate").min = (todate).toISOString().split("T")[0];
    var endate = document.getElementById('endate').value;
    var totalDays = (new Date(endate).getTime() - new Date(stdate).getTime())/86400000;
    total.value = (price*persons*totalDays);
}


setInterval(update, 1);