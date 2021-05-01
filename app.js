const form  = document.querySelector(".container .form-box");
const control = document.querySelector(".container .form-box .form-control");

console.log(control);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var input = control.querySelector(".email").value;

    console.log(control);

    if(validateEmail(input)){
        form.querySelector(".form-control").classList.remove("error");
    }
    else {
        form.querySelector(".form-control").classList.add("error")
    }
});



function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

