const setCookie = ()=>{
    let name = 'key'
    let value = prompt('valor:')

    document.cookie = name + "=" + value + ";" + expires
    alert(document.cookie)
}

const clearCookie = ()=>{
    document.cookie = 'key=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
    alert(document.cookie)
}