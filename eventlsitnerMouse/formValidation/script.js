let nm=document.querySelector("#nam");
let form=document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    if(nm.value.length<=2){
        document.querySelector("#hide").style.display="initial";
    }
    else{
         document.querySelector("#hide").style.display="none";
    }
})