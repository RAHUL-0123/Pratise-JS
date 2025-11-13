let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let emailans= emailPattern.test(email.value);
    let passwordans=passPattern.test(password.value);

     document.querySelector("#emailError").style.display = "none";
      document.querySelector("#passError").style.display = "none";
    
    if(!emailans){
         document.querySelector("#emailError").style.display = "block";;
        
    }
    if(!passwordans){
        document.querySelector("#passError").style.display = "block";;
        
    }
})