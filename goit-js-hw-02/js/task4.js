function formatString(string, maxLength = 40) {
  // Write code under this line
  let musString = string.split("");
  if (musString.length > maxLength) {
    let deletedScores = musString.splice(0, maxLength);
    let result = deletedScores.join("");
    return result + "...";
  } else {
    return string;
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
