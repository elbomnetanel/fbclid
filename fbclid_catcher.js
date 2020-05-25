if (window.location.href.indexOf('fbclid') > 0) {
}
else {
const queryString = window.location.search;
var cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
var fbclick = cookies._fbc;
var fbclick_final = fbclick.slice(19, );
history.pushState({}, null, queryString+'&fbclid='+fbclick_final);
}
