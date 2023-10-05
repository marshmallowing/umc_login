const loginInput3=document.querySelector("#input3");
const loginAlert3=document.querySelector("#fail3");

function emailfunc() {
    var valid_email = /[\w\-\.]+@[\w\-\.]+\.+com/g;

    if(valid_email.test(loginInput3.value)){
        loginAlert3.className=TRUE_CLASS;
        loginAlert3.innerText="올바른 메일 형식입니다!";
        loginInput3.className="success_login";
    }
    else{
        loginAlert3.className=FALSE_CLASS;
        loginAlert3.innerText="올바른 메일 형식이 아닙니다!";
        loginInput3.className="fail_login";
    }
}

loginInput3.addEventListener("keyup", emailfunc);