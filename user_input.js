function validateInputs() {
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var zip = document.getElementById('zip').value;

    var fullName = first + ' ' + last;

    document.getElementById('message').innerText = "User data successfully stored.";

    if (first.length == 0) {
        document.getElementById('message').innerText = "Please enter a first name.";
        return;
    }
    if (last.length == 0) {
        document.getElementById('message').innerText = "Please enter a last name.";
        return;
    }
    if (fullName.length > 20) {
        document.getElementById('message').innerText = "Full name is too long. Please use a shorter name.";
        return;
    }
    if (zip.length !== 5 || isNaN(zip)) {
        document.getElementById('message').innerText = "Please enter a valid 5-digit zip code.";
        return;
    }
    
}
