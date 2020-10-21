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