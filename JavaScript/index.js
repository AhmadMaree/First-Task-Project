

var btn = document.getElementsByClassName("login-submit");
var user_name = document.getElementsByClassName("login-username");



    

    btn[0].addEventListener("click" , function () {

        localStorage.setItem("username", user_name[0].value);
       //  window.document.location= '../Main.html' ;
       // window.document.location= '../Main.html'+ '?username='+user_name.value;
    
    });
    


/* anthor way using LocalStorge */ 


