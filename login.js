const loginForm=document.querySelector("#login");
const button=document.querySelector("#btn");
const popup=document.querySelector(".success");

var class1=loginInput1.className;
var class2=loginInput2.className;
var class3=loginInput3.className;
var class5=loginInput5.className;

function onLogin(event) {
    if((class1==class2)&&(class2==class3)&&(class3==class5)&&(class5=="success_login")){
        alert("성공!");
    }
    else{
        button.disabled=true;
    }
}

button.addEventListener("click", onLogin);