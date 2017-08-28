import Mock from 'mockjs'

const baseUrl = 'http://g.cn'

export const listData = Mock.mock(`${baseUrl}/list`, {
  count: 50,
  errorCode: 0,
  errorMsg: 'null',
  'list|10': [{
    'id': '@increment',
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
  count: 50,
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

// TODO bind fetch date
export const detailData = Mock.mock(`${baseUrl}/detail?id=1`, {
  'id': 10,
  'title': '在你花一些时日了',
  'startTime': '2017-08-04 18:00:00',
  'endTime': '2017-08-04 22:00:00',
  'description': '在你花一些时日了解这些资源之后，我们建议你参考 webpack-simple 。只要遵循指示，你就能很快地运行一个用到 .vue 组件，ES2015 和 热重载( hot-reloading ) 的 Vue 项目!\n' +
  '这个模板使用 Webpack，一个能将多个模块打包成最终应用的模块打包工具。 这个视频 介绍了Webpack的更多相关信息。 学习了这些基础知识后， 你可能想看看 这个在 Egghead.io上的 高级 Webpack 课程.\n' +
  '在 Webpack中，每个模块被打包到 bundle 之前都由一个相应的 “loader” 来转换，Vue 也提供 vue-loader 插件来执行 .vue 单文件组件 的转换. 这个 webpack-simple 模板已经为你准备好了所有的东西，但是如果你想了解更多关于 .vue 组件和 Webpack 如何一起运转的信息，你可以阅读 vue-loader 的文档。',
  'sponsors': [{ 'id': 1, 'name': '前端开源', 'category': 'OTHERS', 'description': '其他', 'url': '' }],
  'lecturers': [{
    'id': 2,
    'name': '李罡',
    'role': 'ANALYST',
    'description': '',
    'title': 'Professor',
    'phoneNum': '',
    'email': '',
    'institute': { 'id': 1, 'name': 'wind', 'category': 'OTHERS', 'description': '其他', 'url': '' },
    'remark': '',
    'user': { 'id': 6, 'crmId': 0, 'imId': 0, 'name': '李罡', 'phoneNum': '', 'email': '', 'institutionName': 'null' }
  }, {
    'id': 3,
    'name': '李罡2',
    'role': 'ANALYST',
    'description': '',
    'title': 'Professor',
    'phoneNum': '',
    'email': '',
    'institute': { 'id': 1, 'name': 'wind', 'category': 'OTHERS', 'description': '其他', 'url': '' },
    'remark': '',
    'user': { 'id': 6, 'crmId': 0, 'imId': 0, 'name': '李罡', 'phoneNum': '', 'email': '', 'institutionName': 'null' }
  }],
  'broadcastType': 'PHONEWEB',
  'meetingStatus': 'ENDED',
  'agenda': '在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，我们在你花一些时日了解这些资源之后，我们<div>建议你参考 webpack-simple 。只要遵循指示，你就能很快地运行一个用到 .vue 组件，ES2015 和 热重载( hot-reloading ) 的 Vue 项目!</div>',
  'meetingRoom': '{"roomNo":8007,"roomId":0,"pushStreamAddress":"","broadcastAddress":"http://live.wind.com.cn/radio/room10.m3u8"}',
  'signupNum': 0,
  'capacity': 100000,
  'signupStatus': false,
  'bookmarkStatus': true,
  'meetingCode': 'null',
  'logoUrl': 'MeetingDocument/2017-08-08/1a7ebc33-c353-4db6-bb28-e5031cef2fe8.jpg',
  'audioId': 0,
  'videoId': 0,
  'pdfId': 5,
  'pptId': 4,
  'attachments': [{ 'id': 3, 'documentName': 'test111.pdf' }],
  'relatedStocks': null
})

export const comments = Mock.mock(`${baseUrl}/comments`, {
  'success': true,
  'errorCode': 0,
  'errorMsg': 'null',
  'list|5': [{
    'id': '0a64cf56-9b49-4476-8b7e-33959b50b7c7',
    'content': '互动',
    'author': {
      'id': 51952,
      'crmId': 1513774,
      'imId': 110806079,
      'name': '李光兵',
      'phoneNum': '',
      'email': '',
      'institutionName': '信达证券股份有限公司(总部)'
    },
    'commentTime': '2017-08-21 17:28:03',
    'commentDevice': 'null',
    'parentCommentId': '',
    'parentAuthorName': 'null',
    'parentContent': 'null',
    'setTop': false,
    'meeting': {
      'id': 50381,
      'title': 'huihui test1',
      'description': 'test',
      'meetingType': 'PUBLIC',
      'broadcastType': 'PHONE',
      'capacity': 333,
      'field': 'OPERATIONAL_RESEARCH',
      'category': 'ANALYST_ROADSHOW',
      'startTime': '2017-08-23 20:00:00',
      'endTime': '2017-08-23 21:00:00',
      'sponsors': [{ 'id': 946, 'name': '南京wande', 'category': 'OTHERS', 'description': 'null', 'url': 'null' }],
      'lecturers': [{
        'lecturer': {
          'id': 5913,
          'name': '杨汇慧',
          'role': 'ANALYST',
          'description': '',
          'title': 'dec',
          'phoneNum': '13641672792',
          'email': 'hhyang@wind.com.cn',
          'institute': { 'id': 65, 'name': '万得资讯股份有限公司', 'category': 'OTHERS', 'description': '其他', 'url': '' },
          'remark': '',
          'user': {
            'id': 122706,
            'crmId': 0,
            'imId': 0,
            'name': '杨汇慧',
            'phoneNum': '13641672792',
            'email': 'hhyang@wind.com.cn',
            'institutionName': 'null'
          }
        },
        'displayOption': 'PRIMARY'
      }],
      'documents': [],
      'agenda': 'd&nbsp;',
      'meetingRoom': '{"roomNo":8493,"roomId":9}',
      'superCode': '5132',
      'creatorCrmId': 1533092,
      'createTime': '2017-08-23 19:37:35',
      'signupNum': 1,
      'attendance': 0,
      'auditor': {
        'id': 9,
        'account': 'huihuiy',
        'name': '杨汇慧',
        'cellPhone': '13641672792',
        'imAccount': 'hhyang@wind.com.cn',
        'crmId': 1533092,
        'password': 'aaabf0d39951f3e6c3e8a7911df524c2',
        'valid': true,
        'role': {
          'id': 1,
          'name': '超级管理员',
          'authorities': [{ 'id': 4, 'name': '评论列表', 'url': '/manageComments.html' }, {
            'id': 9,
            'name': '主办方管理',
            'url': '/sponsorsList.html'
          }, { 'id': 7, 'name': '合作伙伴', 'url': '/partners.html' }, {
            'id': 1,
            'name': '新建会议',
            'url': '/creatNewMeeting.html'
          }, { 'id': 12, 'name': '管理员列表', 'url': '/administratorList.html' }, {
            'id': 8,
            'name': '主讲人管理',
            'url': '/keynoteSpeakersList.html'
          }, { 'id': 10, 'name': '修改个人资料', 'url': '/personalInfo.html' }, {
            'id': 13,
            'name': '权限列表',
            'url': '/manageAuthority.html'
          }, { 'id': 3, 'name': '会议管理', 'url': '/meetingDetail.html' }, {
            'id': 5,
            'name': '评论管理',
            'url': '/commentDetail.html'
          }, { 'id': 2, 'name': '会议列表', 'url': '/manageMeetings.html' }, {
            'id': 11,
            'name': '修改密码',
            'url': '/password.html'
          }, { 'id': 6, 'name': '资料管理', 'url': '/manageDocuments.html' }]
        }
      },
      'auditTime': '2017-08-23 19:38:14',
      'industryTypes': [],
      'relatedStocks': [],
      'meetingStatus': 'ENDED',
      'recommend': false,
      'desktopShare': true
    },
    'anonymous': false,
    'delete': false
  }],
  'count': 20
})
