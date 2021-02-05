function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateName(name) {
  let re = /^[A-Za-z\s]+$/;
  return re.test(name);
}

function validateForm() {
  let fn = document.forms["Valid_form"]["fname"].value;
  let em = document.forms["Valid_form"]["email_val"].value;
  let ag = document.forms["Valid_form"]["age"].value;
  if (validateName(fn)) {
    if (ag < 18) {
      alert("Input your correct age");
      return false;
    } else {
      if (validateEmail(em)) {
        alert("All is correct!");
        return true;
      } else {
        alert("Input correct email!");
      }
    }
  } else {
    alert("Input correct name!");
    return false;
  }
}
