let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer e871440ab2fda4b74be9e2b06c1ead6078010c0648ba96b09a9bf339ec6cb46f"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        
        // if (jsonData.data[0].message === "has already been taken") {
        //     emailErrorMsgEl.textContent = "Email Alredy Exists!!"
        // }
        console.log(jsonData);
    })
}

let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(formData);
});

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
    console.log(formData);
});

let genderFealeEl = document.getElementById("genderFemale");
genderFealeEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
    console.log(formData);
});

let nameEl = document.getElementById("name");
let nameErrorMsgEl = document.getElementById("nameErrorMsg");
nameEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        // show warning message
        nameErrorMsgEl.textContent = "Required*";
    }else{
        nameErrorMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

let emailEl = document.getElementById("email");
let emailErrorMsgEl = document.getElementById("emailErrorMsg");
emailEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        // show warning message
        emailErrorMsgEl.textContent = "Required*";
    }else{
        emailErrorMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});


let myFormEl = document.getElementById("myForm");
myFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    submitFormData(formData);
});
