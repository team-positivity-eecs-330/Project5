function goBack(){
  window.history.back();
  console.log("funtion connected")
}

function pointEarned(){
  alert("YAY! You earned 100 points!")
}

function submitText(){
  // document.getElementById("forumText").innerHTML += ("\n" + document.getElementById("forumNewText").value) ;
  pointEarned();
  newComment();
  document.getElementById("forumNewText").value = '';
}

function newComment(){
  var commentDiv = document.createElement("div");
  commentDiv.id = "forumText"
  var userCont = document.createTextNode("come on");
  commentDiv.appendChild(userCont);
  var element = document.getElementById("forumContain");
  console.log(typeof(element))
  console.log("YO")
  element.appendChild(commentDiv);
}
