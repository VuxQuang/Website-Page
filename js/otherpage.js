document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelector('.head .menu-left');
    console.log(menu);
    var trangthai="duoi200";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 100){
            if(trangthai == "duoi200")
            {
            trangthai="tren200";
             menu.style.width="100%";
            menu.style.backgroundColor="rgb(1,49,1)";
             menu.style.left="0px"; 
             menu.style.textAlign="center";
             menu.style.height="90px";
            }
        }
        else{
            if(trangthai=="tren200"){
           menu.style.width="600px";
            menu.style.backgroundColor="transparent";
            menu.style.left="180px";
            trangthai="duoi200";
        }
        }
    })
})