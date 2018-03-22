"use strict";
window.onload = function () {
    var main = document.getElementById("main");
    var mainInput = main.getElementsByTagName("input");
    var btn = main.getElementsByTagName("button");
    var inputState = function (a,m){
        mainInput[a].onfocus = function () {
            mainInput[a].setAttribute("class","input-focus");
            // alert(a.value);
            if(mainInput[a].value == m){
                mainInput[a].value = "" ;
                mainInput[a].style.color = "#444";
            }
            if(a == 1){
                mainInput[1].type = "password";
            }
        }
        mainInput[a].onblur = function () {
            mainInput[a].setAttribute("class","input-blur");
            if(mainInput[a].value == ""){
                mainInput[a].value = m;
                mainInput[a].style.color = "#a6a6a6";
                if(a == 1){
                    mainInput[1].type = "text";
                }
            }
        }
    }

    inputState(0,"请输入您的账号");
    inputState(1,"请输入您的密码");

    document.onkeydown = function (event) {
        if(event.keyCode == 13){
            btn[0].focus();
            btn[0].click();
        }
    }
}