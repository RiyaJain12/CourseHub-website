let isVerified;
function login(){
    
    console.log('login');
    let ele = document.getElementsByName("radiobtn");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            curr_user = ele[i].value;
        }
    }
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    sessionStorage.setItem('email', email);
    sessionStorage.setItem('pass', pass);
    user = curr_user;
    let strArr = JSON.parse(localStorage.getItem("string"));
    let flag = 1;
    for (let i of strArr) {
        if (
            i.user1 == "Admin" &&
            i.email1 == email &&
            i.pass1 == pass &&
            i.user1 == user
        ) {
            window.location.href = "Admin.html";
            flag = 0;
            break;
        } else if (
            email == i.email1 &&
            pass == i.pass1 &&
            i.user1 == "Student" &&
            user == i.user1
        ) {
            isVerified=true;
            if(isVerified==true)
            {
                window.location.href = "courses.html";
                flag = 0;
                break;
            }
        }
        // else if(i.user1!=user)
        // {
        //        alert("Invalid Details");
        // }
        // else if (user != i.user1 && user == "Admin") {
        //   alert("Login As a Student");
        //   break;
        // }
        // else if (user != i.user1 && user != "Admin") {
        //   alert("Login As a Admin");
        //   break;
        // }
        // else {
        //   alert("email and pass is incorrect");
        //   break;
        // }
    }

    if (flag == 1) {
        alert("Invalid Details");
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";

    }
    // for (i = 0; i < ele.length; i++) {
    //     if (ele[i].checked) {
    //         ele[i].checked = true;
    //     }
    // }

    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    // if(user1 == "Admin" && email == email1 && pass == pass1 && user==user1)
    // {
    //   window.location.href = "Admin.html";
    // }
    // else if (email == email1 && pass == pass1 && user1=="Student" && user==user1) {

    //   window.location.href = "courses.html";
    // }
    // else if(user!=user1 && user=="Admin"){
    //        alert("Login As a Student");
    // }
    // else if(user!=user1 && user!="Admin"){
    //        alert("Login As a Admin");
    // }
    // else {
    //   alert("email and pass is incorrect")
    // }            document.getElementById('show-user').innerText = i.email1;
}

function funcSignup()
{
    window.location.href="SignUp.html";
}

function funcLogout() {
    isVerified=false;
    window.location.href = "Login.html";
}