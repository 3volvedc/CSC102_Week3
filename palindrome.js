function checkPalindrome() {
  var str = document.getElementById("inputString").value.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Get the input value and remove non-alphanumeric characters
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          document.getElementById("result").innerHTML = "The given string is not a palindrome.";
          return;
      }
  }
  document.getElementById("result").innerHTML = "The given string is a palindrome!";
}
