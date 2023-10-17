document.addEventListener("click", documentClick);

function documentClick(event){
   const targetItem = event.target;
   if(targetItem.closest(".icon__menu")){
      document.documentElement.classList.toggle("menu-open");
   }
}