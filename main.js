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