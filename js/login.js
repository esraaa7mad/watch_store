let username=document.getElementById("username")
let password=document.getElementById("password")
let signbutton=document.getElementById("sign-in")
let getuser=localStorage.getItem('username')
let getpass=localStorage.getItem("password")
signbutton.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value===""||password.value===""){
        alert("enter data")
    }
    else{
        if(getuser && getuser.trim()===username.value&& getpass &&getpass.trim()===password.value){
            setTimeout(()=>{
                window.location='index.html'
            },1000)
        }
        else{
            alert("wrong data")
        }
    }
})