
    // Get the modal
    var modal = document.getElementById('id01');
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
}

    $("#sbmt").click(function() {
        alert("The Form has been Submitted.");
    });

    function getInfo(){
    var name = document.getElementById("usname").value;
    var password = document.getElementById("pswd").value;

    if(name == "admin" && password == "admin"){
    alert("Login Successful");
}else{
    alert("Login Failed");
}
}

    var modal = document.getElementById('id02');
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
}
    const vm = document.getElementById("vmbtn");
    const targetDiv2 = document.getElementById("img2");
    const btn2 = document.getElementById("tog");
    btn2.onclick = function() {
        if (targetDiv2.style.display !== "none") {
            targetDiv2.style.display = "none";
            vm.style.marginTop = "250px";
        } else {
            targetDiv2.style.display = "block";
            vm.style.marginTop = "500px";
        }
    };


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
