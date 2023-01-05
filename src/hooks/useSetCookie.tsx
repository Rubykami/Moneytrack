import Cookies from 'js-cookie'

const useSetCookie = (cookieName: string, usrInfo: string): void => {
    Cookies.set(cookieName, usrInfo, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/',
    })
}

export default useSetCookie;
