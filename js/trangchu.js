document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelector('nav');
    var menuChild = document.querySelector('.menu-child');
    var trangthai="duoi480";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 480){
            if(trangthai == "duoi480")
            {
            trangthai="tren480";
             menu.style.width="100%";
            menu.style.backgroundColor="rgb(1,49,1)";
             menu.style.left="0px"; 
             menu.style.textAlign="center";
             menuChild.style.right="770px";
            }
        }
        else{
            if(trangthai=="tren480"){
           menu.style.width="600px";
            menu.style.backgroundColor="transparent";
            menu.style.left="635px";
            trangthai="duoi480";
            menuChild.style.right="360px";
        }
        }
    })
})