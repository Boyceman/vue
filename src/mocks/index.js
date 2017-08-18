import Mock from 'mockjs'
const baseUrl = 'http://g.cn'

export const listData = Mock.mock(`${baseUrl}/list`, {
  count: 100,
  errorCode: 0,
  errorMsg: 'null',
  'list|10': [{
    'id': '@id',
    'name': '@cname （@ctitle(5)）',
    'title': '@ctitle(10,20)',
    'organization': '@csentence(4)',
    'image': '@image(\'122x112\', \'#d52535\')',
    'date': '@date("yyyy-MM-dd HH:mm-HH:mm")',
    'recommend': '@boolean',
    'haveNote': '@integer(0, 2)',
    'haveAudio': '@integer(0, 2)',
    'haveVideo': '@integer(0, 2)',
    'haveDownload': '@integer(0, 2)'
  }]
})

export const messageData = Mock.mock(`${baseUrl}/message`, {
  count: 100,
  errorCode: 0,
  errorMsg: 'null',
  'list|10': [{
    'title': '@ctitle(10,20)',
    'organization': '@csentence(4)',
    'now': '@now',
    'date': '@date("yyyy-MM-dd HH:mm-HH:mm")',
    'image': '@image(\'122x112\', \'#d52535\')',
    'phone': /^(0\d{2,3}-)?\d{7,8}$/,
    'roomNumber': '@string("number", 4)',
    'password': '@string("number", 4)'
  }]
})

export const infoData = Mock.mock(`${baseUrl}/info`, {
  'object|3': {
    'name': '@cname',
    'organization': '@csentence(4)',
    'avatar': '@image(\'110x110\', \'#894FC4\', \'#fff\', \'avatar\')'
  }
})
