import * as logs from '@/utils/logs'

export const setStorage = (name, value) => {
  window.sessionStorage.setItem(name, JSON.stringify(value))
  if (getStorage(name) === null) logs.group(`setStorage ${name} failed!`, null, 'red')
}

export const getStorage = (name) => {
  return JSON.parse(window.sessionStorage.getItem(name))
}

export const removeStorage = (name) => {
  window.sessionStorage.removeItem(name)
  if (getStorage(name) !== null) logs.group(`removeStorage ${name} failed!`, null, 'red')
}
