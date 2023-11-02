
  const firebaseConfig = {
    apiKey: "AIzaSyCDObdN-KkGgIdhsDFo3fk-Yd-jrzfH9Ag",
    authDomain: "studentmanagementsystem-b6e47.firebaseapp.com",
    databaseURL: "https://studentmanagementsystem-b6e47-default-rtdb.firebaseio.com",
    projectId: "studentmanagementsystem-b6e47",
    storageBucket: "studentmanagementsystem-b6e47.appspot.com",
    messagingSenderId: "58120171186",
    appId: "1:58120171186:web:37270a27136c24761623ab",
    measurementId: "G-JK5Z1JT1F3"
  };
let name = "kartikjikijai"
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


//reference database
var contactformDB =firebase.database().ref('contactform/'+name);
save();
function save(){
    var newcontactForm = contactformDB.push();
    contactformDB.set({
        name:'kartik',
        rollno:'21153003'        
    });
}
let heading =document.getElementById("hh");
function read(){
  
  try{
  
    let kam=firebase.database().ref('contactform')
    console.log('hello'+kam)
   
    kam.once('value',function(snapshot){
      console.log("ram ji ki jai");
      snapshot.forEach(
        function(ChildSnapshot){
          let nam = ChildSnapshot.val().name;
          heading.innerHTML+=" "+nam;
      }
      )
    });
  }
  
  catch(e){
    console.log(e);
  }
    
}
// window.onload=read;