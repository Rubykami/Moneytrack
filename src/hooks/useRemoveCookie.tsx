import Cookie from 'js-cookie'

const useRemoveCookie = (cookiename: string): void => {
    Cookie.remove(cookiename)
}

export default useRemoveCookie
