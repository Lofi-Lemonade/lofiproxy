passwordInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    validate();
  }
});

var attempt = 3;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    alert("Logged in as Admin");
    window.location = "proxy.html";
    return false;
  }
  else {
    attempt--;
    alert(
      "WRONG FUCKING PASSWORD IDIOT You have " + attempt + " attempt(s) left"
    );
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
