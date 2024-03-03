// const registerForm = document.querySelector(".login-form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefoult();
//     const form = event.target;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     if (email === "" || password === "") {
//     return console.log("All form fields must be filled in")
// }

//     console.log(`Email: ${email.value}, Password: ${password.value}`);
//     // loginForm.reset();
// }

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

    console.log(`Email: ${email}, Password: ${password}`);
    
//   form.reset();
}

document.addEventListener('submit', (element) => {
    element.preventDefault();
    element.target.reset();
})