var listAdd = document.querySelector(".list-add");

var eventObj = {

  addList : function(target){
    if(target.className === "placeholder") {
      target.parentElement.parentElement.classList.remove("non-click");
    } else if(target.className === "icon-close dark-hover") {
      target.parentElement.parentElement.parentElement.classList.add("non-click");
    }
  }

}

listAdd.addEventListener("click",function(event){
  var a = event.target;
  eventObj.addList(a);
});
