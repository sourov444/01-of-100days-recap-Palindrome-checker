var checkButton = document.getElementById("checkPalindrome");

function isPalindrome(str) {
  'use strict';
  
  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

checkButton.addEventListener("click", function() {
  'use strict';
  
  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");
  
  if(isPalindrome(value)) {
    notification.innerHTML = `Yape! '${value}' is a palindrome`;
    notification.className = "alert alert-success";
  } else {
    notification.innerHTML = `Nope! '${value}' Ain't no palindrome`;
    notification.className = "alert alert-danger";
  }
});