window.onload = function () {
    document.getElementById('admin-user').innerHTML=sessionStorage.getItem('email');
    let strArr = JSON.parse(localStorage.getItem("string"));
    console.log(strArr);
    let table = document.getElementById('table-id');
    // table 
    table.innerHTML = `
    <tr id="table-row">
    <th>
        user name
    </th>
    <th>
        User Mail-id
    </th>
    <th>
        HTML Course
    </th>
    <th>
        CSS Course
    </th>
    <th>
        JS Course
    </th>
</tr>
    `;
    for (let i of strArr) {
        if (i.user1 == "Student") {
            let tr = table.insertRow(table.length);
            let td1 = tr.insertCell(0);
            let td2 = tr.insertCell(1);
            let td3 = tr.insertCell(2);
            let td4 = tr.insertCell(3);
            let td5 = tr.insertCell(4);
            if (i.htmlCourse === '0' || i.htmlCourse == "") {
                td3.innerHTML = "<Button class='add' onclick='funcHTML(this)' style='margin-left: 30px; margin-right: 30px' >Add</Button>"
            }

            if (i.htmlCourse === '1') {
                td3.innerHTML += "<Button id='rmv' onclick='funcRemoveHtml(this)' style='margin-left: 30px; margin-right: 30px' >Remove</Button>" ;
            }

            td1.innerHTML = i.name1;
            td2.innerHTML = i.email1;

            if (i.cssCourse == "0" || i.cssCourse == "") {
                td4.innerHTML = "<Button class='add1' onclick='funcCSS(this)' style='margin-left: 30px; margin-right: 30px'>Add</Button>";
            }
            if (i.cssCourse == "1") {
                td4.innerHTML = "<Button class='rmv1' onclick='funcRemoveCss(this)' style='margin-left: 30px; margin-right: 30px'>Remove</Button>";
            }

            {
                td5.innerHTML = "<Button  onclick='funcJS(this)' style='margin-left: 30px; margin-right: 30px' >Add</Button>"
            }

            if (i.jsCourse == "1") {
                td5.innerHTML = "<Button onclick='funcRemoveJs(this)' style='margin-left: 30px; margin-right: 30px' >Remove</Button>";
            }
        }
    }
}

function funcHTML(z) {
    let nn = z.parentElement.parentElement.childNodes[0].innerHTML;
    let ee = z.parentElement.parentElement.childNodes[1].innerHTML;
    let strArr = JSON.parse(localStorage.getItem("string"));

    for (let i of strArr) {
        if (i.name1 == nn && i.email1 == ee) {
            i.htmlCourse = "1"
        }
    }
    localStorage.setItem("string", JSON.stringify(strArr));
    window.onload();
}

function funcCSS(z) {
    console.log(z);
    let nn = z.parentElement.parentElement.childNodes[0].innerHTML;
    let ee = z.parentElement.parentElement.childNodes[1].innerHTML;

    let strArr = JSON.parse(localStorage.getItem("string"));
    for (let i of strArr) {
        if (i.name1 == nn && i.email1 == ee) {
            i.cssCourse = "1";
        }
    }
    localStorage.setItem("string", JSON.stringify(strArr));
    window.onload();
}

function funcJS(z) {
    let nn = z.parentElement.parentElement.childNodes[0].innerHTML;
    let ee = z.parentElement.parentElement.childNodes[1].innerHTML;
    let strArr = JSON.parse(localStorage.getItem("string"));
    for (let i of strArr) {
        if (i.name1 == nn && i.email1 == ee) {
            i.jsCourse = "1";
            console.log(localStorage.getItem(i.jsCourse));
        }
    }
    localStorage.setItem("string", JSON.stringify(strArr));
    window.onload();
}

function funcRemoveHtml(z) {
    let nn = z.parentElement.parentElement.childNodes[0].innerHTML;
    let ee = z.parentElement.parentElement.childNodes[1].innerHTML;
    let strArr = JSON.parse(localStorage.getItem("string"));

    for (let i of strArr) {
        if (i.name1 == nn && i.email1 == ee) {
            i.htmlCourse = "0";
        }
    }
    localStorage.setItem("string", JSON.stringify(strArr));
    window.onload();
}

function funcRemoveCss(z) {
    let nn = z.parentElement.parentElement.childNodes[0].innerHTML;
    let ee = z.parentElement.parentElement.childNodes[1].innerHTML;
    let strArr = JSON.parse(localStorage.getItem("string"));
    for (let i of strArr) {
        if (i.name1 == nn && i.email1 == ee) {
            i.cssCourse = "0";
        }
    }
    localStorage.setItem("string", JSON.stringify(strArr));
    window.onload();
}

function funcRemoveJs(z) {
    let nn = z.parentElement.parentElement.childNodes[0].innerHTML;
    let ee = z.parentElement.parentElement.childNodes[1].innerHTML;
    let strArr = JSON.parse(localStorage.getItem("string"));
    for (let i of strArr) {
        if (i.name1 == nn && i.email1 == ee) {
            i.jsCourse = "0";
            console.log(localStorage.getItem(i.jsCourse));
        }
    }
    localStorage.setItem("string", JSON.stringify(strArr));
    window.onload();
}

function funcLogout() {
    window.location.href = "Login.html";
}
