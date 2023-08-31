let username=document.getElementById("username")
let useremail=document.getElementById("email")
let password=document.getElementById("password")
let registerbutton=document.getElementById("sign-up")
registerbutton.addEventListener("click",function(e){
    e.preventDefault()//important 
    if(username.value===''|| useremail.value==='' ||password.value===''){
        alert("please fill data")
    }else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("useremail",useremail.value);
        localStorage.setItem("password",password.value);
        setTimeout(()=>{
            window.location='signin.html'
        },1000)
    }
})