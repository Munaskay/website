const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      containerFormRegister = document.querySelector(".register"),
      containerFormLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide")
})

document.getElementById('form_login')
.addEventListener("submit", function (event) {
    event.preventDefault()

    let formData = {}

    for (const element of event.target.elements) {
        if (element.name && !element.file) {
            formData[element.name] = element.value
        }
    }

    fetch("http://localhost:5000/api/v1/auth/login", {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': "application/json"
        }
    })
    .then(r => r.json())
    .then(r => {

        if(r.error) {
            console.log(r.message);
        } else {
            window.location.href = '/perfil.html'
        }
 
    })
    .catch(r => {
        console.log(r);
    })
})