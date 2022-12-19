let cacheKey = 'PWA-Countdown-Timer'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id')
if (id) {
  cacheKey = cacheKey + `_` + id
}
else if (window.location != window.parent.location) {
  let url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
  // console.log(url, window.location, window.parent.location, document.referrer, document.location.href)
  if (url) {
    cacheKey = cacheKey + '_' + url
  }
}

String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  hash = Math.abs(hash)
  return hash;
}

var appData = {
  db: {
    config: CONFIG,
    localConfig: LOCAL_CONFIG,
    output: []
  },
  cacheKey,
  inited: false,
}

// console.log(LOCAL_CONFIG)