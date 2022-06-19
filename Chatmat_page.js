var firebaseConfig = {
    apiKey: "AIzaSyC3z7h7rjygmMh2INP8E4Yio7usBFwQyL4",
    authDomain: "chatmat-9f534.firebaseapp.com",
    databaseURL: "https://chatmat-9f534-default-rtdb.firebaseio.com",
    projectId: "chatmat-9f534",
    storageBucket: "chatmat-9f534.appspot.com",
    messagingSenderId: "335739909492",
    appId: "1:335739909492:web:5e8701584bd118ea366821",
    measurementId: "G-HPK9XVSGZ9"
  };
  
   firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
   var room_name=localStorage.getItem("room_name");

   function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
user_name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
u_name=message_data['u_name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+u_name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();


function update_like(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }