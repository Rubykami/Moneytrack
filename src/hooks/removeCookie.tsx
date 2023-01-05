import Cookie from 'js-cookie'

const removeCookie = (cookiename: string): void => {
    Cookie.remove(cookiename)
}

export default removeCookie
