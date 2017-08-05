const fs = require('fs')
const path = require('path')
const mintUIConf = require('../src/mintUI.conf')
const mintUIPath = path.resolve(__dirname, '../src/mintUI.js')
let timer

module.exports = function (req, res, next) {
  clearTimeout(timer)
  timer = setTimeout(function () {
    const printVueUse = () => (mintUIConf.map(component => (`Vue.use(${component})\n`)).join(''))
    const mintUI = `import Vue from 'vue'
import 'mint-ui/lib/style.css'
import {
  ${mintUIConf.join(',\n  ')}
} from 'mint-ui'

${printVueUse()}`

    fs.writeFile(mintUIPath, mintUI, err => {
      if (err) throw err
    })
  }, 2000)
  next()
}


