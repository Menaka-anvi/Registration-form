function Member(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

//Display class
function Display() {}

//add the method to validate the prototype
Display.prototype.validate = function (member) {
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
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!passwordPattern.test(member.password)) {
    document.getElementById("password").classList.add("is-invalid");
    valid = false;
  } else {
    document.getElementById("password").classList.remove("is-invalid");
  }

  return valid;
};

//clear form
Display.prototype.clear = function () {
  let memberform = document.getElementById("registrationForm");
  memberform.reset();
  document.querySelectorAll(".form-control").forEach((el) => el.classList.remove("is-invalid"));
};

Display.prototype.add = function (member) {
  let tableBody = document.getElementById("tableBody");
  let row = `<tr>
    <td>${member.name}</td>
    <td>${member.email}</td>
    </tr>
    `;
  tableBody.innerHTML += row;
};

Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("showmessage");
  message.innerHTML = `<div class="alert alert-${type}" role="alert">
${displayMessage}
</div>`;

  setTimeout(function () {
    message.innerHTML = "";
  }, 3000);
};

// search method
Display.prototype.search = function () {
  let filter = document.getElementById("searchInput").value.toLowerCase();
  let rows = document.querySelectorAll("#tableBody tr");

  rows.forEach((row) => {
    let text = row.textContent.toLowerCase();
    if (text.includes(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
};

//main function
let memberform = document.getElementById("registrationForm");
memberform.addEventListener("submit", memberFormSubmit);

function memberFormSubmit(e) {
  e.preventDefault();
  console.log("form is getting submitted");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let data = new Member(name, email, password);
  console.log(data);

  let display = new Display();

  if (display.validate(data)) {
    display.add(data);
    display.clear();
    display.show("success", "Registration successful");
  } else {
    display.show(
      "danger",
      "Please correct the highlighted");
    display.show("danger", "Please correct the highlighted");
    display.clear();
  }
}

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let display = new Display();
  display.search();
});

document.getElementById("searchInput").addEventListener("input", function () {
  let display = new Display();
  display.search();
});
