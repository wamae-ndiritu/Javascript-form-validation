const btn = document.getElementById("btn");
const checkPassBtn = document.getElementById("check-pass");
let errors = [];
let isViewPassword = false; // will use to toggle visibility of passwords

// viewing password
checkPassBtn.addEventListener("click", function () {
  const passwords = document.querySelectorAll(".password-input");
  if (isViewPassword) {
    passwords.forEach((password) => {
      password.type = "password"; // make password invisible
      isViewPassword = false;
    });
  } else {
    passwords.forEach((password) => {
      password.type = "text"; // make password visible
      isViewPassword = true;
    });
  }
});

//  on submitting the form data
btn.addEventListener("click", function () {
  isError = false;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const pass = document.getElementById("password_1").value;
  const confirmingPass = document.getElementById("password_2").value;

  let errorSpan;

  //   name is empty
  if (name === "") {
    errors = [
      {
        message: "Name is required!",
      },
    ];

    const nameElement = document.getElementById("name");
    nameElement.classList.add("error-border");

    const errorSpan = document.querySelector(".error-name");
    errorSpan.innerHTML = `${errors[0].message}`;
  } else {
    // name is not empty
    const nameElement = document.getElementById("name");
    nameElement.classList.remove("error-border");

    const errorSpan = document.querySelector(".error-name");
    errorSpan.innerHTML = "";
  }

  //   email is empty
  if (email === "") {
    errors = [
      {
        message: "Email is required!",
      },
    ];

    const emailElement = document.getElementById("email");
    emailElement.classList.add("error-border");

    errorSpan = document.querySelector(".error-email");
    errorSpan.innerHTML = `${errors[0].message}`;
  } else {
    // email is not empty
    const emailElement = document.getElementById("email");
    emailElement.classList.remove("error-border");

    errorSpan = document.querySelector(".error-email");
    errorSpan.innerHTML = "";
  }

  //   contact validation
  const contactElement = document.getElementById("contact");
  if (contact === "") {
    errors = [
      {
        message: "Contact required!",
      },
    ];

    contactElement.classList.add("error-border");

    errorSpan = document.querySelector(".error-contact");
    errorSpan.innerHTML = `${errors[0].message}`;
  } else {
    //  contact not empty
    if (contact.slice(0, 2) !== "07") {
      // a valid phone No starts with 07 or 01 in Kenya
      errors = [
        {
          message: "Invalid phone No! Use 07XX XXX XXX format",
        },
      ];

      contactElement.classList.add("error-border");
      errorSpan = document.querySelector(".error-contact");
      errorSpan.innerHTML = `${errors[0].message}`;
    } else {
      if (contact.length !== 10) {
        // valid phone No has 10 digits in the format 07XX XXX XXX 0R 01XX XXX XXX
        errors = [
          {
            message: "Invalid phone No! use 10 digits...",
          },
        ];

        contactElement.classList.add("error-border");
        errorSpan = document.querySelector(".error-contact");
        errorSpan.innerHTML = `${errors[0].message}`;
      } else {
        contactElement.classList.remove("error-border");
        errorSpan = document.querySelector(".error-contact");
        errorSpan.innerHTML = "";
      }
    }
  }

  //   get the pass input to add errors
  const password = document.getElementById("password_1");
  const confirmPassword = document.getElementById("password_2");

  if (pass === "") {
    //   password is empty
    errors = [
      {
        message: "Password is required!",
      },
    ];
    password.classList.add("error-border");
    errorSpan = document.getElementById("pass_1");
    errorSpan.innerHTML = `${errors[0].message}`;
  } else {
    // password is not empty
    if (pass.length < 8) {
      // password less tha 8 characters
      errors = [
        {
          message: "Password must have atleast 8 characters!",
        },
      ];
      password.classList.add("error-border");
      errorSpan = document.getElementById("pass_1");
      errorSpan.innerHTML = `${errors[0].message}`;
    } else {
      // password is atleast 8 characters
      password.classList.remove("error-border");
      errorSpan = document.getElementById("pass_1");
      errorSpan.innerHTML = "";

      if (confirmingPass === "") {
        // confirming password is empty
        errors = [
          {
            message: "Please confirm your password!",
          },
        ];

        confirmPassword.classList.add("error-border");
        errorSpan = document.getElementById("pass_2");
        errorSpan.innerHTML = `${errors[0].message}`;
      } else {
        // confirming password not empty
        if (pass !== confirmingPass) {
          // password and confirming password doest not match
          errors = [
            {
              message: "Password do not match!",
            },
          ];
          password.classList.add("error-border");
          confirmPassword.classList.add("error-border");

          errorSpan = document.querySelectorAll(".error-pass");
          errorSpan.forEach((span) => {
            span.innerHTML = `${errors[0].message}`;
          });
        } else {
          // confirming password and password match
          password.classList.remove("error-border");
          confirmPassword.classList.remove("error-border");
          errorSpan = document.querySelectorAll(".error-pass");
          errorSpan.forEach((span) => {
            span.innerHTML = "";
          });
        }
      }
    }
  }
});
