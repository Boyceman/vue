export default (time) => {
  const timeDiffMap = [
    { value: 60 * 60 * 24 * 30, display: time },
    { value: 60 * 60 * 24, display: '天前' },
    { value: 60 * 60, display: '小时前' },
    { value: 60, display: '分钟前' }
  ]
  const timeStamp = new Date(time).getTime()
  const now = new Date('2017-09-21 19:58:59').getTime() // new Date().getTime()
  const diff = (now - timeStamp) / 1000
  let current, timeAgo

  for (let i = 0, len = timeDiffMap.length; i < len; i++) {
    current = timeDiffMap[i]
    timeAgo = Math.floor(diff / current.value)
    if (timeAgo > 0) {
      return i ? timeAgo + current.display : current.display
    }
  }
  return '刚刚'
}
