var listAdd = document.querySelector(".list-add");

var eventObj = {
  showInputArea : function(event){
    console.log(event.target);
    // event.target.classList.add("hide");

  }
}


listAdd.addEventListener("click,eventObj.showInputArea");
