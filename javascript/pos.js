var popup_viz = false;
var info_viz = false;
var overlay_viz = false;

function goBack(){
  window.history.back();
  console.log("funtion connected")
}


function toggle_viz(){
  popup_viz = !popup_viz;
  var toggle = "hidden"
  if(popup_viz){
    toggle = "visible"
  }

  document.getElementById("commentPoints").style.visibility = toggle;
  document.getElementById("overlay").style.visibility = toggle;
}

function toggle_info_viz(){
  info_viz = !info_viz;
  var toggle = "hidden"
  if(info_viz){
    toggle = "visible"
  }
  document.getElementById("badgeInfo").style.visibility = toggle;
  document.getElementById("overlay").style.visibility = toggle;
}

function toggleOverlay(){
  if (popup_viz){
    popup_viz = !popup_viz;
    document.getElementById("commentPoints").style.visibility = "hidden";

  }
  if (info_viz){
    info_viz = !info_viz;
    document.getElementById("badgeInfo").style.visibility = "hidden";
  }
  overlay_viz = !overlay_viz;
  document.getElementById("overlay").style.visibility = "hidden";

}

function submitText(){
  // document.getElementById("forumText").innerHTML += ("\n" + document.getElementById("forumNewText").value) ;
  if(document.getElementById("forumNewText").value){
      newComment();
      toggle_viz();
  }
  else {
    alert("Please Enter Text")
  }
  document.getElementById("forumNewText").value = '';
}

function newComment(){
  var newDate = new Date();
  var datetime = "  (" + newDate.today() + " - " + newDate.timeNow() + ")";

  var commentDiv = document.createElement("div");
  commentDiv.id = "forumText"
  commentDiv.innerHTML = "<b>Me</b>:" + datetime + "<br>" + document.getElementById("forumNewText").value;
  document.getElementById("forumContain").appendChild(commentDiv);
}

// For todays date;
Date.prototype.today = function () {
  return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
   return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}
