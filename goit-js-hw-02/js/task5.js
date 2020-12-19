function checkForSpam(str) {
  "use strict";
  // Write code under this line
  let text = str.toLowerCase();
  if (text.includes("sale")) {
    return true;
  } else if (text.includes("spam")) {
    return true;
  }
  return false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
