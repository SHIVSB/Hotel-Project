class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="sticky-footer navbar  fixed-bottom" style="background-color: rosybrown; color: black; height: 60px" >
            <button style="color:black;float:left;text-decoration-line: none ;margin-left: 2%;margin-top: 5px ;padding-top: 0.5%;" onclick="document.getElementById('id02').style.display='block'" type="button" class="btn btn-info btn-sm">Contact Us</button><br>
            <div class="eco" style="padding-bottom: 5px;margin-left: 0%; margin-right: 18%">&copy; 2020 ROOM SEARCH PVT.LTD.</div>
            <div class="navbar-right" style="float: right; margin-right: 2%">
                <a href="https://www.facebook.com/"> <img src="assests/images/facebook.png" height="20" width="20"></a>
                <a href="https://www.instagram.com/"> <img src="assests/images/instagram.png" height="20" width="20"></a>
                <a href="https://www.twitter.com/"><img src="assests/images/twitter.png" height="20" width="20"></a><br>
            </div>
    </footer>
    <div id="id01" class="modal" style="width: 500px; margin-left: 34%; border-radius: 7px">

    <form class="modal-content animate" action="/" method="post">
        <div style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold ">
            <span style="margin-top: 20px; margin-left: 12px; color: black; font-weight: bold " onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <p>Please Login</p>
        </div>
        <div class="horizontal-line"></div>
        <div class="container">
            <label style="margin-right: 40px"><b>Username: <input style="margin-left: 30px; width: 200px" class="inp" type="text" placeholder="Enter Username" required></b></label>


            <label style="margin-right: 40px"><b>Password:</b><input style="margin-left:36px;width: 200px" class="inp" type="password" placeholder="Enter Password" required></label>

            <div class="horizontal-line"></div>

            <button class="buttn" type="submit">Login</button>
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

customElements.define('my-footer',MyFooter);