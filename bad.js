function insecurePassword() {
  // BAD: the random suffix is not  secure
  var suffix = Math.random();
  var password = "sssAAAA" + suffix;
  return password;
}

let regex = new RegExp('(^\s*)my-marker(\s*$)'),
  isMyMarkerText = regex.test(text);

console.log('Will this help')
