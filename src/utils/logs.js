export const group = (type, content = '', color = 'orange') => {
  console.group(`%c<-----------  ${type}  ----------->`, `color: ${color}`)
  console.log(content)
  console.groupEnd()
}
