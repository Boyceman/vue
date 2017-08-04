import Vue from 'vue'
import Router from 'vue-router'
import components from './router'

Vue.use(Router)

const combineRoutes = (components) => {
  return components.map(({ path, name, component, children }) => ({
    path,
    name,
    component,
    children
  }))
}

export default new Router({
  routes: combineRoutes(components)
})
