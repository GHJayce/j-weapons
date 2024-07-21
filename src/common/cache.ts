import { Cache } from '@type/common/cache.ts'
import { isEmpty } from '@/type/isEmpty.ts'
import { JWeapons } from '@type/index'

const main = (drive: JWeapons.ObjectAny): object => {
  const get = (key: string): string | null => {
    return drive.getItem(key)
  }
  const set = (key: string, val: string): void => {
    return drive.setItem(key, val)
  }
  const incr = (key: string, amount: number): number => {
    amount = amount || 1
    let res: string | null = get(key)
    res = res || '0'
    let resNumber: number = Number(res)
    resNumber += amount
    set(key, String(resNumber))
    return resNumber
  }
  const decr = (key: string, amount: number): number => {
    amount = amount || 1
    let res: string | null = get(key)
    res = res || '0'
    let resNumber: number = Number(res)
    resNumber -= amount
    set(key, String(resNumber))
    return resNumber
  }
  const hGet = (key: string): any => {
    let res = drive.getItem(key)
    return JSON.parse(res)
  }
  const hSet = (key: string, val: any): void => {
    return drive.setItem(key, JSON.stringify(val))
  }
  const del = (...keys: string[]): boolean => {
    let i: string
    for (i in keys) {
      drive.removeItem(keys[i])
    }
    return true
  }
  const clear = (): void => {
    drive.clear()
  }
  return {
    hGet,
    hSet,
    get,
    set,
    incr,
    decr,
    del,
    clear
  }
}

const local = () => {
  if (isEmpty(window) || isEmpty(window.localStorage) || isEmpty(window.localStorage.getItem)) {
    throw new Error('j-weapons: window.localStorage is not defined.')
  }
  return main(window.localStorage)
}

const session = () => {
  if (isEmpty(window) || isEmpty(window.sessionStorage) || isEmpty(window.sessionStorage.getItem)) {
    throw new Error('j-weapons: window.sessionStorage is not defined.')
  }
  return main(window.sessionStorage)
}

/**
 * 本地缓存封装
 * @param {String} driverName 驱动名称，支持local、session
 * @returns {Object}
 */
export const cache = (driverName?: Cache.DriverName): Cache.Return => {
  driverName = driverName || 'local'
  if (driverName === 'session') {
    return session()
  }
  return local()
}
