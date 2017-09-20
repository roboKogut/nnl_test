//  Это наверняка можно сделать изящнее, но ничего другог я не придумал 

var contentWrappers = document.getElementsByClassName('content__wrapper');
var activeElement = null;

for (i=0; i<contentWrappers.length; i++) {
  contentWrappers[i].childNodes[1].onclick=function(object, number) {
    return function(){
      if (object.classList.contains('content__wrapper_active')) {
        object.style.height='53px';
        object.classList.remove("content__wrapper_active");
        object.getElementsByClassName('content__pointer')[0].classList.remove("content__pointer_rotate");
        activeElement=null;
      } else {
        object.style.height=object.scrollHeight  +'px';
        object.classList.add("content__wrapper_active");
        object.getElementsByClassName('content__pointer')[0].classList.add("content__pointer_rotate");
        if (activeElement!==null) {
          contentWrappers[activeElement].style.height='53px';
          contentWrappers[activeElement].classList.remove("content__wrapper_active");
          contentWrappers[activeElement].getElementsByClassName('content__pointer')[0].classList.remove("content__pointer_rotate");
          
        }
        activeElement=number;
      }
    }
  }(contentWrappers[i], i);
}