var EventSource = require('./eventsource')

if (typeof window === 'object') {
  window.EventSourcePolyfill = EventSource
  window.EventSource = EventSource
  module.exports = EventSource
} else {
  module.exports = EventSource
}
