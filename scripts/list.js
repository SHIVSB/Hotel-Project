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

const first = document.getElementById('toggle1');
const second = document.getElementById('toggle2');

first.addEventListener('click', () => {
  first.style.backgroundColor = 'dodgerblue';
  second.style.backgroundColor = 'white';
});

second.addEventListener('click', () => {
  second.style.backgroundColor = 'dodgerblue';
  first.style.backgroundColor = 'white';
});


const targetDiv1 = document.getElementById("third");
const targetDiv2 = document.getElementById("fourth");

const btn1 = document.getElementById("toggle1");
btn1.onclick = function() {
    if (targetDiv1.style.display !== "none") {
        targetDiv1.style.display = "none";
        targetDiv2.style.display = "block";
    } else {
        targetDiv2.style.display = "block";
    }

};

const btn2 = document.getElementById("toggle2");
btn2.onclick = function() {
    if (targetDiv2.style.display !== "none") {
        targetDiv2.style.display = "none";
        targetDiv1.style.display = "block";
    } else {
        targetDiv1.style.display = "block";
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("toggle1").click();
});


