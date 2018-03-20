window.onload = function(){
    //导航栏
    var list = document.getElementById("list");
    var list_li = list.getElementsByTagName("li");
    var bottom = document.getElementById("bottom");
    var newPush = document.getElementById("newPush");
    var cover = document.getElementById("cover");
    //点击新建推送
    newPush.onclick = function(){
        if(list_li[1].className == "click-all-push"){
            list_li[1].className="all-push";
            list_li[1].getElementsByTagName("a")[0].style.color="#666";
        }
        if(list_li[2].className == "click-drafts"){
            list_li[2].className="drafts";
            list_li[2].getElementsByTagName("a")[0].style.color="#666";
        }
        bottom.className="unclick-home";
        cover.className="db";
    }
    //点击全部推送
    list_li[1].onclick = function(){
        list_li[1].className = "click-all-push";
        list_li[1].getElementsByTagName("a")[0].style.color="#40acf3";
        bottom.className="unclick-home";
        if(list_li[2].className == "click-drafts"){
            list_li[2].className="drafts";
            list_li[2].getElementsByTagName("a")[0].style.color="#666";
        }
        
    }
    //点击草稿箱
    list_li[2].onclick = function(){
        list_li[2].className = "click-drafts";
        list_li[2].getElementsByTagName("a")[0].style.color="#40acf3";
        bottom.className="unclick-home";
        if(list_li[1].className == "click-all-push"){
            list_li[1].className="all-push";
            list_li[1].getElementsByTagName("a")[0].style.color="#666";
        }
    }
    //点击zero-one
    bottom.onclick = function(){
        bottom.className="click-home";
        if(list_li[1].className == "click-all-push"){
            list_li[1].className="all-push";
            list_li[1].getElementsByTagName("a")[0].style.color="#666";
        }
        if(list_li[2].className == "click-drafts"){
            list_li[2].className="drafts";
            list_li[2].getElementsByTagName("a")[0].style.color="#666";
        }
    }

}