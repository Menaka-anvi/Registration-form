class Member {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Display {
  add(member) {
    let tableBody = document.getElementById("tableBody");
    let row = `<tr>
<<<<<<< HEAD
    <td>${member.name}</td>
    <td>${member.email}</td>
    </tr>
    `;
=======
      <td>${member.name}</td>
      <td>${member.email}</td>
    </tr>`;
>>>>>>> 8b82a88 (Update index.html script.js scriptes6.js with search fixes)
    tableBody.innerHTML += row;
  }

  clear() {
<<<<<<< HEAD
    let memberform = document.getElementById("registration form");
=======
    let memberform = document.getElementById("registrationForm");
>>>>>>> 8b82a88 (Update index.html script.js scriptes6.js with search fixes)
    memberform.reset();
  }

  validate(member) {
    let valid = true;

    // Name validation
    if (member.name.length < 2) {
      document.getElementById("name").classList.add("is-invalid");
      valid = false;
    } else {
      document.getElementById("name").classList.remove("is-invalid");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(member.email)) {
      document.getElementById("email").classList.add("is-invalid");
      valid = false;
    } else {
      document.getElementById("email").classList.remove("is-invalid");
    }

    // Password validation
<<<<<<< HEAD
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
=======
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
>>>>>>> 8b82a88 (Update index.html script.js scriptes6.js with search fixes)
    if (!passwordPattern.test(member.password)) {
      document.getElementById("password").classList.add("is-invalid");
      valid = false;
    } else {
      document.getElementById("password").classList.remove("is-invalid");
    }

    return valid;
  }

  show(type, displayMessage) {
    let message = document.getElementById("showmessage");
    message.innerHTML = `<div class="alert alert-${type}" role="alert">
      ${displayMessage}
    </div>`;
    setTimeout(() => {
      message.innerHTML = "";
    }, 3000);
  }
}

<<<<<<< HEAD
=======
// form submit
>>>>>>> 8b82a88 (Update index.html script.js scriptes6.js with search fixes)
let memberform = document.getElementById("registrationForm");
memberform.addEventListener("submit", memberFormSubmit);

function memberFormSubmit(e) {
  e.preventDefault();
  console.log("form is getting submitted");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

<<<<<<< HEAD

=======
>>>>>>> 8b82a88 (Update index.html script.js scriptes6.js with search fixes)
  let data = new Member(name, email, password);
  console.log(data);

  let display = new Display();

  if (display.validate(data)) {
    display.add(data);
    display.clear();
    display.show("success", "Registration successful!");
  } else {
<<<<<<< HEAD
    display.show(
      "danger",
      "Please correct the highlighted errors");
    display.clear();
=======
    display.show("danger", "Please correct the highlighted errors");
>>>>>>> 8b82a88 (Update index.html script.js scriptes6.js with search fixes)
  }
}

// search functionality
let searchForm = document.querySelector('form[role="search"]');
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchInput = searchForm
    .querySelector('input[type="search"]')
    .value.toLowerCase();
  let tableRows = document.querySelectorAll("#tableBody tr");

  tableRows.forEach((row) => {
    let rowtext = row.innerText.toLowerCase();
    if (rowtext.includes(searchInput)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
