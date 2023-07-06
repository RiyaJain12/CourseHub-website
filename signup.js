let name2 = document.getElementById("name");
let email2 = document.getElementById("email");
let pass2 = document.getElementById("pass");

name2.onblur = function () {
    if (name2.value == "")
        document.getElementById("name-span").innerText =
            "plz enter first name";
    //   alert("Enter first name");
    else if (!isNaN(name2)) {
        //   alert("name should be only in letters");
        document.getElementById("name-span").innerText =
            "name should be only in letters";
    } else if (name2.value.length < 6) {
        //   alert("Name length should be greater than 5");
        document.getElementById("name-span").innerText =
            "Name length should be greater than 5";
    }
};

email2.onblur = function () {
    if (email2.value == "") {
        document.getElementById("email-span").innerText =
            "please fill your mail";
    } else if (email2.value.indexOf("@") <= 0) {
        document.getElementById("email-span").innerText =
            "position of @ is not right";
    }
};

pass2.onblur = function () {
    if (pass2.value == "") {

        document.getElementById("span-pass").innerText =
            "plz fill your password";
    }
};

function signup() {
    let flag = 0;
    let db = JSON.parse(localStorage.getItem("string"))||[];
    for (i of db) {
        // console.log(i.email1);
        if (i.email1 == email2.value) {
            flag = 1;
            alert("Email Already Registered Please Use Login");
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("conpass").value = "";
            break;
        }
    }

    if (email2.value == "" || name2.value == "" || pass2.value == "") {
        alert("It's necessary to fill correct email, name and password");
    }
    else if (flag == 0) {
        let curr_user;
        let ele = document.getElementsByName("radiobtn");
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                curr_user = ele[i].value;
            }
        }

        let pass = document.getElementById("pass").value;
        let conpass = document.getElementById("conpass").value;

        if (pass == conpass) {
            let temp = JSON.parse(localStorage.getItem("string")) || [];
            let obj = {
                name1: document.getElementById("name").value,
                age1: document.getElementById("age").value,
                email1: document.getElementById("email").value,
                mobile1: document.getElementById("mobile").value,
                pass1: document.getElementById("pass").value,
                user1: curr_user,
                htmlCourse: "",
                cssCourse: "",
                jsCourse: "",
            };

            temp.push(obj);
            localStorage.setItem("string", JSON.stringify(temp));

            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked) {
                    ele[i].checked = false;
                }
            }
            alert("user registered successfully...!!!");
            window.location.href = "Login.html";
        }
        else {
            alert("Password and Confirm Password Should be same");
        }

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("conpass").value = "";
    }
}