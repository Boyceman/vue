import Mock from 'mockjs'

export default Mock.mock('http://g.cn', {
  'list|10': [{
    'title': '@ctitle',
    'image': '@image(\'122x112\', \'#d52535\')',
    'date': '@date("yyyy-MM-dd HH:mm-HH:mm")',
    'name': '@cname',
    'organization': '@csentence(4)'
  }]
})
