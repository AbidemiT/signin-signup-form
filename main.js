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
=======================================
   Sign In Form Validation starts here
=======================================
*/

let username = document.querySelector("#username");
let usernamePassword = document.querySelector("#usernamePassword");
let userSignIn = document.querySelector(".signIn");
let usernameWarning = document.querySelector('.username-warning');
let passwordWarning = document.querySelector('.password-warning');
let check = document.querySelector("#check");

// Show Password Validation
check.addEventListener('click', () => {
    if (usernamePassword.type == 'password') {
        usernamePassword.type = 'text';
    } else {
        usernamePassword.type = 'password';
    } 
});

let userValidate = (e) => {
    e.preventDefault();
    if (username.value.length >= 1 ) {
        if ( usernamePassword.value.length > 6 ) {
            alert('Validation In progress...');
        } else {
            usernamePassword.style.border = "1px red solid";
            passwordWarning.style.display = "block";
            usernamePassword.addEventListener('keydown', () => {
                usernamePassword.style.border = "none"; 
                passwordWarning.style.display = "none";
            }); 
        }     
    } else {
        username.style.border = "1px red solid";
        usernameWarning.style.display = "block";
        username.addEventListener("keydown", () => {
            username.style.border = "none";
            usernameWarning.style.display = "none";
        });
    }
     
}

userSignIn.addEventListener('click', userValidate);

/* 
=======================================
   Sign Up Form Validation starts here
=======================================
*/

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let usernameSignUp = document.querySelector('#usernameSignUp');
let passwordSignUp = document.querySelector('#passwordSignUp');
let passwordSignUpWarning = document.querySelector('.password-signup-warning');
let usernameSignUpWarning = document.querySelector('.username-signup-warning');
let lastNameWarning = document.querySelector('.lastname-warning');
let firstNameWarning = document.querySelector('.firstname-warning');
let userSignUp = document.querySelector('#userSignUp');
let checkSignUp = document.querySelector('#check-signup')

checkSignUp.addEventListener('click', () => {
    if (passwordSignUp.type == 'password') {
        passwordSignUp.type = 'text';
    } else {
        passwordSignUp.type = 'password';
    } 
});

let userSignUpValidate = (e) => {
    e.preventDefault();

    if (firstName.value.length >= 1) {
        if (lastName.value.length >= 1) {
            if (usernameSignUp.value.length >= 1) {
                if (passwordSignUp.value.length > 6) {
                    alert(`Welcome ${firstName.value} ${lastName.value} to our World`);
                } else {
                    passwordSignUp.style.border = "1px red solid";
                    passwordSignUpWarning.style.display = "block";
                    passwordSignUp.addEventListener('keydown', () => {
                        passwordSignUp.style.border = "none"; 
                        passwordSignUpWarning.style.display = "none";
                    });
                }
            } else {
                usernameSignUp.style.border = "1px red solid";
                usernameSignUpWarning.style.display = "block";
                usernameSignUp.addEventListener("keydown", () => {
                    usernameSignUp.style.border = "none";
                    usernameSignUpWarning.style.display = "none";
                });
            }
        } else {
            lastName.style.border = "1px red solid";
                lastNameWarning.style.display = "block";
                lastName.addEventListener("keydown", () => {
                    lastName.style.border = "none";
                    lastNameWarning.style.display = "none";
                });
        }
    } else {
        firstName.style.border = "1px red solid";
                firstNameWarning.style.display = "block";
                firstName.addEventListener("keydown", () => {
                    firstName.style.border = "none";
                    firstNameWarning.style.display = "none";
                });
    }
}

userSignUp.addEventListener('click', userSignUpValidate);