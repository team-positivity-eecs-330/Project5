function goBack(){
  window.history.back();
  console.log("funtion connected")
}

function pointEarned(){
  alert("YAY! You earned 100 points!")
}

function submitText(){
  document.getElementById("forumText").innerHTML += ("\n" + document.getElementById("forumNewText").value) ;
  pointEarned();
}
