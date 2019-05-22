let btnSignIn = document.querySelector(".btn-sign-in");
let btnSignUp = document.querySelector(".btn-sign-up");
let signIn = document.querySelector(".sign-in");
let signUp = document.querySelector(".sign-up");
let signInOverlay = document.querySelector(".sign-in-overlay");
let signUpOverlay = document.querySelector(".sign-up-overlay");

btnSignIn.addEventListener("click", () => {
    signInOverlay.classList.toggle("block");
    signUpOverlay.classList.toggle("block");
    signIn.classList.toggle("block");
    signUp.classList.toggle("block");
});
btnSignUp.addEventListener("click", () => {
    signUpOverlay.classList.toggle("block");
    signInOverlay.classList.toggle("block");
    signIn.classList.toggle("block");
    signUp.classList.toggle("block");
});

/* 
===================================
    Form Validation starts here
===================================
*/

let username = document.querySelector("#username");
let usernamePassword = document.querySelector("#usernamePassword");
let userSignIn = document.querySelector(".signIn");
let usernameWarning = document.querySelector('.username-warning');
let passwordWarning = document.querySelector('.password-warning');

let userValidate = (e) => {
    e.preventDefault();
    if (username.value.length >= 1 ) {
        if ( usernamePassword.value.length > 6 ) {
            alert('Validation In progress...');
        } else {
            usernamePassword.style.border = "2px red solid";
            passwordWarning.style.display = "block";
            usernamePassword.addEventListener('keydown', () => {
                usernamePassword.style.border = "none"; 
                passwordWarning.style.display = "none";
            }); 
        }     
    } else {
        username.style.border = "2px red solid";
        usernameWarning.style.display = "block";
        username.addEventListener("keydown", () => {
            username.style.border = "none";
            usernameWarning.style.display = "none";
        });
    }
     
}

userSignIn.addEventListener('click', userValidate);
