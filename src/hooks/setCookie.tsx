import Cookies from 'js-cookie'

const setCookie = (cookieName: string, usrInfo: string) => {
    Cookies.set(cookieName, usrInfo, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/',
    })
}

export default setCookie
