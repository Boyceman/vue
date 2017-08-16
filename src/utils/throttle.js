export default (fn, delay = 200) => {
  var now, lastExec, timer, context, args

  var handle = function () {
    fn.call(context, args)
    lastExec = now
  }

  return function () {
    context = this
    args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    now = +new Date()
    if (lastExec) {
      if (now - lastExec > delay) {
        handle()
      } else {
        timer = setTimeout(handle, (delay - (now - lastExec)))
      }
    } else {
      handle()
    }
  }
}
