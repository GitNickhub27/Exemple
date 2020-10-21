document.addEventListener("DOMContentLoaded", function( ){

 var menuMobile = document.querySelector(".nav-site");
 var hamburger= document.querySelectorAll(".hamburger");

    for(let i=0; i<hamburger.length;i++){

       var hamburgers = hamburger[i];
       hamburgers.addEventListener('click',openMenu);

    }


    function openMenu(evt){
       evt.preventDefault();

       var cible = evt.currentTarget;

       if(cible.classList.contains("open")){

          cible.classList.remove("open");
          menuMobile.classList.remove("open");


       }
       else{
          cible.classList.add("open");
          menuMobile.classList.add("open");
       }
    }



});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oICl7XHJcblxyXG4gdmFyIG1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1zaXRlXCIpO1xyXG4gdmFyIGhhbWJ1cmdlcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oYW1idXJnZXJcIik7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8aGFtYnVyZ2VyLmxlbmd0aDtpKyspe1xyXG5cclxuICAgICAgIHZhciBoYW1idXJnZXJzID0gaGFtYnVyZ2VyW2ldO1xyXG4gICAgICAgaGFtYnVyZ2Vycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsb3Blbk1lbnUpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1lbnUoZXZ0KXtcclxuICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgIHZhciBjaWJsZSA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgIGlmKGNpYmxlLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpe1xyXG5cclxuICAgICAgICAgIGNpYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuXHJcblxyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZXtcclxuICAgICAgICAgIGNpYmxlLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgbWVudU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
