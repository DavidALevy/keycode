document.addEventListener("keydown",function(event){
let which=document.getElementById("which");
which.innerHTML=`which:  ${event.which} `;

let code=document.getElementById("code");
code.innerHTML=`keycode:  ${event.code}`;

let key=document.getElementById("key");
key.innerHTML=`key:  ${event.key} `;

}
)