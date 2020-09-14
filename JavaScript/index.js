

var btn = document.getElementById("login-submit");
var user_name = document.getElementById("login-username");




document.addEventListener('DOMContentLoaded', function () {
    btn.addEventListener("click" , function () {

        localStorage.setItem("username", user_name.value);
        window.document.location= '../Main.html' ;
       // window.document.location= '../Main.html'+ '?username='+user_name.value;
    
    });
    
});


/* anthor way using LocalStorge */ 


