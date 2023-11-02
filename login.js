let select = document.querySelector("#selection");
let student = document.querySelector(".student");
let teacher= document.querySelector(".teacher");
let librarian = document.querySelector(".librarian");
student.style.zIndex=1;
function zindexzero(){
    student.style.zIndex="-10";
    teacher.style.zIndex="-10";
    librarian.style.zIndex="-10";   
}

select.addEventListener('input',()=>{
    console.log("try");
    zindexzero();
    if (select.value=="Student"){
        student.style.zIndex="2";
    }
    else if(select.value=="Teacher"){
        teacher.style.zIndex="2";
    }
    else{
        librarian.style.zIndex="2";
    }
})


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

  firebase.initializeApp(firebaseConfig);


  //student login
