const isLoggedin = () => {
    return (
        localStorage.getItem('access-token'),
        localStorage.getItem('uid'),
        localStorage.getItem('client')
    )
}

export default isLoggedin