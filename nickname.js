const loginInput2=document.querySelector("#input2");
const loginAlert2=document.querySelector("#fail2");

function nickfunc() {
    const nickname=loginInput2.value;

    if(nickname.length<2 || nickname.length>5){
        loginAlert2.className=FALSE_CLASS;
        loginAlert2.innerText="닉네임은 2~5글자로 구성해주세요!";
        loginInput2.className="fail_login";
    }
    else{
        loginAlert2.className=TRUE_CLASS;
        loginAlert2.innerText="멋진 닉네임이군요!";
        loginInput2.className="success_login";
    }
}

loginInput2.addEventListener("keyup", nickfunc);