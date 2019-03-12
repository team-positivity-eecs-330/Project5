var popup_viz = false;
var info_viz = false;
var overlay_viz = false;
var clickedLink = '';

function goBack(){
  window.history.back();
}

function linkClicked(linkVal){
  clickedLink = linkVal;
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

function toggleOverlay(linkVer){
  if (popup_viz){
    popup_viz = !popup_viz;
    document.getElementById("commentPoints").style.visibility = "hidden";

  }
  if (info_viz){
    info_viz = !info_viz;
    document.getElementById("badgeInfo").style.visibility = "hidden";
  }
  overlay_viz = !overlay_viz;
  if(clickedLink == "animal"){
    window.open('https://www.instagram.com/aniimalscute/?hl=en', '_blank')
  }
  else if (clickedLink == "music") {
    window.open('https://open.spotify.com/playlist/37i9dQZF1DX5Ufz5ldo0J4', '_blank')
  }
  else if(clickedLink == "meditation"){
    window.open('https://www.youtube.com/watch?v=0CYm6Gj_Qmw', '_blank')
  }
  clickedLink = '';
  document.getElementById("overlay").style.visibility = "hidden";


}

function submitText(){
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
