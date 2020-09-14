
let loginPage = `
<div class="container-login">
    <form name="login-form" class= "login-form" > 
            
        <span>Account Login</span>
        <input class="login-username" type="text" name="user-login" placeholder="UserName" required>
        <input class ="login-submit" type="submit" name = "btn-login" title="Submit"/>
    </form>
</div>
`;

let secPage = ` 
<header class="header">
    <!-- its just for overviwe later we will fetch data and change it--> 
    <h2 class="username-header">Username</h2>
</header>
<nav class="main-bar" id="main-bar">
   
    
</nav>
<main class ="main-content" id="main-content">
    
</main>
`;

let btn = document.getElementsByClassName("login-submit");

let user_name = null ;

    
(function () {

    let div =  document.createElement("div");
    div.className= "box";
    div.innerHTML= loginPage;
    document.body.appendChild(div);
   

})();


btn[0].addEventListener("click" , function () {

     user_name = document.getElementsByClassName("login-username")[0];

    if(user_name != null ) {
     
    let div = document.createElement("div");
    div.className="main-page";
    div.innerHTML=secPage ;
    document.body.removeChild(document.getElementsByClassName("box")[0]);
    document.body.appendChild(div);
    document.getElementsByClassName("username-header")[0].innerHTML= user_name.value;
    }

    secPage_result();

});
