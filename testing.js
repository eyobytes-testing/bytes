function insecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = window.crypto.getRandomValues(new Uint32Array(1))[0];
  var password = "sssAAAA" + suffix;
  return password;
}

let regex = new RegExp('(^\s*)my-marker(\s*$)'),
  isMyMarkerText = regex.test(text);
