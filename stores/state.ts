import { defineStore } from 'pinia'
import { authUser } from '~/utils/index'

const AUTH_KEY = 'isAuth'
export const useStateStore = defineStore('state', {
  state: () => ({
    isAuth: false,
    error: '',
  }),

  actions: {
    auth(data: string, password: string, type: string) {
      if (authUser(data, password, type)) {
        this.isAuth = true
        this.error = ''
        this.saveToLocalStorage()
      }
      else {
        this.error = 'Ошибка аунтефикации: Неверный логин или пароль'
      }
    },
    logout() {
      this.isAuth = false
      this.removeFromLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem(AUTH_KEY, this.isAuth.toString())
    },
    removeFromLocalStorage() {
      localStorage.removeItem(AUTH_KEY) // Удаляем состояние из localStorage
    },
    loadFromLocalStorage() {
      const storedValue = localStorage.getItem(AUTH_KEY)
      if (storedValue !== null)
        this.isAuth = storedValue === 'true'
    },
    load() {
      this.loadFromLocalStorage() // Загружаем состояние из localStorage при инициализации
    },
  },
})
