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



// student details
  let name_s = document.querySelector("#name_s");
  let email_s= document.querySelector("#email_s");
  let studentno_s= document.querySelector("#stno_s");
  let mobile_s= document.querySelector("#phno_s");
  let password_s= document.querySelector("#password_s");
  let button_s=document.querySelector(".studentBtn");

  button_s.addEventListener('click',()=>{
    var studentDB =firebase.database().ref('student/'+studentno_s.value);
    studentDB.set({
        name:name_s.value,
        email:email_s.value,
        studentNo:studentno_s.value,
        mobile:mobile_s.value,
        password:password_s.value
    })
  });

  //teacher details
  let name_t = document.querySelector("#name_t");
  let email_t= document.querySelector("#email_t");
  let teacherid_t= document.querySelector("#thid_t");
  let mobile_t= document.querySelector("#phno_t");
  let password_t= document.querySelector("#password_t");
  let button_t=document.querySelector(".teacherBtn");

  button_t.addEventListener('click',()=>{
    var teacherDB =firebase.database().ref('teacher/'+teacherid_t.value);
    teacherDB.set({
        name:name_t.value,
        email:email_t.value,
        teacherNo:teacherid_t.value,
        mobile:mobile_t.value,
        password:password_t.value
    })
  });

  //librarian details
  let name_l = document.querySelector("#name_l");
  let email_l= document.querySelector("#email_l");
  let librarianid_l= document.querySelector("#libid_l");
  let mobile_l= document.querySelector("#phno_l");
  let password_l= document.querySelector("#password_l");
  let button_l=document.querySelector(".librarianBtn");

  button_l.addEventListener('click',()=>{
    var librarianDB =firebase.database().ref('librarian/'+librarianid_l.value);
    librarianDB.set({
        name:name_l.value,
        email:email_l.value,
        LibrarianNo:librarianid_l.value,
        mobile:mobile_l.value,
        password:password_l.value
    })
  });