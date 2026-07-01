class Member {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password
  }
}

class Display {
  add(member) {
    let tableBody;
    tableBody = document.getElementById("tableBody");
    let row = `<tr>
    <td>${member.name}</td>
    <td>${member.email}</td>

    </tr>
    `;
    tableBody.innerHTML += row;
  }

  clear() {
    let memberform = document.getElementById("registration form");
    guviform.reset();
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
    if (!emailPattern.test(guvi.email)) {
      document.getElementById("email").classList.add("is-invalid");
      valid = false;
    } else {
      document.getElementById("email").classList.remove("is-invalid");
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordPattern.test(guvi.password)) {
      document.getElementById("password").classList.add("is-invalid");
      valid = false;
    } else {
      document.getElementById("password").classList.remove("is-invalid");
    }

    return valid
  }

  show(type, displayMessage) {
    let message = document.getElementById("showmessage");
    message.innerHTML = `<div class="alert alert-${type}" role="alert">
${displayMessage}
</div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 3000);
  }
}

let memberform = document.getElementById("registration form");
memberform.addEventListener("submit", guviFormSubmit);

function memberFormSubmit(e) {
  e.preventDefault();
  console.log("form is getting submitted");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;


  let data = new member(name, email, password);
  console.log(data);

  let display = new Display();

  if (display.validate(data)) {
    display.add(data);
    display.clear();
    display.show("success", "Registration successful!");
  } else {
    display.show(
      "danger",
      "Please correct the highlighted errors",
    );
    display.clear();
  }
}

// search functionality

let searchForm = document.querySelector('form[role="search"]');
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchInput = searchForm.querySelector('input[type="search"]').value.toLowerCase();
  let tableRows = document.querySelectorAll('#tableBody tr');

  tableRows.forEach((row) => {
    let rowtext = row.innerText.toLowerCase();
    if (rowtext.includes(searchInput)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});
