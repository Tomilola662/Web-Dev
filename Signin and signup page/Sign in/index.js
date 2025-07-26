const password= document.getElementById("password");

function toggleEye(){
    if(password.getAttribute("type")==="password"){
        password.setAttribute("type", "text");
        document.getElementById("font").style.color="black";
    }

    else{
        password.setAttribute("type","password");
         document.getElementById("font").style.color="white";
    }
}