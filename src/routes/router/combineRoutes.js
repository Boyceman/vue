/**
 * routes generator
 * @param routes
 * @returns {Array|*|{}}
 */
export default (routes) => {
  // TODO this version not support nested routes
  const initialChildren = undefined
  return routes.map(({ path, name, component, children = initialChildren }) => ({
    path,
    name,
    component,
    children
  }))
}
