let link=document.getElementById("link")
let userdata=document.getElementById("user")
if(localStorage.getItem("username")){
    link.remove()
    userdata.innerHTML=localStorage.getItem("username")
}