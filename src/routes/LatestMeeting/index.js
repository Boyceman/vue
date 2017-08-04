import config from './config'

const { path, name, children } = config

const _children = children.reduce((path, name) => {
  return (path[name] = name)
}, {})

const getComponent = (name) => {
  console.dir(this)
  return resolve => require.ensure([], () => {
    resolve(require(`./${name}.vue`))
  }, name)
}

_children.component = getComponent(_children.name)

export default {
  path,
  name,
  component: getComponent(name),
  children: [_children]
}
