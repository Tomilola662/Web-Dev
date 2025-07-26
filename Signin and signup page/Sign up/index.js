const passwordOne = document.getElementById("p1")
const passwordTwo = document.getElementById("p2")
const iconOne =  document.getElementsByClassName("font1")
const iconTwo =  document.getElementsByClassName("font2")


function toggleEye1(){
    if(passwordOne.getAttribute("type") === "password"){
        passwordOne.setAttribute("type", "text");
       iconOne.style.color = "black" 
    }
    else{
        passwordOne.setAttribute("type", "password")
        eyeIcon.style.color = "white"
    }
}


function toggleEye2(){
    if(passwordTwo.getAttribute("type") === "password"){
        passwordTwo.setAttribute("type", "text");
       iconTwo.style.color = "black" 
    }
    else{
        passwordTwo.setAttribute("type", "password")
        iconTwo.style.color = "white"
    }
}