const fs = require('fs')
const path = require('path')
const routesDirPath = path.resolve(__dirname, '../src/routes/')
const routesJsPath = path.resolve(__dirname, '../src/routes/router/routes.js')
let timer

module.exports = function (req, res, next) {
  clearTimeout(timer)
  timer = setTimeout(function () {
    fs.readdir(routesDirPath, (err, files) => {
      if (err) throw err
      let routes = []
      let imports = [`import combineRoutes from './combineRoutes'`]
      files.forEach(file => {
        if (file.split('.')[1] === 'vue') {
          routes.push(file.split('.')[0])
          imports.push(`import { _router as ${file.split('.')[0]} } from '../${file.split('.')[0]}'`)
        }
      })
      // TODO don't rewrite file if doesn't add file

      const routesJs = `${imports.join('\n')}

export const routes = [
  ${routes.join(',\n  ')}
]

export default combineRoutes(routes)
`

      fs.writeFile(routesJsPath, routesJs, err => {
        if (err) throw err
      })
    })
  }, 2000)
  next()
}

