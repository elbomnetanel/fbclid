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
var fbp = cookies._fbp
var ua = window.navigator.userAgent
history.pushState({}, null, queryString+'&fbclid='+fbclick_final+'&fbp='+fbp+'ua'+ua);
}


For Google Tag manaer 

<script>
  
if (window.location.href.indexOf('fbclid') > 0) {
  console.log('Clickid is present url '+ window.location.href.indexOf('fbclid'))
  
} else {
  var queryString = window.location.search;
  var allCookies = document.cookie.split(';').map(function (cookie) {
    return cookie.split('=');
  })
  .reduce(function (cookies, line) {
    cookies[line[0].trim()] = line[1]
    return cookies;
    }, {});
  
  
  console.log('ALL COOKIES ++++++++++++++++++++', allCookies)
  
  var fbclick = allCookies._fbc;
  console.log('fbclick', fbclick)
  
  var fbclick_final = fbclick.slice(19);
  
   console.log('fbclick_final', fbclick_final)
  var fbp = allCookies._fbp;
  var ua = window.navigator.userAgent;
  
  var fbclid= fbclick_final+'&fbp='+fbp+'ua'+ua
  
 console.log('FINAL FBCLID', fbclid)
history.pushState({}, null, queryString+'&fbclid='+fbclid);
}
</script>




