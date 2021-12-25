class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header class="sticky-header navbar sticky-top" style="background-color: rosybrown">
            <div class=""><a href="./index.html" > <img class="loglogo" src="assests/images/logo.png" alt="logo" width="60" height="60"></a></div>
            <div class="navbar-right"><button id="log" onclick="info()" type="button" class="btn btn-light btn-sm">LOGIN</button></div>
            </header>
 <div id="id01" class="modal" style="width: 500px; margin-left: 34%; border-radius: 7px">

    <form class="modal-content animate" onsubmit="return false">
        <div style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold ">
            <span style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold " onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <p>Please Login</p>
        </div>
        <div class="horizontal-line"></div>
        <div class="container">
            <label style="margin-right: 40px"><b>Username: <input id="usname" style="margin-left: 30px; width: 200px" class="inp" type="text" placeholder="Enter Username" required></b></label>

            <br>
            <label style="margin-right: 40px"><b>Password:</b><input id="pswd" style="margin-left:36px;width: 200px" class="inp" type="password" placeholder="Enter Password" required></label>

            <div class="horizontal-line"></div>

            <button id="sbmt" class="buttn" onclick="getInfo()">Login</button>
        </div>

    </form>
</div>
<div id="id02" class="modal" style="width: 500px; margin-left: 34%; border-radius: 7px">

    <form class="modal-content animate" action="/" method="post">
        <div style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold ">
            <span style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold " onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
            <p>Get in touch</p>

        </div>
        <div class="horizontal-line"></div>
        <div class="container2" >

            <p>Thank you for reaching out!!!</p>
            <p>Please enter your email and we will get back to you</p>
            <label style="margin-right: 40px"><b>Email:</b><input style="margin-left:10px;width: 200px" class="inp" type="password" placeholder="Enter your email id" required></label>

            <div class="horizontal-line"></div>

            <button class="buttn" style="margin-left: 380px" type="submit">Submit</button>
        </div>

    </form>
</div>
        `
    }
}
class MyHeader2 extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header class="sticky-header navbar sticky-top" style="background-color: rosybrown">
            <div class=""><img class="loglogo" src="assests/images/logo.png" alt="logo" width="60" height="60"></div>
            <div class="navbar-right"><button id="log" onclick="info()" type="button" class="btn btn-light btn-sm">LOGIN</button></div>
            </header>
             <div id="id01" class="modal" style="width: 500px; margin-left: 34%; border-radius: 7px">

    <form class="modal-content animate" onsubmit="return false">
        <div style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold ">
            <span style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold " onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <p>Please Login</p>
        </div>
        <div class="horizontal-line"></div>
        <div class="container">
            <label style="margin-right: 40px"><b>Username: <input id="usname" style="margin-left: 30px; width: 200px" class="inp" type="text" placeholder="Enter Username" required></b></label>

            <br>
            <label style="margin-right: 40px"><b>Password:</b><input id="pswd" style="margin-left:36px;width: 200px" class="inp" type="password" placeholder="Enter Password" required></label>

            <div class="horizontal-line"></div>

            <button id="sbmt" class="buttn" onclick="getInfo()">Login</button>
        </div>

    </form>
</div>
<div id="id02" class="modal" style="width: 500px; margin-left: 34%; border-radius: 7px">

    <form class="modal-content animate" action="/" method="post">
        <div style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold ">
            <span style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold " onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
            <p>Get in touch</p>

        </div>
        <div class="horizontal-line"></div>
        <div class="container2" >

            <p>Thank you for reaching out!!!</p>
            <p>Please enter your email and we will get back to you</p>
            <label style="margin-right: 40px"><b>Email:</b><input style="margin-left:10px;width: 200px" class="inp" type="password" placeholder="Enter your email id" required></label>

            <div class="horizontal-line"></div>

            <button class="buttn" style="margin-left: 380px"  type="submit">Submit</button>
        </div>

    </form>
</div>

        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-header2', MyHeader2);