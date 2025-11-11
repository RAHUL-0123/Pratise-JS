// let input=document.querySelector("input");
// input.addEventListener("input",function(dets){
//     if(dets.data!==null){
//         console.log(dets.data);
//     }
// })
// level2
// let sel=document.querySelector("select");
// let h3=document.querySelector("h3");
// sel.addEventListener("change",function(dets){
//     h3.textContent=`${dets.target.value} Device selected`;
// })
// let h1=document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//     if(dets.key===" "){
//         h1.textContent="SPC";
//     }
//     else{
//         h1.textContent=dets.key;
//     }
    
// })
let btn=document.querySelector("#btn");
let fileinp=document.querySelector("#fileinp");
btn.addEventListener("click",function(){
    fileinp.click();
})
