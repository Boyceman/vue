/**
 * routes generator
 * @param routes
 * @returns {Array|*|{}}
 */
export default (routes) => {
  let _children = []
  return routes.map(({ path, name, component, children = _children }) => {
    if (children) {
      children.forEach(child => {
        routes.forEach(({ name: parent }, index) => {
          if (child === parent) {
            _children.push(routes[index])
            routes.splice(index, 1)
          }
        })
      })
    }
    return {
      path,
      name,
      component,
      children: _children
    }
  })
}
