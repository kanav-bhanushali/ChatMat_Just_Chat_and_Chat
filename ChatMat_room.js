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
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


var user_name=localStorage.getItem("user_name");
document.getElementById("User_Name").innerHTML="Welcome"+user_name;


function Add_Room(){
    room_name=document.getElementById("room_name").value;  
    firebase.database().ref("/").child(room_name).update({
          });
 
      localStorage.setItem("room_name",room_name);
      
      window.location="ChatMat_page.html";
 }
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       console.log("Room name-"+room_name);
       row="<div clas='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_Names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
 });});}
 getData();
   
 
 function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="ChatMat_page.html";
 }