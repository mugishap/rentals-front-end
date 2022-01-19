function confpass(){
    let confirmation = document.querySelector("#submit-btn")
    let pass1 = (document.querySelector("#password-input"))
    let pass2 = (document.querySelector("#confirm-input"))
    
    confirmation.addEventListener("click", () => {
        if (pass1 != pass2){
            window.alert("The passwords entered do not match!!")
        }
    })
}