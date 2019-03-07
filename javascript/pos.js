function goBack(){
  window.history.back();
  console.log("funtion connected")
}

function pointEarned(){
  alert("YAY! You earned 100 points!");
}

function submitText(){
  // document.getElementById("forumText").innerHTML += ("\n" + document.getElementById("forumNewText").value) ;
  pointEarned();
  newComment();
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
