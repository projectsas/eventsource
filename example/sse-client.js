var EventSource = require('..')
var es = new EventSource('http://localhost:8080/sse')
es.onEvent = function (e) {
  console.log(e.type + ': ' + e.data)
}
