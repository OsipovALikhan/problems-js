function move() {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      result += String.fromCharCode(str.charCodeAt(i) + 1);
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      result += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = move;
