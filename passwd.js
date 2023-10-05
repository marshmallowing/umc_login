const loginInput4=document.querySelector("#input4");
const loginAlert4=document.querySelector("#fail4");
const loginInput5=document.querySelector("#input5");
const loginAlert5=document.querySelector("#fail5");

var passwd="";

loginInput4.onkeyup = function() {
    var valid_pwd = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_+=`~/|<>():{}])/;

    if(valid_pwd.test(loginInput4.value)){
        loginAlert4.className=TRUE_CLASS;
        loginAlert4.innerText="안전한 비밀번호입니다!";
        passwd=loginInput4.value;
    }
    else{
        loginAlert4.className=FALSE_CLASS;
        loginAlert4.innerText="영어+숫자+특수문자를 조합하여 작성해주세요.";
    }
}

function passfunc() {
    if(loginInput5.value==passwd){
        loginAlert5.className=TRUE_CLASS;
        loginAlert5.innerText="비밀번호가 일치합니다.";
        loginInput5.className="success_login";
    }
    else if(loginInput5.value==loginInput4.value){
        loginAlert5.className=FALSE_CLASS;
        loginAlert5.innerText="비밀번호를 다시 작성헤주세요.";
        loginInput5.className="fail_login";
    }
    else{
        loginAlert5.className=FALSE_CLASS;
        loginAlert5.innerText="비밀번호가 일치하지 않습니다.";
        loginInput5.className="fail_login";
    }
}

loginInput5.addEventListener("keyup", passfunc);