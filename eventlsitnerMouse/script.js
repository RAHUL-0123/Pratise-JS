let abcd= document.querySelector("#abcd");

abcd.addEventListener("mouseover",function(dets){
    abcd.style.backgroundColor="yellow";
})
abcd.addEventListener("mouseout",function(dets){
    abcd.style.backgroundColor="red";
})