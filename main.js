//Navbar styling
let navbar = document.getElementsByClassName("navbar")[0];
window.addEventListener("scroll",function(){
    if(window.scrollY>22){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});
// Collapsible FAQ
let collapse = document.querySelectorAll(".collapsible");
let i;

for (i=0;i<collapse.length;i++){
    collapse[i].addEventListener("click",function(){
        let content =this.nextElementSibling;
        if(content.style.display==="block"){
            content.style.display="none";
        }
        else{
            content.style.display="block";
        }
    });
}
// Form Validation

function seterror(id, error){
    // sets error inside tag of id
    ele= document.getElementById(id);
    ele.getElementsByClassName("error")[0].innerHTML = error;  // span class value is changed to error message
    
}
function clearError(){          // when error is treated and now want to remove the error message
    errors = document.getElementsByClassName("error");
    for(let item of errors){
        item.innerHTML = "";
    }
}
function validateForm(){
    let returnval = true; // form will submit when it is true
    clearError();

    //perform validation and if validation fails, set the value of returnval to false
    let name = document.forms['myForm']["fname"].value;
    if(name.length==0){
        seterror("frontname","*Cannot be left empty!");
        return false;
    }
    
    let phone = document.forms['myForm']["phone"].value;
    if(phone.length!=10){
        seterror("Phone", "*Phone number should be of 10 digits!");
        return false;
    }
    let pass = document.forms['myForm']["password1"].value;
    if(pass.length<8){
        seterror("password1", "*Password should be of 8 characters");
        return false;
    }
    let pass2 = document.forms['myForm']["password2"].value;
    if(pass2!=pass){
        seterror("password2","*Password do not match")
        return false;
    }
    
    return returnval;  
}
// Responsive Navbar
function sidebar(){
    let sidebar = document.querySelector('.sidebar');
    let toggle = document.querySelector('.toggle');
    sidebar.classList.add("appear");
};

function Hidesidebar(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove("appear");
};