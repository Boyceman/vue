export const group = (type, content = '') => {
  console.group(`%c<-----------  ${type}  ----------->`, 'color: orange')
  console.log(content)
  console.groupEnd()
}
