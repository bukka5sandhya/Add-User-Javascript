let addUserFormEle = document.getElementById("addUserForm");
let nameEle = document.getElementById("name");
let emailEle = document.getElementById("email");
let nameErrMsgEle = document.getElementById("nameErrMsg");
let emailErrMsgEle = document.getElementById("emailErrMsg");

nameEle.addEventListener("blur",function(event){
    if(nameEle.value === ""){
        nameErrMsgEle.textContent = "Required*";
    }else{
        nameErrMsgEle.textContent = ""
    }
  
});

emailEle.addEventListener("blur",function(event){
    if(emailEle.value === ""){
        emailErrMsgEle.textContent = "Required*";

    }else{
        emailErrMsgEle.textContent = "";
    }
});

addUserFormEle.addEventListener("submit",function(event){
    event.preventDefault();
})

