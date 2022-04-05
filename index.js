let myFormEl = document.getElementById("myForm");
myFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});

let nameEl = document.getElementById("name");
let nameErrorMsgEl = document.getElementById("nameErrorMsg");
nameEl.addEventListener("blur", function(event){
    console.log("Blur event triggered.");
    if (event.target.value === "") {
        // show warning message
        nameErrorMsgEl.textContent = "Required*";
    }else{
        nameErrorMsgEl.textContent = "";
    }
});

let emailEl = document.getElementById("email");
let emailErrorMsgEl = document.getElementById("emailErrorMsg");
emailEl.addEventListener("blur", function(event){
    console.log("Blur event triggered.");
    if (event.target.value === "") {
        // show warning message
        emailErrorMsgEl.textContent = "Required*";
    }else{
        emailErrorMsgEl.textContent = "";
    }
});