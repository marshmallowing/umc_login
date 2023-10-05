const loginInput1=document.querySelector("#input1");
const loginAlert1=document.querySelector("#fail1");

const FALSE_CLASS="false";
const TRUE_CLASS="true";

function namefunc() {
    if(loginInput1.value==""){
        loginAlert1.className=FALSE_CLASS;
        loginAlert1.innerText="필수 입력 항목입니다!";
        loginInput1.className="fail_login";
    }
    else{
        loginAlert1.className=TRUE_CLASS;
        loginAlert1.innerText="멋진 이름이네요!";
        loginInput1.className="success_login";
    }
}

loginInput1.addEventListener("keyup", namefunc);