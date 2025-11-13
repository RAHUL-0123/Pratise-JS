let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");
let result = document.querySelector(".resultMessage");


form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let emailans= emailPattern.test(email.value);
    let passwordans=passPattern.test(password.value);
      
    
    if(!emailans){
         document.querySelector("#emailError").style.display = "block";
    }
    else{
        document.querySelector("#emailError").style.display = "none";
    }
    if(!passwordans){
        document.querySelector("#passError").style.display = "block";
    }
    else{
        document.querySelector("#passError").style.display = "none";
    }
    if (!emailans || !passwordans) {
        result.style.display = "none";
    } else {
        result.style.display = "block";
        result.textContent = "Good to Go!";
    }
})