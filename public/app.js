///SignUP

const url = "http://localhost:5000"
function signup() {

    
    axios({
        method: 'post',
        url: "http://localhost:5000/signup",
        data: {
            userName : document.getElementById("name").value,
            userEmail: document.getElementById("email").value,
            userPassword: document.getElementById("password").value,
            userPhone: document.getElementById("phone").value


        }//, withCredentials: true

    }).then(function (response) {
        console.log(response.data.message);
        alert(response.data.message);
        window.location.href = "login.html"
    })

    .catch(function (error) {
        console.log(error);
        alert(response.message)
    });

    return false;
}

///Login

function login() {

    axios({
        method: 'post',
        url: "http://localhost:5000/login",
        data: {
            email: document.getElementById("login-email").value,
            password: document.getElementById("login-password").value,
        }//, withCredentials: true

    }).then((response) => {
        console.log(response);
        alert(response.data.message)
        window.location.href = "index.html"
    }, (error) => {
        console.log(error);
        alert(error)
    });

    return false;
}


//FORGET STEP-1

function forgot1() {

    axios({
        method: 'post',
        url: "http://localhost:5000/forget-password",
        data: {
            email: document.getElementById("your-email").value,
        }
        // withCredentials: true
    }).then((response) => {
        if (response.data.status === 200) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "forget2.html"
        } else {
            alert(response.data.message)
        }
    }, (error) => {
        console.log(error);
    });

    return false;

}


function forgot2() {
    axios({
        method: 'post',
        url: "http://localhost:5000/forget-password-step-2",
        data: {
            email: document.getElementById("email2").value,
            newPassword: document.getElementById("password2").value,
            otp: document.getElementById("otp").value,
        }
    }).then((response) => {
        
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "login.html"
            
        
    },(error) => {
        console.log(error);
    });
    return false;

}


