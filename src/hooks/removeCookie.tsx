import Cookie from 'js-cookie'


const removeCookie = (cookiename: string) => {
    return Cookie.remove(cookiename)
}

export default removeCookie;