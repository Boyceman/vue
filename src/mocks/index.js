import Mock from 'mockjs'
const baseUrl = 'http://g.cn'

export const listData = Mock.mock(`${baseUrl}/list`, {
  count: 100,
  errorCode: 0,
  errorMsg: 'null',
  'list|10': [{
    'name': '@cname （@ctitle(5)）',
    'title': '@ctitle(10,20)',
    'organization': '@csentence(4)',
    'image': '@image(\'122x112\', \'#d52535\')',
    'date': '@date("yyyy-MM-dd HH:mm-HH:mm")'
  }]
})

export const infoData = Mock.mock(`${baseUrl}/info`, {
  'object|3': {
    'name': '@cname',
    'organization': '@csentence(4)',
    'avatar': '@image(\'110x110\', \'#894FC4\', \'#fff\', \'avatar\')'
  }
})
